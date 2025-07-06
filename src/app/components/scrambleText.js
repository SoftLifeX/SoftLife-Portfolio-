'use client';

import { useEffect, useRef, useState } from 'react';

const ScrambleText = ({ text, speed = 4, duration = 15 }) => {
  const textRef = useRef();
  const [html, setHtml] = useState('');

  useEffect(() => {
    const chars = ' あいうえお かきくけこ ';
    const rawText = text.split('\n').join(' \n ');
    const queue = [];
    let frame = 0;

    for (let i = 0; i < rawText.length; i++) {
      const char = rawText[i];
      if (char === '\n') {
        queue.push({ type: 'linebreak' });
      } else {
        const delay = i * speed;
        queue.push({
          type: 'char',
          to: char,
          start: delay,
          end: delay + duration,
        });
      }
    }

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
          output.push(`<span class="char final">${to}</span>`);
          complete++;
        } else if (frame >= start) {
          const randomChar = chars[Math.floor(Math.random() * chars.length)];
          const progress = (frame - start) / (end - start);
          const opacity = progress.toFixed(2);
          output.push(
            `<span class="char scramble" style="opacity:${opacity}">${randomChar}</span>`
          );
        } else {
          output.push(`<span class="char"> </span>`);
        }
      }

      setHtml(output.join(''));

      if (complete < queue.filter(i => i.type === 'char').length) {
        frame++;
        requestAnimationFrame(update);
      }
    };

    update();
  }, [text, speed, duration]);

  return (
    <div
      ref={textRef}
      id='scramble'
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default ScrambleText;
