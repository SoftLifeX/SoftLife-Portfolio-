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
        clipPath: "polygon(25% 75%, 75% en, 75% 75%, 25% 75%)",
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
    const secMsgSplit = SplitText.create(".quota2", {
      type: "words",
    });
    
    gsap.from(firstMsgSplit.words, {
      opacity: 0.4,
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".quota",
        start: "top 90%",
        end: "bottom 90%",
        scrub: true,
      },
    });
    gsap.from(secMsgSplit.words, {
      opacity: 0.4,
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".quota2",
        start: "top bottom",
        end: "bottom 90%",
        scrub: true,
      },
    });

    const revealTl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".marker-wrap2",
        start: "top 90%",
        scrub: true,
      },
    });
    revealTl.from(".marker-wrap2", {
      duration: 1,
      clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
      ease: "circ.inOut",
    });
  }, []);
  
  //page transition
  const router = useTransitionRouter();

  const pathName = usePathname();


  return (
      <section className="home2">
        <div className="portfolio">
          <div className="container">
            <h1 className="quota">
              Creativity isn't just a skill <br /> 
            </h1>
        <h1 className="markerbound2">
          <div className="marker2">
           <span className="marker-wrap2">
             <span className="marker-highlight2"> 
              • It's a Lifestyle •
             </span>
           </span>
           </div>
         </h1>
         <h1 className="quota2">
           We Live It
         </h1>
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
