//'use client'
import { useRef, useState } from 'react';
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

gsap.registerPlugin(ScrollTrigger);

function Home1() {
//page animation
const router = useTransitionRouter();

  const pathName = usePathname();


//splitText
  
 useGSAP(() => {
   document.fonts.ready.then(() => {
  gsap.set(".title", { opacity: 1 });
  }, []);
     
        const heroSplit = new SplitText(".introtitle", {
         type: "chars, words, lines",
          autoSplit: true,
         onSplit: (self) => {

        return gsap.from(self.chars, {
        opacity: 0.5,
         duration: 0.4,
         ease: "power3",
         delay: 1.8,
         stagger: {
         amount: 2.7,
          from: "random"
         }
      });
    }
  });
 
   document.fonts.ready.then(() => {
  gsap.set(".subtitle", { opacity: 1 });
   }, []);
         const paragraphSplit = new SplitText(".subtitle", {
         type: "lines",
         mask: "lines",
          autoSplit: true,
         onSplit: (self) => {

        return gsap.from(self.lines, {
        rotationX: -100,
        transformOrigin: "50% 50% -160px",
        opacity: 0,
        duration: 0.6, 
        ease: "power3",
        stagger: 0.25,
        delay: 2.5,
      });
    }
  });

        

        // Apply text-gradient class once before animating
        heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));


        gsap.from(".marker-wrap", {
         clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
         duration: 0.4,
         ease: "circ.out",
         delay: 1.8,
        });

        gsap.from(".scale", {
         scale: 0,
         duration: 0.4,
         ease: "circ.out",
         delay: 2.9,
        });
   }, []);


//sliding text
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useGSAP(() => {
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

    
  return (
      <section className="home1">
        <div className="homepage">
      <div className="pointer">
        <ArrowIcon />
      </div>
    <div className="statusContainer scale">
      <div className="statusBar1">   
     <p>
      <span className="indicator" />Available for New Projects
    </p>
     </div>
    </div>
    <div className="h2Container">
     <h2 className="introtitle">
       Daniel c. Daniel
     </h2>
    <div className="marker">
     <h2>
      <span className="marker-wrap">
      <span className="marker-highlight"> ‎Software Engineer ‎‎‎‎‎</span>
      </span>
     </h2>
    </div>
    <div className="subtitle introtext">
      Full-stack | Mobile <br/>
      Designer + Developer <br/>
      <WordShuffler/> 
     </div>
    </div>
      
        <div className="sliderContainer">
        <div ref={slider} className="slider">
          <h1 className="slidertext" ref={firstText}>SoftLife X • Software Engineer & Designer‎</h1>
          <h1 className="slidertext" ref={secondText}>SoftLife X • Software Engineer & Designer‎</h1>
        </div>
      </div>
        <div className="btnContainer scale">
            <Magnetic>
                <a href="./Daniel-C-Daniel_resume.pdf" download className="btn4">
                  Resume
                </a>
            </Magnetic>
         </div>
           <div className="btnContainer2 scale">
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
          </div>
        </div>
     </section>
  );
}

export default Home1









