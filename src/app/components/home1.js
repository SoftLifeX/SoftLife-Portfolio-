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

const fullLines = [
  ["An", "award-winning", "Full-Stack", "|", "Mobile"],
  ["Software", "Engineer,", "designer", "&"],
];

const dynamicWords = [
  "a Content Creator", "a Lover of the Arts", "a bit of a gamer", "a Travel Enthusiast"];

const charVariants = {
  hidden: { opacity: 0, y: "0.25em" },
  visible: { opacity: 1, y: "0em", transition: { duration: 0.35, ease: [0.175, 0.885, 0.32, 1.275] } },
};

const wordContainer = {
  visible: (i = 1) => ({
    transition: { staggerChildren: 0.03, delayChildren: i * 0.03, ease: [0.175, 0.885, 0.32, 1.275], delay: 0.4 },
  }),
};

function useCyclingWord(words, delay = 2000) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, delay);
    return () => clearInterval(interval);
  }, [words, delay]);

  return words[index];
}

function renderLine(words, keyPrefix = "") {
  return (
    <motion.div
      className="line"
      style={{
        display: "flex",
        flexWrap: "wrap",
        whiteSpace: "pre",
        fontSize: "1rem",
        gap: "0.3rem",
      }}
      initial="hidden"
      animate="visible"
      variants={wordContainer}
    >
      {words.map((word, i) => {
        const isHighlight = word === "Full-Stack";
        if (isHighlight) {
          const highlightWords = ["Full-Stack", "|", "Mobile"];
          return (
            <motion.span
              key={`${keyPrefix}-highlight-${i}`}
              className="marker-highlight"
              style={{ display: "inline-flex", whiteSpace: "pre" }}
              variants={wordContainer}
            >
              {highlightWords
                .join(" ")
                .split("")
                .map((char, j) => (
                  <motion.span
                    key={`highlight-char-${j}`}
                    variants={charVariants}
                    style={{ display: "inline-block", whiteSpace: "pre" }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
            </motion.span>
          );
        }

        if (["|", "Mobile"].includes(word)) return null;

        return (
          <motion.span
            key={`${keyPrefix}-word-${i}`}
            style={{ display: "inline-block", whiteSpace: "pre", overflow: "hidden" }}
            variants={wordContainer}
          >
            {word.split("").map((char, j) => (
              <motion.span
                key={`${keyPrefix}-char-${i}-${j}`}
                variants={charVariants}
                style={{ display: "inline-block", whiteSpace: "pre" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.span>
        );
      })}
    </motion.div>
  );
}
function Home1() {

//header animation
const dynamicWords1 = [ "Hola", "Hey", "Guten Tag", "Nǐ hǎo", "سلام", "Bonjour", "مرحبا", "óla", "नमस्ते", "こんにちは"];

const charVariant1 = {
  initial: { opacity: 0, y: "100%" },
  animate: {
    opacity: 1,
    y: "0%",
    transition: { duration: 0.4, ease: [0.175, 0.885, 0.32, 1.275] },
  },
};

const lineContainer1 = {
  animate: {
    transition: {
      staggerChildren: 0.05,
      ease: [0.175, 0.885, 0.32, 1.275],
      delay: 0.3,
    },
  },
};

  const [index1, setIndex1] = useState(0);
  const [isFirstLoad1, setIsFirstLoad1] = useState(true);
  const dynamicWord1 = dynamicWords1[index1];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsFirstLoad1(false);
    }, 2100);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!isFirstLoad1) {
      const interval = setInterval(() => {
        setIndex1((prev) => (prev + 1) % dynamicWords1.length);
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [isFirstLoad1]);

//paragraph animation
  const dynamicWord = useCyclingWord(dynamicWords, 1500);
    
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
       transition={{ delay: 0.3, duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] }}
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
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "0.4rem",
        fontSize: "1.5rem",
        lineHeight: 1,
        whiteSpace: "pre-wrap",
        overflow: "hidden",
      }}
    >
      {/* First Line */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.25rem" }}>
        {/* Dynamic Word */}
        <motion.div
          key={dynamicWord1 + isFirstLoad1}
          variants={lineContainer1}
          initial="initial"
          animate="animate"
          style={{ display: "flex", overflow: "hidden" }}
        >
          {dynamicWord1.split("").map((char, i) => (
            <motion.span
              key={`char-${i}`}
              variants={charVariant1}
              style={{
                display: "inline-block",
                whiteSpace: "pre",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.div>

        {/* Static Part */}
        <motion.div
          variants={lineContainer1}
          initial="initial"
          animate="animate"
          style={{ display: "flex", gap: "0.3rem", overflow: "hidden" }}
        >
          {", I'm Daniel c. Daniel"
            .split(" ")
            .map((word, i) => (
              <motion.span
                key={`static-${i}`}
                variants={charVariant1}
                style={{ display: "inline-block" }}
              >
                {word}
              </motion.span>
            ))}
        </motion.div>
      </div>

      {/* Second Line */}
      <motion.div
        variants={lineContainer1}
        initial="initial"
        animate="animate"
        style={{ display: "flex", gap: "0.3rem", overflow: "hidden" }}
      >
        {"Software Engineer"
          .split(" ")
          .map((word, i) => (
            <motion.span
              key={`second-${i}`}
              variants={charVariant1}
              style={{ display: "inline-block" }}
            >
              {word}
            </motion.span>
          ))}
      </motion.div>
    </div>
  </h2>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", margin: 0, overflow: "hidden" }}>
      {renderLine(fullLines[0], "line1")}
      {renderLine(fullLines[1], "line2")}

      <motion.div
        key={dynamicWord}
        style={{
          display: "flex",
          flexWrap: "wrap",
          whiteSpace: "pre",
          fontSize: "1rem",
          overflow: "hidden",
        }}
        initial="hidden"
        animate="visible"
        variants={wordContainer}
      >
        {dynamicWord.split("").map((char, j) => (
          <motion.span
            key={`dynamic-char-${j}`}
            variants={charVariants}
            style={{ display: "inline-block", whiteSpace: "pre", overflow: "hidden" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>
    </div>
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
          <h1 className="slidertext" ref={firstText}>  Softlifeメ • Software Engineer & Designer⠀⠀⠀⠀  </h1>
          <h1 className="slidertext" ref={secondText}>⠀Softlifeメ • Software Engineer & Designer⠀⠀⠀   </h1>
        </div>
      </div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
       whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
       transition={{ delay: 0.3, duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] }}
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
       transition={{ delay: 0.3, duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] }}
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
