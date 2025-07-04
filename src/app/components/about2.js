import React, { useState } from 'react'
import Image from "next/image";
import { images } from "@/app/images/images";
import Html from "./svg/html"
import Bootstrap from "./svg/bootstrap";
import Css from "./svg/css";
import Tailwind from "./svg/tailwind";
import Sass from "./svg/sass";
import Vue from "./svg/vue";
import Express from "./svg/express";
import Javascript from "./svg/javascript";
import Nodejs from "./svg/nodejs";
import React from "./svg/react";
import Framer from "./svg/framer";
import Gitlab from "./svg/gitlab";
import Nextjs from "./svg/nextjs";
import Git from "./svg/git";
import Bitbucket from "./svg/bitbucket";
import Figma from "./svg/figma";
import Typescript from "./svg/typescript";

function About2() {

  const [action,  setAction] = useState("Tools");
  return (
    <div>
      <section className="about2">
     <div id="stack"> stack </div>
        <div className="container">
         <div className="tab-titles">
                <h4>
                  <ul>
                    <li>
                      <a href="#stacks" className={action === "Tools" ? "active": "" }
                        onClick={() => {
                        setAction("Tools");
                        }}
                       >
                        Tools
                      </a>
                    </li>
                    <li>
                      <a href="#stacks" className={action === "Experience" ? "active": "" }
                        onClick={() => {
                        setAction("Experience");
                        }}
                       >
                        Experience
                      </a>
                    </li>
                  </ul>
                </h4>
              </div>

          {action === "Tools" ? (
            
            <div className="tab-col-1">
            <div className="h2boundary">
              <h2 className="marker-highlighter">My Stack & Tools</h2>
            </div>
            <div className="tab-contents">
                <ul>
                  <div className="tools">
            
             <span className="techstack">
              <Html />
              <p>Html</p>
            </span>

            <span className="techstack">
              <Css />
              <p>Css3</p>
            </span>

            <span className="techstack">
              <Bootstrap />
              <p>Bootstrap</p>
            </span>

            <span className="techstack">
              <Tailwind />
              <p>Tailwind</p>
            </span>

            <span className="techstack">
              <Sass />
              <p>Sass</p>
            </span>

            <span className="techstack">
              <Express />
              <p>Express.js</p>
            </span>

            <span className="techstack">
              <Javascript />
              <p>JavaScript</p>
            </span>

            <span className="techstack">
              <Vue />
              <p>Vue.js</p>
            </span>

            <span className="techstack">
              <Nodejs />
              <p>Nodejs</p>
            </span>

            <span className="techstack">
              <React />
              <p>React</p>
            </span>

            <span className="techstack">
              <Framer />
              <p>Framer</p>
            </span>

            <span className="techstack">
              <Gitlab />
              <p>Gitlab</p>
            </span>

            <span className="techstack">
              <React />
              <p>React Native</p>
            </span>

            <span className="techstack">
              <Nextjs />
              <p>Nextjs</p>
            </span>

            <span className="techstack">
              <Git />
              <p>Git</p>
            </span>

            <span className="techstack">
              <Bitbucket />
              <p>Bitbucket</p>
            </span>

            <span className="techstack">
              <Figma />
              <p>Figma</p>
            </span>

            <span className="techstack">
              <Typescript />
              <p>Typescript</p>
            </span>
                  </div>
                </ul>
              </div>
            <div className="h2boundary">
              <h2 className="marker-highlighter">Certification & CV</h2>
           </div>
            <ul>
                <div className="cert_cv">
                  <a href="./Daniel c. Daniel's Resume.pdf" download className="btn4">
                  Resume 
                </a>
                  <a href="" className="btn2">
                    <i className="fa-solid fa-file-lines"></i>Certificate 
                  </a>
                </div>
              </ul>
            </div>
          ) : (
            <div/>
            )}
            {action === "Experience" ? (
                        <div className="tab-col-2">
            <div className="h2boundary">
              <h2 className="marker-highlighter">Experience</h2>
            </div>
              <div className="tab-contents-exp">
                <i className="fa-solid fa-laptop"></i>
                <p>01/2023-Present</p>
                <h4>Freelance Front End Web Developer</h4>
                <li>
                  Collaboration with a diverse range of clients, exceeding
                  clients' expectations while offering innovative, expeditious
                  and economical solutions. <br /> Consistently maintaining
                  conscientious responses to user inquires, analyzing user
                  needs, conveying comprehensive technical requirements and
                  ensuring clear and seamless communication; Ultimately
                  enhancing average client sales increment by 30-40% and
                  boasting a 95% statistically accurate personal client
                  satisfaction score
                </li>
                <br />
                <i className="fa-solid fa-briefcase"></i>
                <p>11/2024-Present</p>
                <h4>
                  Business administrator & Personal Asst. CEO Bellzito ENT
                </h4>
                <li>
                  Consistently achieving high-quality projects conscientiously,
                  increasing operational efficiency and catalyzing growth.{" "}
                  <br />
                  Achieving and managing complex projects economically within
                  diverse constraints, leading to a 20% increment in operational
                  efficiency
                </li>
                <br />
                <i className="fa-solid fa-briefcase"></i>
                <p>Remote</p>
                <h4>Front End Developer</h4>
                <li>
                  Completed programming projects entailing existing coding
                  standards and design styles.
                </li>
                <li>Recommended and implemented performance improvements.</li>
                <li>
                  Maintained understanding of current web technologies and
                  programming practices through continuing education and
                  participation in professional conferences and workshops.
                </li>
                
              </div>
            </div>
          ) : (
            <div/>
            )}

     <p className="fakemargin">margin</p>
        </div>
      </section>
    </div>
  );
}

export default About2
