import React from 'react'
import { Typewriter, Cursor } from "nextjs-simple-typewriter";
import Link from "next/link";
import Magnetic2 from "./magnetic2";



function Home1() {
  return (
    <div>
      <section className="home1">
        <div className="homepage">
          <h2 data-scroll data-scroll-speed={0.1}>
            Hello! I'm{" "}
            <span className="typed">
              <Typewriter
                words={["Daniel! \n popularly known as SoftLife!"]}
                cursor
                cursorStyle="_"
                typeSpeed={90}
                deleteSpeed={1000}
                delaySpeed={1000}
              />
            </span>
            <br />a Front End Developer and <span id="hobby"></span>
          </h2>
          <h1 data-scroll data-scroll-speed={0.1}>
            Helping brands build superior, dynamic software.
          </h1>
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
        </div>
      </section>
    </div>
  );
}

export default Home1
