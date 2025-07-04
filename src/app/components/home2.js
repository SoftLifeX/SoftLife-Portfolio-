import React, { useLayoutEffect, useRef } from 'react'
import Image from "next/image";
import { images } from "@/app/images/images";
import Link from "next/link";
import Magnetic2 from './magnetic2';
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { motion, useInView } from "framer-motion";
import CurveArrow from "./svg/curveArrow"
import Lottie from "lottie-react";
import Case from "@/app/assets/Case.json";

function Home2() {

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
           <div className="curveCon">
             <CurveArrow />
           </div>
            <h5>
             Case Studies
             <Lottie
                  id="lottie"
                  loop={true} 
                  animationData={Case} />
            </h5>
            <div className="work-list">
              <div className="work">
                <Image
                 priority={true}
                 src={images.car} alt="Car Culture" title="Car Culture"/>
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
