'use client'
import React, { useRef, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
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
    //splitText
 useGSAP(() => {
  document.fonts.ready.then(() => {
    const titleSplit = SplitText.create('.contact h1', {
      type: 'chars, words, lines',
      mask: 'lines',
      linesClass: 'lineParent',
      charsClass: 'char-inner',
    });

    const stagger = 0.025;
    const totalDuration = titleSplit.chars.length * stagger;

    // Make sure initial state is clean
    gsap.set('.contact h1', {
      opacity: 1,
      lineHeight: '0.8em',
    });

    const tl = gsap.timeline(
        {
         scrollTrigger: {
         trigger: '.contact',
         start: 'top 75%',
         }
        }
    );

    tl.from(titleSplit.chars, {
      opacity: 0,
      yPercent: 40,
      duration: 0.4,
      ease: 'back.out',
      stagger,
    });

    tl.to('.contact h1', {
      lineHeight: '1.2em',
      duration: totalDuration,
      ease: 'power1.out',
    }, '<'); // Starts at the same time as the char animation
  });
}, []);
  

  return (
      <section className="home3">
        <div className="contact">
          <div className="container">
             <h1>
              Let's Build Together!
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
    {/*<div className="socials">
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
          </div>*/} 
        </div>
        <div className="copyright">
          <p>
            <a href="https://linkedin.com/in/daniel-c-daniel-dev" target="_blank" data-title="linkedin">
              LinkedIn 
            </a>
          </p>  
                        
          <p>
            <i className="bx bx-copyright"></i> SoftLifeX 2025
          </p>
          
          <p>
            <a href="https://github.com/SoftLifeDev" target="_blank" data-title="Github">
             GitHub 
            </a>
          </p>
        </div>
      </section>
  );
}

export default Contact









