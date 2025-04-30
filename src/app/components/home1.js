'use client'
import { useRef, useEffect } from 'react';
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
  
  return (
    <div>
      <section className="home1">
        <div className="homepage">
    <div data-scroll data-scroll-speed={0.1}>
<div className="socialContainer">           
          <div className="socials">
            <a href="https://wa.link/wjns9h">
              <i className="bx bxl-whatsapp"></i>
            </a>
            <a href="https://github.com/SoftLifeDev">
              <i className="bx bxl-github"></i>
            </a>
            <a href="">
              <i className="bx bxl-linkedin-square"></i>
            </a>
            <a href="https://www.instagram.com/softlifekid/">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-square-x-twitter"></i>
            </a>
          </div>
         </div>
    <div className="h2Container">
          <motion.h2
    initial={{ y: "60%" }}
    animate={{ y: "0%" }}
    transition={{ delay: 0.65, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            Hey <span className="waving-hand">👋</span>, I'm{" "}
            <span className="typed">
              <Typewriter
                words={["Daniel c. Daniel , \n popularly known as SoftLife!"]}
                cursor
                cursorStyle=""
                typeSpeed={90}
                deleteSpeed={1000}
                delaySpeed={1000}
              />
            </span>
            <br />an award-winning Developer , Designer and <br/> <span id="hobby"></span>
          </motion.h2>
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
                <a href="" download className="btn4">
                  Resume <i className="bx bx-download bx-tada"></i>
                </a>
            </Magnetic2>
            <Magnetic2>
            <Link href="/contact" className="btn2">
              Hire Me! <i className="bx bx-arrow-to-top bx-tada"></i>
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
