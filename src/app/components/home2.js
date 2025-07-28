import React, { useLayoutEffect, useRef } from 'react'
import Image from "next/image";
import { images } from "@/app/images/images";
import Link from "next/link";
import Magnetic from './magnetic';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
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
  //reveal text
  useGSAP(() => {
    const firstMsgSplit = SplitText.create(".quota", {
      type: "words",
    });
    

    gsap.to(firstMsgSplit.words, {
      opacity: 1,
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".portfolio",
        start: "top 1%",
        scrub: 0.25,
        end: "top 30%",
      }
    });
    

    const scrollTimeline = gsap.timeline({
         scrollTrigger: {
         trigger: '.portfolio',
         scrub: 0.25,
        start: "top 1%",
        end: window.innerHeight,
         },
        })

    scrollTimeline.to(".marker-wrap2", {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
         duration: 0.4,
         ease: "circ.out",
        })
  }, []);
  
  //page transition
  const router = useTransitionRouter();

  const pathName = usePathname();


  return (
      <section className="home2">
        <div className="portfolio">
          <div className="container">
            <p className="quota">
              Creativity isn't just a skill <br /> 
              It's a life-style!
          <span> 
          <div className="dot"></div>
         <div className="dot"></div>
        <div className="dot"></div>
         </span>
       </p>
         <p>
          <div className="marker2">
           <span className="marker-wrap2">
             <span className="marker-highlight2"> 
              • We Live It •
             </span>
           </span>
           </div>
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
