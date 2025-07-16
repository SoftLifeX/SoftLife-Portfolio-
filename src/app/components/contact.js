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


const charVariants_letsCollab = {
  hidden: { opacity: 0, y: "0.25em" },
  visible: {
    opacity: 1,
    y: "0em",
    transition: { duration: 0.4, ease: [0.175, 0.885, 0.32, 1.275] },
  },
};

const wordContainer_letsCollab = {
  visible: (i = 1) => ({
    transition: {
      staggerChildren: 0.04,
      delayChildren: i * 0.04,
    },
  }),
};
  

function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });

  const words = ["Let's", "collaborate"];
  

  return (
      <section className="home3">
        <div className="contact">
          <div className="container">
             <h1 data-scroll data-scroll-speed={0.1}>
              <motion.div
                  ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={wordContainer_letsCollab}
      className="flex flex-wrap text-[1.25rem] leading-tight"
      style={{
        whiteSpace: "normal",
        margin: 0,
        padding: 0,
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={`word-${i}`}
          style={{
            display: "inline-flex",
            marginRight: i !== words.length - 1 ? "0.4em" : "0",
          }}
          variants={wordContainer_letsCollab}
        >
          {word.split("").map((char, j) => (
            <motion.span
              key={`char-${i}-${j}`}
              variants={charVariants_letsCollab}
              style={{
                display: "inline-block",
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </motion.div>
    
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
