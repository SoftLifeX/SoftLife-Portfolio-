'use client';

import { useEffect, useRef } from 'react';

const ScrambleText = ({ text, speed = 5 }) => {
  const textRef = useRef();

  useEffect(() => {
    const chars = 'あいうえお かきくけこ さしすせそ';
    const output = [];
    const el = textRef.current;
    let frame = 0;

    const rawText = text.split('\n').join(' \n '); // buffer around \n
    const queue = [];

    for (let i = 0; i < rawText.length; i++) {
      const char = rawText[i];
      if (char === '\n') {
        queue.push({ type: 'linebreak' });
      } else {
        // Characters unscramble one after the other
        const delay = i * speed;
        queue.push({
          type: 'char',
          from: chars[Math.floor(Math.random() * chars.length)],
          to: char,
          start: delay,
          end: delay + 15,
        });
      }
    }

    const update = () => {
      let complete = 0;
      output.length = 0;

      for (let i = 0; i < queue.length; i++) {
        const item = queue[i];

        if (item.type === 'linebreak') {
          output.push('<br />');
          continue;
        }

        const { to, start, end } = item;

        if (frame >= end) {
          output.push(to);
          complete++;
        } else if (frame >= start) {
          output.push(
            `<span style="color:#aaa">${chars[Math.floor(Math.random() * chars.length)]}</span>`
          );
        } else {
          output.push('');
        }
      }

      el.innerHTML = output.join('');

      if (complete === queue.filter(i => i.type === 'char').length) return;
      frame++;
      requestAnimationFrame(update);
    };

    update();
  }, [text, speed]);

  return (
    <h1
      ref={textRef}
      id='scramble'
    />
  );
};

export default ScrambleText;
