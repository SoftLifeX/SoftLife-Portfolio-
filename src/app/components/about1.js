import React from 'react'
import Magnetic2 from "./magnetic2";

function About1() {
  return (
    <div>
      <section className="about1">
        <div className="about">
          <h1 data-scroll data-scroll-speed={0.1}>
            Creating symphony between digital functionality and aesthetics
          </h1>
          <h2>Meet The Mind Behind The Code</h2>
          <div className="row">
            <div className="about-col-1">
              <img src="" data-scroll data-scroll-speed={0.1} />
            </div>
            <div className="about-col-2">
              <div className="tab-titles">
                <h4>
                  <ul>
                    <li>
                      <a href="#stacks">My Stack & Tools</a>
                    </li>
                    <li>
                      <a href="#stacks">Experience</a>
                    </li>
                    <li>
                      <a href="#stacks">Certification & CV</a>
                    </li>
                  </ul>
                </h4>
              </div>
              <div>
                <p>
                  I'm an award-winning, detail-oriented professional.
                  Specialized in React and Next js as my major frame-work.
                  <br />
                  <br />
                  I Continously strive  towards being the <b>finest</b> version
                  of myself, my workflow is no exception.
                  <br />
                  <br />
                  "As developers, we must bridge the recess where <b>
                    tech
                  </b>{" "}
                  meets <b>standard</b>, for the purpose of impacting every-day
                  life"
                  <br />
                  This is a quote I live by, perfectly depicting my goals as a
                  developer.
                  <br />
                  <br />
                  I'd be ecstatic to chat over coffee ☕ and discuss your
                  digital needs; Alternatively feel free to reach out and say
                  Hello! 😉
                  <br />
                </p>
                <Magnetic2>
                <a href="#contact" className="btn2">
                  <i className="bx bxs-paper-plane"></i>Contact!
                </a>
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