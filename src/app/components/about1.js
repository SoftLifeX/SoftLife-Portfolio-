import React from 'react'
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Magnetic2 from "./magnetic2";

function About1() {
  return (
    <div>
      <section className="about1">
        <div className="about">
        <motion.h5
            initial={{ opacity: 0, y: "60%" }}
                animate={{ opacity: 1, y: "0%" }}
            transition={{ delay: 0.8, duration: 0.5 }}
             data-scroll data-scroll-speed={0.1}>About</motion.h5>
          <motion.h1
            initial={{ opacity: 0, y: "60%" }}
                animate={{ opacity: 1, y: "0%" }}
            transition={{ delay: 0.8, duration: 0.5 }}
             data-scroll data-scroll-speed={0.1}>
            Creating symphonies of digital functionality and aesthetics
          </motion.h1>
          <h2>Meet The Mind Behind The Code</h2>
          <div className="row">
            <div className="about-col-1">
              <img src="" data-scroll data-scroll-speed={0.1} />
            </div>
            <div className="about-col-2">
              
              <div>
                <motion.p
               initial={{ opacity: 0, y: "60%" }}
                animate={{ opacity: 1, y: "0%" }}
            transition={{ delay: 0.8, duration: 0.5 }}
               >
                  An award-winning, detail-oriented professional specialized in <b>React</b>, <b>Motion design</b> and <b>Next js</b> as my major frame-work.
                  <br />
                   Continously striving to be the <b>finest</b> version
                  of myself, my workflow is no exception.
                  <br />
                  <br />
                  "As developers, we bridge the recess where <b>
                    tech
                  </b>{" "}
                  meets <b>standard</b>" - Valhalla 
                  <br /> 
                  A quote I live by, perfectly depicting my goals as a
                  developer.
                  <br />
                  <br />
                  I'd be ecstatic to chat over coffee ☕, reviewing your
                  digital needs; Alternatively feel free to reach out and say
                  Hello! 😉
                  <br />
                </motion.p>
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
