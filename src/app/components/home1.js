'use client'
import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import Magnetic from "./magnetic"
import ScrambleText from "./scrambleText"
import ReplaceText from "./replaceText"
import ArrowIcon from "./svg/arrow"
import { useGSAP } from '@gsap/react';

function Home1() {

//header animation 
  const splitByChar = (text) => text.split("");
  const staticText = ", I'm Daniel C. Daniel";
  const secondaryText = "Software Engineer";

  const dynamicWords = [ "Hola", "Hey", "Guten Tag", "Nǐ hǎo", "سلام", "Bonjour", "مرحبا", "óla", "नमस्ते", "こんにちは"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % dynamicWords.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);
  const currentDynamic = dynamicWords[index];


//paragraph animation
const dynamicWordsB = [
  "a Content Creator",
  "a Lover of the Arts",
  "a bit of a gamer",
  "a Travel Enthusiast",
];

const line1TextA = "an award-winning";
const line1TextB = "Full-stack | Mobile";
const line2Text = "Software Engineer, Designer &";
const renderTextByWordAndLetter = (text, baseDelay = 0, noSlide = false) => {
  return text.split(" ").map((word, wordIndex) => (
    <span key={`${word}-${wordIndex}`} style={{ display: "inline-block", marginRight: "0.5ch" }}>
      {word.split("").map((char, charIndex) => (
        <motion.span
          key={`${char}-${wordIndex}-${charIndex}`}
          initial={noSlide ? { opacity: 0 } : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: baseDelay + (wordIndex * 0.3) + (charIndex * 0.05),
            duration: 0.5,
          }}
          style={{ display: "inline-block", whiteSpace: "pre" }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  ));
};

  const [indexB, setIndexB] = useState(0);
  const [showDynamicB, setShowDynamicB] = useState(true);
  const firstLoadB = useRef(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      firstLoadB.current = false;

      const interval = setInterval(() => {
        setShowDynamicB(false);
        setTimeout(() => {
          setIndexB((prev) => (prev + 1) % dynamicWordsB.length);
          setShowDynamicB(true);
        }, 300);
      }, 3000);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);
  
//sliding text
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-500px",
    })
    requestAnimationFrame(animate);
  }, [])

  const animate = () => {
    if(xPercent < -100){
      xPercent = 0;
    }
    else if(xPercent > 0){
      xPercent = -100;
    }
    gsap.set(firstText.current, {xPercent: xPercent})
    gsap.set(secondText.current, {xPercent: xPercent})
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  }

  const [status,  setStatus] = useState("Available");

  const isInView = useInView;
  
    
  return (
      <section className="home1">
        <div className="homepage">
      <div className="pointer">
        <ArrowIcon />
      </div>
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
       whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
       transition={{ delay: 0.3, duration: 0.6, ease: [0.755, 0.050, 0.855, 0.060] }}
  className="statusContainer scale">
    {status === "Available" ? (
      <div className="statusBar1">
     
     <p><span className="indicator" />Available for New Projects</p>
     </div>
    ) : (
      <div/>
     )}

     {status === "Busy" ? (
      <div className="statusBar2">
     <p><span className="indicator"/> Sorry! currently unavailable :(</p>
     </div>
    ) : (
      <div/>
     )}
    </motion.div>
    <div className="h2Container">
     <h2>
      <div
      style={{
        fontSize: "1.5rem",
        lineHeight: "1.5rem",
        whiteSpace: "pre-wrap",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "0.3rem",
        overflow: "hidden",
      }}>
      <div style={{ display: "flex", gap: "0.4rem", overflow: "hidden" }}>
        {splitByChar(secondaryText).map((char, i) => (
          <motion.span
            key={`secondary-${char}-${i}`}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.4,
              delay: i * 0.05 + currentDynamic.length * 0.05 + 0.2,
            }}
            style={{
              display: "inline-block",
              overflow: "hidden",
            }}
          >
            {char}
          </motion.span>
        ))}
      </div>
    </div>
   </h2>
     
    <p style={{ fontSize: "1rem", lineHeight: "1rem", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "0.1rem" }}>
      
      {/* Line 1 */}
      <div>
        <span>{renderTextByWordAndLetter(line1TextA, 0)}</span>{" "}
        <span className="marker-highlight">
          {renderTextByWordAndLetter(line1TextB, 0.5)}
        </span>
      </div>

      {/* Line 2 */}
      <div>{renderTextByWordAndLetter(line2Text, 0)}</div>

      {/* Line 3: Dynamic Word */}
      <div style={{ height: "1.2em", display: "flex", alignItems: "center" }}>
        <AnimatePresence mode="wait">
          {showDynamicB && (
            <motion.div
              key={dynamicWordsB[indexB]}
              initial={firstLoadB.current ? { opacity: 0, y: 10 } : { opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.755, 0.050, 0.855, 0.060]  }}
              style={{ display: "inline-block" }}
            >
              {renderTextByWordAndLetter(dynamicWordsB[indexB], 0.5, !firstLoadB.current)}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
     </p>
    <svg xmlns="//www.w3.org/2000/svg" version="1.1" className="svg-filters">
      <defs>
      <filter id="marker-shape">
      <feTurbulence type="fractalNoise" baseFrequency="0 0.15" numOctaves="1" result="warp" />
      <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="30" in="SourceGraphic" in2="warp" />
      </filter>
      </defs>
   </svg>
       </div>

        <div className="sliderContainer">
        <div ref={slider} className="slider">
          <p className="slidertext" ref={firstText}>  Softlifeメ • Software Engineer | Designer⠀⠀⠀⠀  </p>
          <p className="slidertext" ref={secondText}>⠀Softlifeメ • Software Engineer | Designer⠀⠀⠀   </p>
        </div>
      </div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
       whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
       transition={{ delay: 0.3, duration: 0.6, ease: [0.755, 0.050, 0.855, 0.060] }}
         className="btnContainer scale">
            <Magnetic>
                <a href="./Daniel c. Daniel's Resume.pdf" download className="btn4">
                  Resume
                </a>
            </Magnetic>
           </motion.div>
           <motion.div
          initial={{ opacity: 0, scale: 0 }}
       whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
       transition={{ delay: 0.3, duration: 0.6, ease: [0.755, 0.050, 0.855, 0.060] }}
         className="btnContainer2 scale">
            <Magnetic>
            <Link href="/contact" className="btn2">
              Hire Me!
            </Link>
            </Magnetic>
           </motion.div>
        </div>
     </section>
  );
}

export default Home1
