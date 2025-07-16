'use client'
import React, { useRef, useEffect, useState } from "react";
import Magnetic from "./magnetic";
import Lottie from "lottie-react";
import { useLottie } from "lottie-react";
import Email from "@/app/assets/Email.json";
import Facebook from "@/app/assets/Facebook.json";
import Github from "@/app/assets/Github.json";
import Instagram from "@/app/assets/Instagram.json";
import LinkedIn from "@/app/assets/LinkedIn.json";
import Whatsapp from "@/app/assets/Whatsapp.json";
import X from "@/app/assets/X.json";
import { motion, useInView } from "framer-motion";

const easing = [0.175, 0.885, 0.32, 1.275];

const charVariants = {
  hidden: { opacity: 0, y: '0.25em' },
  visible: {
    opacity: 1,
    y: '0em',
    transition: {
      duration: 0.4,
      ease: easing,
    },
  },
};

const wordContainer = {
  visible: (i = 1) => ({
    transition: {
      staggerChildren: 0.05,
      delayChildren: i * 0.05,
      ease: easing,
    },
  }),
};
function renderWords(words, keyPrefix = '') {
  return (
    <motion.div
      className="text-container"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        whiteSpace: 'normal',
        fontSize: 'clamp(3rem, 4vw, 5rem)',
        height: "5rem",
      }}
      initial="hidden"
      animate="visible"
      variants={wordContainer}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${keyPrefix}-word-${i}`}
          style={{ display: 'inline-block', whiteSpace: 'pre' }}
          variants={wordContainer}
        >
          {word.split('').map((char, j) => (
            <motion.span
              key={`${keyPrefix}-char-${i}-${j}`}
              variants={charVariants}
              style={{ display: 'inline-block', whiteSpace: 'pre' }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </motion.div>
  );
 }

function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 1.0, once: true }); // fully in view
  const words = ['Let’s', 'collaborate'];
  

  return (
      <section className="home3">
        <div className="contact">
          <div className="container">
             <h1 data-scroll data-scroll-speed={0.1}>
              <div
      ref={ref}
      style={{
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {InView && renderWords(words, 'collab')}
    </div>
    
            </h1>
            <Magnetic>
            <a href="mailto:daniel.c.daniel.dev@gmail.com" target="_blank" className="btn4">
              daniel.c.daniel.dev@gmail.com
            </a>
            </Magnetic>
            <Magnetic>
            <a href="tel:+234 813 933 1585" target="_blank" className="btn2">
              +234 813 933 1585
            </a>
            </Magnetic>
          </div>
          <div className="socials">
                  <a href="https://x.com/SoftLife_Dev" target="_blank" data-title="X">
                   <Lottie
                  id="lottie3"
                  loop={false} 
                  animationData={X}
                    hover/>
                  </a>
                  <a href="https://wa.link/wjns9h" target="_blank" data-title="WhatsApp">
                    <Lottie
                  id="lottie3"
                  loop={false} 
                  animationData={Whatsapp}
                    hover/>
                  </a>
                  <a href="https://www.instagram.com/softlifekid/" target="_blank" data-title="Instagram">
                    <Lottie
                  id="lottie3"
                  loop={false} 
                  animationData={Instagram} 
                    hover/>
                  </a>
                  <a href="https://linkedin.com/in/daniel-c-daniel-dev" target="_blank" data-title="linkedin">
                     <Lottie
                  id="lottie3"
                  loop={false} 
                  animationData={LinkedIn}
                    hover/>
                  </a>
                  <a href="https://github.com/SoftLifeDev" target="_blank" data-title="Github">
                    <Lottie
                  id="lottie3"
                  loop={false} 
                  animationData={Github} 
                    hover/>
                  </a>
          </div>
        </div>
        <div className="copyright">
          <p>
            Copyright <i className="bx bx-copyright"></i> SoFTLife. All Rights
            Reserved 2025
          </p>
        </div>
      </section>
  );
}

export default Contact
