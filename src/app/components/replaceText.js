'use client';

import { useEffect, useRef, useState } from 'react';

const ScrambleRevealText = ({
  text,
  speed = 60,
  scrambleChars =  ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ'],
}) => {
  const [rendered, setRendered] = useState('');
  const scrambleRef = useRef([]);
  const frame = useRef(0);

  useEffect(() => {
    const cleanedText = text.split('');
    const totalChars = cleanedText.filter((c) => c !== '\n').length;

    const buildQueue = () => {
      const queue = [];
      let index = 0;
      for (let i = 0; i < cleanedText.length; i++) {
        const char = cleanedText[i];
        if (char === '\n') {
          queue.push({ type: 'linebreak' });
        } else {
          const start = index * 2;
          const end = start + 10 + Math.floor(Math.random() * 10);
          queue.push({ type: 'char', to: char, start, end });
          index++;
        }
      }
      return queue;
    };

    scrambleRef.current = buildQueue();

    const update = () => {
      const output = [];
      let completed = 0;
      let scrambleIndex = 0;

      for (let i = 0; i < scrambleRef.current.length; i++) {
        const item = scrambleRef.current[i];

        if (item.type === 'linebreak') {
          output.push('<br />');
        } else {
          const { start, end, to } = item;
          if (frame.current >= end) {
            output.push(`<span class="char reveal">${to}</span>`);
            completed++;
          } else if (frame.current >= start) {
            const randChar =
              scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
            output.push(
              `<span class="char scramble">${randChar}</span>`
            );
          } else {
            output.push('<span class="char scramble"> </span>');
          }

          scrambleIndex++;
        }
      }

      setRendered(output.join(''));

      if (completed < scrambleRef.current.filter(i => i.type === 'char').length) {
        frame.current++;
        requestAnimationFrame(update);
      }
    };

    update();
  }, [text, speed, scrambleChars]);

  return (
    <span
      id='replace'
      dangerouslySetInnerHTML={{ __html: rendered }}
    />
  );
};


export default ReplaceText;
