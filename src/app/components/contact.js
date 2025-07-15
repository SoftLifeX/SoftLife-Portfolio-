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


function Contact() {
const lineText = "Let's Collaborate.";


  const [splitChars, setSplitChars] = useState([]);

  useEffect(() => {
    setSplitChars(lineText.split(""));
  }, []);

  return (
      <section className="home3">
        <div className="contact">
          <div className="container">
            
             <motion.h1
      style={{
        fontSize: "clamp(3rem, 4vw, 5rem)",
        whiteSpace: "pre-wrap",
        display: "flex",
        flexWrap: "wrap",
        lineHeight: 5,
        maxWidth: "100%",
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
    >
      {splitChars.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{
            delay: index * 0.05,
            duration: 0.4,
          }}
          style={{
            display: "inline-block",
            marginRight: char === " " ? "0.25rem" : "0",
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.h1>
            
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
