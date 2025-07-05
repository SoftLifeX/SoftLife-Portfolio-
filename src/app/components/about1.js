import React from 'react'
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Magnetic2 from "./magnetic2";
import AboutIcon from "./svg/aboutIcon"
import Lottie from "lottie-react";
import About from "@/app/assets/About.json";

function About1() {

    return (
    <div>
      <section className="about1">
        <div className="about">
        <motion.h5
        className="scale"
      initial={{ opacity: 0, scale: 0 }}
       whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
       transition={{ delay: 0.45, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
    What we're About?
        <Lottie
          id="lottie3"
          loop={true} 
          animationData={About} />
    </motion.h5>
          <motion.h1
           className="scale"
             initial={{ opacity: 0, scale: 0 }}
       whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
       transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
            Performance Meets Aesthetics
          </motion.h1>
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
       transition={{ delay: 0.45, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
           <AboutIcon />
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
                    
                <Magnetic2>
                <Link href="/contact" className="btn2">
                  <i className="bx bxs-paper-plane"></i>Contact!
                </Link>
                </Magnetic2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About1
