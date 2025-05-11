import React from 'react'
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Magnetic2 from "./magnetic2";

function About1() {

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
              <div className="codeProp">
                  <i class="fa-thin fa-code fa-flip"></i>
              </div>
              <div>
             <motion.p
               initial={{ y: "60%" }}
                animate={{ y: "0%" }}
            transition={{ delay: 0.5, duration: 0.5 }}
            >
          An award-winning, detail-oriented web | mobile software engineer specialized in <b> React </b>, <b> Motion design </b>, <b> flutter </b>, <b> React Native </b> and <b> Next js </b> as my major frame-work.
            <br/> I continously strive to be the finest version of myself, my workflow is no exception. 
            <br/> "As developers, we bridge the recess where tech meets standard" - Valhalla. 
            <br/> A quote perfectly aligning with my goals as a developer. 
            <br/><br/>
            I'd be ecstatic to chat over coffee ☕, reviewing your digital needs; Alternatively feel free to reach out and say Hello! 😉
            <br/> I don't bite!;

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
