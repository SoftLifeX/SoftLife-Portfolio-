'use client'
import { useState, useRef, useEffect } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from 'gsap/all';
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import Magnetic from "./magnetic"
import ScrambleText from "./scrambleText"
import WordShuffler from "./wordShuffler"
import ArrowIcon from "./svg/arrow"
import { useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation";


//page transition....
const pageAnimation = () => {
  document.documentElement.animate(
    [
      {
        clipPath: "polygon(25% 75%, 75% 75%, 75% 75%, 25% 75%)",
      },
      {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      },
    ],
    {
      duration: 2000,
      easing: "cubic-bezier(0.9, 0, 0.1, 1)",
      pseudoElement: "::view-transition-new(root)",
    }
  );
}


function Home1() {
//page animation
const router = useTransitionRouter();

  const pathName = usePathname();


//splitText
 useGSAP(() => {
        const heroSplit = new SplitText(".title", {
         type: "chars, words, lines",
        });

        const paragraphSplit = new SplitText(".subtitle", {
         type: "lines",
        });

        // Apply text-gradient class once before animating
        heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));


        gsap.from(".marker-highlight", {
         clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
         duration: 0.4,
         ease: "circ.out",
         delay: 1.8,
        });
   
        gsap.from(heroSplit.chars, {
         opacity: 0,
         yPercent: 25,
         duration: 0.4,
         ease: "back.out",
         stagger: 0.04,
         delay: 2,
        });

        gsap.from(paragraphSplit.lines, {
         opacity: 0,
         yPercent: 25,
         duration: 0.6,
         ease: "back.out",
         stagger: 0.04,
         delay: 3.5,
        });
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
       transition={{ delay: 0.2, duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] }}
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
      <span className="title"> Daniel c. Daniel </span>  <br/> 
      <span className="marker-highlight"> Software Engineer. </span>
    </h2>
    <div className="subtitle">
      Full-stack | Mobile <br/>
      Designer + Devoper <br/>
      <WordShuffler/> 
     </div>
    </div>
        <div className="sliderContainer">
        <div ref={slider} className="slider">
          <h1 className="slidertext" ref={firstText}>Softlifeメ • Software Engineer & Designer</h1>
          <h1 className="slidertext" ref={secondText}>Softlifeメ • Software Engineer & Designer</h1>
        </div>
      </div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
       whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
       transition={{ delay: 0.2, duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] }}
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
       transition={{ delay: 0.2, duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] }}
         className="btnContainer2 scale">
            <Magnetic>
            <Link 
              href="/contact" 
              className="btn2" 
              onClick={(e) => {
              e.preventDefault();
              router.push("/contact", {
              onTransitionReady: pageAnimation,
             });
           }}>
              Let's build!
            </Link>
            </Magnetic>
           </motion.div>
        </div>
     </section>
  );
}

export default Home1
