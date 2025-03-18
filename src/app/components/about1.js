import React from 'react'
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Magnetic2 from "./magnetic2";

function About1() {

  const phrase = "An award-winning, detail-oriented professional specialized in React, Motion design and Next js as my major frame-work.      
                   Continously striving to be the finest version of myself, my workflow is no exception.
                  As developers, we bridge the recess where tech meets standard - Valhalla               
                  A quote I live by, perfectly depicting my goals as a
                  developer.
                  I'd be ecstatic to chat over coffee ☕, reviewing your
                  digital needs; Alternatively feel free to reach out and say
                  Hello! 😉"
  return (
    <div>
      <section className="about1">
        <div className="about">
        <h5 data-scroll data-scroll-speed={0.1}>About</h5>
          <h1
             data-scroll data-scroll-speed={0.1}>
            Creating symphonies of digital functionality and aesthetics
          </h1>
          <h2>Meet The Mind Behind The Code</h2>
          <div className="row">
            <div className="about-col-1">
              <img src="" data-scroll data-scroll-speed={0.1} />
            </div>
            <div className="about-col-2">
              
              <div>
             
               {

                    phrase.split(" ").map( (word, index) => {

                        return <motion.p
               initial={{ y: "60%" }}
                animate={{ y: "0%" }}
            transition={{ delay: 0.75, duration: 0.5 }}
            custom={index} key={index}>{word}</motion.p>

                    })

                    }
                
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
