import React from 'react'
import { motion, useInView } from "framer-motion";
import { Typewriter, Cursor } from "nextjs-simple-typewriter";
import Link from "next/link";
import Magnetic2 from "./magnetic2";



function Home1() {
  return (
    <div>
      <section className="home1">
        <div className="homepage">
    <motion.div
    initial={{ y: "60%" }}
    animate={{ y: "0%" }}
    transition={{ delay: 1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
  data-scroll data-scroll-speed={0.1}>
          <h2>
            Hello👋! I'm{" "}
            <span className="typed">
              <Typewriter
                words={["Daniel c. Daniel, \n popularly known as SoftLife!"]}
                cursor
                cursorStyle="_"
                typeSpeed={90}
                deleteSpeed={1000}
                delaySpeed={1000}
              />
            </span>
            <br />a Front End Developer and <span id="hobby"></span>
          </h2>
          <h1>
            Helping brands thrive in the digital era.
          </h1>
      </motion.div>
          <div className="blob"></div>
          <div data-scroll data-scroll-speed={0.1}>
            <Magnetic2>
                <a href="" download className="btn4">
                  Resume <i className="bx bx-download bx-tada"></i>
                </a>
            </Magnetic2>
            <Magnetic2>
            <Link href="/contact" className="btn2">
              Contact <i className="bx bx-arrow-to-top bx-tada"></i>
            </Link>
            </Magnetic2>
          </div>
          <div className="socials">
            <a href="https://wa.link/wjns9h">
              <i className="bx bxl-whatsapp"></i>
            </a>
            <a href="https://github.com/SoftLifeDev">
              <i className="bx bxl-github"></i>
            </a>
            <a href="">
              <i className="bx bxl-linkedin-square"></i>
            </a>
            <a href="https://www.instagram.com/softlifekid/">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-square-x-twitter"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home1
