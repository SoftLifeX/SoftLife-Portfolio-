'use client';

import { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGsap } from './hooks/useGsap'; 

const words = ['Content Creator', 'Travel Enthusiast', 'a bit of a gamer', 'Lover of the Arts'];

export default function WordShuffler() {
  const wordRef = useRef(null);
  const [index, setIndex] = useState(0);

  // Animate the word change
  useGsap(wordRef, (el) => {
    const tl = gsap.timeline();
    tl.set(el, { y: '100%' });
    tl.to(el, { y: '0%', duration: 0.4, ease: 'power2.out' });
    return tl;
  }, [index]);

  // Trigger new word every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        overflow: 'hidden',
        height: '1.5em',
        display: 'inline-block',
        position: 'relative',
      }}
    >
      <div
        ref={wordRef}
        style={{
          display: 'inline-block',
          transform: 'translateY(0%)',
          willChange: 'transform',
        }}
      >
        {words[index]}
      </div>
    </div>
  );
}
