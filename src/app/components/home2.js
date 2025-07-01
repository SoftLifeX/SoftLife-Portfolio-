import React, { useLayoutEffect, useRef } from 'react'
import Image from "next/image";
import { images } from "@/app/images/images";
import Link from "next/link";
import Magnetic2 from './magnetic2';
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { motion, useInView } from "framer-motion";
import curveArrow from "./curveArrow"

function Home2() {

   /*const secRef = useRef(null); 

   const isInView = useInView(secRef, { once: true });
   
   useLayoutEffect(() => {
     gsap.registerPlugin(ScrollTrigger);

     const tl = gsap.timeline({
       scrollTrigger: {
         trigger: secRef.current,

         scrub: true,

         start: isInView,

         end: "100%",
       },
     });



     tl.to(secRef.current, {
       scale: 0.92,
       ease:" easeInOut",
     });
   }); */

  return (
    <div>
      <section className="home2">
        <div className="portfolio">
          <div className="container">
            <p>
              Creativity is not just a skill
              <br /> It's a life-style 
          <span> 
          <div className="dot"></div>
         <div className="dot"></div>
        <div className="dot"></div>
         </span>
              <br />
              <br />
              <span className="blocktext"></span>
            </p>

             <curveArrow />

            <h5>Case Studies</h5>
            <div className="work-list">
              <div className="work">
                <Image
                 priority={true}
                 src={images.car-culture} alt="car-culture" title="Car Culture"/>
                <div className="layer">
                  <div className="work-info">  
                  <p>Car Culture</p>
                  <Link href="/maintenance">
                    <i className="fa-light fa-arrow-up-right"></i>
                  </Link>
                   </div> 
                </div>
              </div>

              <div className="work">
                <Image
                 priority={true}
                 src={images.jewlers} alt="jewlers" title="Jewlers"/>
                <div className="layer">
                  <div className="work-info">  
                  <p>Jewlers</p>
                  <Link href="/maintenance">
                    <i className="fa-light fa-arrow-up-right"></i>
                  </Link>
                   </div> 
                </div>
              </div>
             </div>
            <Magnetic2>
            <Link href="/craft" className="btn2">
              Intrigued?
            </Link>
            </Magnetic2>

            <p className="fakemargin">margin</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home2
