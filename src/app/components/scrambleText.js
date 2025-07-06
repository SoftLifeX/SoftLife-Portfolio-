'use client';

import { useEffect, useRef } from 'react';

const ScrambleText = ({
  text,
  speed = 2,             // Frames per character
  lineDelay = 48,         // Default fixed delay (used if autoLineDelay = false)
  autoLineDelay = false,  // Enable automatic delay per line
}) => {
  const textRef = useRef();

  useEffect(() => {
    const chars = 'あいうえお かきくけこ';
    let frame = 0;
    let queue = [];
    const el = textRef.current;

    const lines = text.split('\n');
    let totalCharsBefore = 0;

    lines.forEach((line, lineIndex) => {
      // Use automatic delay if enabled
      const baseDelay = autoLineDelay
        ? totalCharsBefore * speed
        : lineIndex * lineDelay;

      for (let i = 0; i < line.length; i++) {
        queue.push({
          type: 'char',
          to: line[i],
          start: baseDelay + i * speed,
          end: baseDelay + i * speed + 10,
        });
      }

      totalCharsBefore += line.length;

      // Add line break if not the last line
      if (lineIndex < lines.length - 1) {
        queue.push({ type: 'linebreak' });
      }
    });

    const update = () => {
      let complete = 0;
      const output = [];

      for (let i = 0; i < queue.length; i++) {
        const item = queue[i];

        if (item.type === 'linebreak') {
          output.push('<br />');
          continue;
        }

        const { to, start, end } = item;

        if (frame >= end) {
          output.push(`<span class="reveal">${to}</span>`);
          complete++;
        } else if (frame >= start) {
          const randChar = chars[Math.floor(Math.random() * chars.length)];
          output.push(`<span class="scramble">${randChar}</span>`);
        } else {
          output.push(`<span class="scramble"> </span>`);
        }
      }

      el.innerHTML = output.join('');

      if (complete < queue.filter(i => i.type === 'char').length) {
        frame++;
        requestAnimationFrame(update);
      }
    };

    update();
  }, [text, speed, lineDelay, autoLineDelay]);

  return (
    <span
      ref={textRef}
      id='scrnble' 
    />
  );
};

export default ScrambleText;
