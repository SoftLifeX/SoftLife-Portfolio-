'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ScrambleText = ({ text, duration = 2 }) => {
  const textRef = useRef();

  useEffect(() => {
    const chars = ' あいうえお かきくけこ さしすせそ たちつてと ';
    let frame = 0;
    let queue = [];
    const el = textRef.current;
    const output = [];

    for (let i = 0; i < text.length; i++) {
      queue.push({
        from: chars[Math.floor(Math.random() * chars.length)],
        to: text[i],
        start: Math.floor(Math.random() * 40),
        end: Math.floor(Math.random() * 40 + 20),
      });
    }

    const update = () => {
      let complete = 0;
      output.length = 0;

      for (let i = 0; i < queue.length; i++) {
        let { from, to, start, end } = queue[i];

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

      if (complete === queue.length) return;
      frame++;
      requestAnimationFrame(update);
    };

    update();
  }, [text]);

  return (
    <span id='scramble' ref={textRef} />
  );
};

export default ScrambleText;
