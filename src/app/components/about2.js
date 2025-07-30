import React, { useState, useEffect } from 'react';
import Html from "./svg/html";
import Bootstrap from "./svg/bootstrap";
import Css from "./svg/css";
import Tailwind from "./svg/tailwind";
import Sass from "./svg/sass";
import Vue from "./svg/vue";
import Express from "./svg/express";
import Javascript from "./svg/javascript";
import Nodejs from "./svg/nodejs";
import Reacticon from "./svg/react";
import Framer from "./svg/framer";
import Gitlab from "./svg/gitlab";
import Nextjs from "./svg/nextjs";
import Git from "./svg/git";
import Bitbucket from "./svg/bitbucket";
import Figma from "./svg/figma";
import Flutter from "./svg/flutter";
import Typescript from "./svg/typescript";

function About2() {
  const [isTools, setIsTools] = useState(true);
  const [fadeClass, setFadeClass] = useState("fade-in");

  useEffect(() => {
    setFadeClass(""); // reset animation
    const timeout = setTimeout(() => setFadeClass("fade-in"), 10);
    return () => clearTimeout(timeout);
  }, [isTools]);

  const techStack = [
    { icon: <Html />, name: "HTML" },
    { icon: <Css />, name: "CSS3" },
    { icon: <Bootstrap />, name: "Bootstrap" },
    { icon: <Tailwind />, name: "Tailwind" },
    { icon: <Sass />, name: "Sass" },
    { icon: <Express />, name: "Express.js" },
    { icon: <Javascript />, name: "JavaScript" },
    { icon: <Vue />, name: "Vue.js" },
    { icon: <Nodejs />, name: "Node.js" },
    { icon: <Reacticon />, name: "React" },
    { icon: <Framer />, name: "Framer" },
    { icon: <Gitlab />, name: "Gitlab" },
    { icon: <Reacticon />, name: "React Native" },
    { icon: <Nextjs />, name: "Next.js" },
    { icon: <Git />, name: "Git" },
    { icon: <Bitbucket />, name: "Bitbucket" },
    { icon: <Figma />, name: "Figma" },
    { icon: <Flutter />, name: "Flutter" },
    { icon: <Typescript />, name: "TypeScript" },
  ];

  return (
    <section className="about2">
      <div id="stack">stack</div>
      <div className="container">
        {/* Tab buttons */}
        <div className="tab-titles">
          <h4>
            <ul>
              <li>
                <a
                  href="#stacks"
                  className={isTools ? "active" : ""}
                  onClick={() => setIsTools(true)}
                >
                  Tools
                </a>
              </li>
              <li>
                <a
                  href="#stacks"
                  className={!isTools ? "active" : ""}
                  onClick={() => setIsTools(false)}
                >
                  Experience
                </a>
              </li>
            </ul>
          </h4>
        </div>

        {/* Shared content container */}
        <div className={`tab-content ${fadeClass}`}>
          {isTools ? (
            <>
              <div className="h2boundary">
                <h2 className="marker-highlighter">My Stack & Tools</h2>
              </div>
              <div className="tools">
                {techStack.map((tool, index) => (
                  <span key={index} className="techstack">
                    {tool.icon}
                    <p>{tool.name}</p>
                  </span>
                ))}
              </div>

              <div className="h2boundary">
                <h2 className="marker-highlighter">Certification & CV</h2>
              </div>
              <div className="cert_cv">
                <a href="./Daniel c. Daniel's Resume.pdf" download className="btn4">
                  Resume
                </a>
                <a href="#" className="btn2" onClick={(e) => e.preventDefault()}>
                  <i className="fa-solid fa-file-lines"></i> Certificate
                </a>
              </div>
            </>
          ) : (
            <>
              <div className="h2boundary">
                <h2 className="marker-highlighter">Experience</h2>
              </div>
              <div className="tab-contents-exp">
                <i className="fa-solid fa-laptop"></i>
                <p>01/2023 - Present</p>
                <h4>Freelance Front End Web Developer</h4>
                <li>
                  Worked with diverse clients delivering fast and cost-effective solutions,
                  increasing average client sales by 30–40% and achieving 95% satisfaction.
                </li>

                <br />
                <i className="fa-solid fa-briefcase"></i>
                <p>11/2024 - Present</p>
                <h4>Business Administrator & Personal Asst. – Bellzito ENT</h4>
                <li>
                  Enhanced operational efficiency by 20% through consistent, quality project
                  management and execution.
                </li>

                <br />
                <i className="fa-solid fa-briefcase"></i>
                <p>Remote</p>
                <h4>Front End Developer</h4>
                <li>Completed projects following standards and design systems.</li>
                <li>Suggested and implemented performance improvements.</li>
                <li>Kept up-to-date via courses and conferences.</li>
              </div>
            </>
          )}
        </div>

        <p className="fakemargin">margin</p>
      </div>
    </section>
  );
}

export default About2;
