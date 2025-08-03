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
    // Initial opacity reveal
    gsap.set([".title", ".subtitle"], { opacity: 1 });

    // Title SplitText
    const heroSplit = new SplitText(".title", {
      type: "chars, words, lines",
      linesClass: "lineParent",
      charsClass: "char-inner",
      autoSplit: true,
      onSplit: (self) => {
        const stagger = 0.025;
        const delay = 1.6;

        // Animate each character in
        gsap.from(self.chars, {
          opacity: 0,
          yPercent: 40,
          duration: 0.4,
          ease: "back",
          stagger,
          delay,
        });

        // Animate line-height progressively
        for (let i = 0; i < self.chars.length; i++) {
          const progress = (i + 1) / self.chars.length;
          const lineHeight = 0.8 + (1.2 - 0.8) * progress;

          gsap.to(".title", {
            lineHeight: `${lineHeight}em`,
            duration: 0.3,
            ease: "power1.out",
            delay: delay + i * stagger,
          });
        }
      },
    });

    // Add gradient after split
    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    // Subtitle SplitText
    const subSplit = new SplitText(".subtitle", {
      type: "chars, words, lines",
    });

    // Subtitle animation (LEAVE THIS AS IS)
    gsap.from(subSplit.chars, {
      opacity: 0,
      x: 150,
      duration: 0.4,
      ease: "power4",
      stagger: 0.04,
      delay: 1.8,
    });
  });
}, []);
  
  //page transition
  const router = useTransitionRouter();

  const pathName = usePathname();

    return (
      <section className="about1">
        <div className="about">
        <h5 className="subtitle">
        What we're About? <Lottie id="lottie3" loop={true} animationData={About} />
         </h5>
        <h1 className="title">
         Fast. Fluid. Flawless.
        </h1>
        <div className="h2boundary">
          <h2 className="marker-highlighter">Not just built - Authored.</h2>
        </div> 
          <div className="row">
            <div className="about-col-1">
              <p className="circle-sketch-highlight">
          An award-winning, detail-oriented web | mobile designer & software engineer with expertise in <b>JavaScript</b>, <b>TypeScript</b>, <b>React</b>, <b>Vue.js</b>, <b>Motion design</b>, <b>Figma</b>, <b>flutter</b>, <b>React Native</b> and <b>Next.js</b> as my major frame-work.
            <br/> I continously strive to be the finest version of myself, my workflow is no exception. 
                {/* <br/> "As developers, we bridge the recess where tech meets standard" - Valhalla. 
            <br/> A quote perfectly aligning with my goals as a software engineer. */}
            <br/><br/>
            I'd be ecstatic to chat over coffee ☕, reviewing your digital needs, or just to connect and say Hello!
            <br/> I don't bite! :)

              </p>
            </div>
            <div className="about-col-2">
              <motion.div
               className="aboutImg"
                initial={{ opacity: 0, scale: 0 }}
       whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
       transition={{ delay: 0.3, duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] }}>
           <VennDiagram />
         </motion.div>
              </div>
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
      </section>
  );
}

export default About1
















