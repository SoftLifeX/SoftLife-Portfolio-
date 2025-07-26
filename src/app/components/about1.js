import React, { useRef } from 'react'
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Magnetic from "./magnetic";
import AboutIcon from "./svg/aboutIcon"
import VennDiagram from "./svg/venn"
import Lottie from "lottie-react";
import About from "@/app/assets/About.json";
import { useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation";


const charVariants_letsCollab = {
  hidden: { opacity: 0, y: "0.25em" },
  visible: {
    opacity: 1,
    y: "0em",
    transition: { duration: 0.4, ease: [0.175, 0.885, 0.32, 1.275] },
  },
};

const wordContainer_letsCollab = {
  visible: (i = 1) => ({
    transition: {
      staggerChildren: 0.04,
      delayChildren: i * 0.04,
      delay: 6,
    },
  }),
};

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
  //page transition
  const router = useTransitionRouter();

  const pathName = usePathname();

const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });

  const words = ["Performance", "Meets" , "Aesthetics"];
    
    return (
      <section className="about1">
        <div className="about">
        <motion.h5
        className="scale"
      initial={{ opacity: 0, scale: 0 }}
       whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
       transition={{ delay: 0.3, duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] }}>
    What we're About?
        <Lottie
          id="lottie3"
          loop={true} 
          animationData={About} />
    </motion.h5>
          <h1>
            <motion.div
                  ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={wordContainer_letsCollab}
      className="flex flex-wrap text-[1.25rem] leading-tight"
      style={{
        whiteSpace: "normal",
        margin: 0,
        padding: 0,
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={`word-${i}`}
          style={{
            display: "inline-flex",
            marginRight: i !== words.length - 1 ? "0.4em" : "0",
          }}
          variants={wordContainer_letsCollab}
        >
          {word.split("").map((char, j) => (
            <motion.span
              key={`char-${i}-${j}`}
              variants={charVariants_letsCollab}
              style={{
                display: "inline-block",
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </motion.div>
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
