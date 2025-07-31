import React, { useRef } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Magnetic from "./magnetic";
import AboutIcon from "./svg/aboutIcon"
import VennDiagram from "./svg/venn"
import Lottie from "lottie-react";
import About from "@/app/assets/About.json";
import { useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation";


//page transition
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

function About1() {
    //splitText
 useGSAP(() => {
        document.fonts.ready.then(() => {
  gsap.set(".title", { opacity: 1 });
  }, []);

document.fonts.ready.then(() => {
  gsap.set(".subtitle", { opacity: 1 });
  }, []);
   
   const heroSplit = new SplitText(".title", {
         type: "chars, words, lines",
         mask: "lines",
          autoSplit: true,
         onSplit: (self) => {

        return gsap.from(self.chars, {
        opacity: 0,
         yPercent: 25,
         duration: 0.4,
         ease: "back",
         stagger: 0.04,
         delay: 2,
      });
    }
  });





   const subSplit = new SplitText(".subtitle", {
         type: "chars, words, lines",
        });

        gsap.from(subSplit.chars, {
         opacity: 0,
         x: 150,
         duration: 0.4,
         ease: "power4",
         stagger: 0.04,
         delay: 2,
        });

   }, []);

  
  //page transition
  const router = useTransitionRouter();

  const pathName = usePathname();

const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });

  const words = ["Performance", "Meets" , "Aesthetics"];
    
    return (
      <section className="about1">
        <div className="about">
        <h5 className="subtitle">
        What we're About? <Lottie id="lottie3" loop={true} animationData={About} />
         </h5>
          <h1 className="title">
           Performance meets Aesthetics
          </h1>
        <div className="h2boundary">
          <h2 className="marker-highlighter">Meet The Mind Behind The Code</h2>
        </div> 
          <div className="row">
            <div className="about-col-1">
              <motion.div
               className="aboutImg"
                initial={{ opacity: 0, scale: 0 }}
       whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
       transition={{ delay: 0.3, duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] }}>
           <VennDiagram />
    </motion.div>
            </div>
            <div className="about-col-2">
              <div>
             <p className="circle-sketch-highlight">
          An award-winning, detail-oriented web | mobile designer & software engineer with expertise in <b>JavaScript</b>, <b>TypeScript</b>, <b>React</b>, <b>Vue.js</b>, <b>Motion design</b>, <b>Figma</b>, <b>flutter</b>, <b>React Native</b> and <b>Next.js</b> as my major frame-work.
            <br/> I continously strive to be the finest version of myself, my workflow is no exception. 
                {/* <br/> "As developers, we bridge the recess where tech meets standard" - Valhalla. 
            <br/> A quote perfectly aligning with my goals as a software engineer. */}
            <br/><br/>
            I'd be ecstatic to chat over coffee ☕, reviewing your digital needs, or just to connect and say Hello!
            <br/> I don't bite! :)

              </p>
                    
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
              Contact!
            </Link>
                </Magnetic>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default About1
