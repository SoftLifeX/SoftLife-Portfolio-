import React, { useLayoutEffect, useRef } from 'react'
import Image from "next/image";
import { images } from "@/app/images/images";
import Link from "next/link";
import Magnetic from './magnetic';
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { motion, useInView } from "framer-motion";
import CurveArrow from "./svg/curveArrow"
import Lottie from "lottie-react";
import Case from "@/app/assets/Case.json";
import { useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation";

//animation
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

function Home2() {
  //page transition
  const router = useTransitionRouter();

  const pathName = usePathname();


  return (
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
                  id="lottie3"
                  loop={false} 
                  animationData={Case}
                  hover/>
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
            <Magnetic>
            <Link 
              href="/craft" 
              className="btn2" 
              onClick={(e) => {
              e.preventDefault();
              router.push("/craft", {
              onTransitionReady: pageAnimation,
             });
           }}>
             Intrigued?
            </Link>
            </Magnetic>

            <p className="fakemargin">margin</p>
          </div>
        </div>
      </section>
  );
}

export default Home2
