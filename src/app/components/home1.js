'use client'
import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { motion, useInView } from "framer-motion";
import { Typewriter, Cursor } from "nextjs-simple-typewriter";
import Link from "next/link";
import Magnetic2 from "./magnetic2"



function Home1() {

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
    <div>
      <section className="home1">
        <div className="homepage">
    <div data-scroll data-scroll-speed={0.1}>
      <div className="pointer">
        <i class="fa-thin fa-arrow-down fa-beat-fade"></i>
      </div>
       <div className="pointer2">
          <i class="fa-thin fa-arrow-down fa-beat-fade"></i>
       </div>
    <div className="statusContainer">
    {status === "Available" ? (
      <div className="statusBar1">
     
     <p><span className="indicator" />Available</p>
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
    </div>
      <div className="socialContainer">           
          <div className="socials">
                <a href="https://wa.link/wjns9h" data-title="WhatsApp">
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
                <a href="https://github.com/SoftLifeDev" data-title="Github">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="" data-title="linkedin">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/softlifekid/" data-title="Instagram">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://x.com/SoftLife_Dev" data-title="X">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
          </div>
         </div>
    <div className="h2Container">
           <h2><b><span id="helloText" />
                <span className="waving-hand">👋</span>, I'm{" "}
                <span className="typed">
                  <Typewriter
                    words={[
                      "Daniel c. Daniel , \n popularly known as SoftLife!",
                    ]}
                    cursor
                    cursorStyle=""
                    typeSpeed={90}
                    deleteSpeed={1000}
                    delaySpeed={1000}
                  />
                </span>
              </b></h2>
                <br />
               <p>
                an award-winning <span className="marker-highlight">Front-end | Mobile</span>
                  <br /> Software Engineer, Designer  & <br />{" "}
                <span className="slideUp" id="slide1">
                  <span>a Content-Creator 📷 🤳🏼</span>
                </span>
                <span className="slideUp" id="slide2">
                  <span>a Lover of the Arts 🎨 🍷</span>
                </span>
                <span className="slideUp" id="slide3">
                  <span>a bit of a Gamer 🎮</span>
                </span>
                <span className="slideUp" id="slide4">
                  <span>a Travel Enthusiast ✈️ 🌍</span>
                </span>
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
          <p className="slidertext" ref={firstText}>  Helping brands thrive in our digital era  </p>
          <p className="slidertext" ref={secondText}>  Helping brands thrive in our digital era  </p>
        </div>
      </div>
      </div>
          <div data-scroll data-scroll-speed={0.1}>
              <div className="btnContainer">
            <Magnetic2>
                <a href="./Daniel c. Daniel [SoftLife Dev]Resume.pdf" download className="btn4">
                  Resume
                </a>
            </Magnetic2>
            <Magnetic2>
            <Link href="/contact" className="btn2">
              Hire Me!
            </Link>
            </Magnetic2>
           </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home1
