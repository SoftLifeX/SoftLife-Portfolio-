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




const ITEMS = ['a Content Creator📸', 'a Lover of the Arts🎨', 'a bit of a gamer🎮', 'a Travel Enthusiast✈️'];

function SectionHeroHeadingSpan({ word, isActive, shouldHide }) {
    if (isActive) return <span className='scrollspan active'>{word}</span>;
    if (shouldHide) return <span className='scrollspan hide'>{word}</span>;
    return <span className='scrollspan'>{word}</span>;
}

function Home1() {

const charVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -15 },
};

const containerVariants = {
  visible: {
    transition: { staggerChildren: 0.05 },
  },
};


  const words = [ "Hola", "Hey", "Guten Tag", "Nǐ hǎo", "سلام", "Bonjour", "مرحبا", "óla", "नमस्ते", "こんにちは"];
  const staticLines = ["I'm Daniel C. Daniel.", "Software Engineer"];
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const cycle = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setShow(true);
      }, 300);
    }, 3000);
    return () => clearInterval(cycle);
  }, []);

  
  const [currentWord, setCurrentWord] = useState(0);
    const prevWord = currentWord === 0 ? ITEMS.length - 1 : currentWord - 1;

    const changeWord = () => {
        if (currentWord < ITEMS.length - 1) {
            setCurrentWord((curr) => curr + 1);
        }else {
            setCurrentWord(0);
        }
    };

    useEffect(() => {
        const timeout = setTimeout(changeWord, 5000);
        return () => clearTimeout(timeout);
    });

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
       transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
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
      <h2   style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.3rem",
        fontSize: "1.5rem",
        lineHeight: "1.8rem",
      }}
    >
      {/* Dynamic Word */}
      <AnimatePresence mode="wait">
        {show && (
          <motion.span
            key={words[index]}
            style={{ display: "inline-flex" }}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={containerVariants}
          >
            {words[index].split("").map((ch, i) => (
              <motion.span
                key={ch + i}
                variants={charVariants}
                style={{ display: "inline-block" }}
              >
                {ch}
              </motion.span>
            ))}
          </motion.span>
        )}
      </AnimatePresence>

      {/* Static Text Lines */}
      {staticLines.map((line, i) => (
        <div
          key={i}
          style={{ overflow: "hidden", whiteSpace: "nowrap" }}
        >
          {line.split("").map((ch, j) => (
            <motion.span
              key={ch + j}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.3 + j * 0.02 }}
              style={{ display: "inline-block" }}
            >
              {ch}
            </motion.span>
          ))}
        </div>
      ))}
     </h2>
     
               <motion.p
                initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.6, ease: [0.16, 1, 0.3, 1] }} 
               className="hometext scale">
                an award-winning <span className="marker-highlight"> Full-stack | Mobile</span>
                  <br /> Software Engineer, Designer  & <br />{" "}
              <span className="scrolltext">
                {ITEMS.map((el, i) => (
                    <SectionHeroHeadingSpan key={i} word={el} isActive={currentWord === i} shouldHide={prevWord === i} />
                ))}
              </span>
              </motion.p>
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
       transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
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
       transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
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
