'use client';


import { useEffect, useState } from 'react';

const ReplaceText = ({
  text,
  speed = 90,
  scrambleChars = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ'],
}) => {
  const [progress, setProgress] = useState(0);
  const [randomScramble, setRandomScramble] = useState([]);

  useEffect(() => {
    // Generate a random scramble character for each non-linebreak character
    const generated = text
      .split('')
      .map((char) =>
        char === '\n'
          ? null
          : scrambleChars[Math.floor(Math.random() * scrambleChars.length)]
      );
    setRandomScramble(generated);

    let frame = 0;
    const totalChars = text.replace(/\n/g, '').length;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= totalChars) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
      frame++;
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, scrambleChars]);

  const renderText = () => {
    let count = 0;
    return text.split('').map((char, i) => {
      if (char === '\n') return <br key={i} />;

      const showReal = count < progress;
      const displayChar = showReal ? char : randomScramble[i] || ' ';
      count++;

      return (
        <span
          key={i}
          className={`faketext ${ showReal ? "show" : "hide"}`}>
          {displayChar}
        </span>
      );
    });
  };

  return (
    <span
      id='replace'
    >
      {renderText()}
    </span>
  );
};
export default ReplaceText;
