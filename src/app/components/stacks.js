import React, { useState } from 'react';
import { techStack } from "./constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Stacks() {
  const [isTools, setIsTools] = useState(true);

  useGSAP(() => {
  const scaleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about2",
        start: "top bottom",
        end: "top 60%",
        scrub: true,
      },
    });
    scaleTl.from(".marker-highlighter:after", {
      duration: 1,
      width: 0,
      ease: "expo",
    });
}, []);

  
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
                  onClick={(e) => {
                    e.preventDefault();
                    setIsTools(true);
                  }}
                >
                  Tools
                </a>
              </li>
              <li>
                <a
                  href="#stacks"
                  className={!isTools ? "active" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsTools(false);
                  }}
                >
                  Experience
                </a>
              </li>
            </ul>
          </h4>
        </div>

        {/* Tab content */}
        <div className="tab-contents fade-in" key={isTools ? "tools" : "experience"}>
          {isTools ? (
            <>
              <div className="h2boundary">
                <h2 className="marker-highlighter">My Stack & Tools</h2>
              </div>
              <div className="tools">
                {techStack.map((tool) => (
                  <span key={tool.name} className="techstack">
                    {tool.icon}
                    <p>{tool.name}</p>
                  </span>
                ))}
              </div>

              <div className="h2boundary">
                <h2 className="marker-highlighter">Certification & CV</h2>
              </div>
              <div className="cert_cv">
                <a
                  href="./Daniel-C-Daniel_Resume.pdf"
                  download
                  className="btn4"
                  title="Download Resume"
                >
                  Resume
                </a>
                <button className="btn2" disabled data-title="Certificate Coming Soon">
                  <i className="fa-solid fa-file-lines" role="img" aria-label="Certificate" />
                  Certificate
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="h2boundary">
                <h2 className="marker-highlighter">Experience</h2>
              </div>
              <div className="tab-contents-exp">
                  <p>01/2023 - Present</p>
                  <h4>Freelance Front End Web Developer</h4>
                  <ul>
                    <li>
                      • Delivered fast and cost-effective solutions, increasing average client
                      sales by 30–40% and achieving 95% satisfaction.
                    </li>
                  </ul>
                  <br />
                 <p>11/2024 - Present</p>
                  <h4>Business Administrator & Personal Asst. – Bellzito ENT</h4>
                  <ul>
                    <li>
                      • Boosted efficiency by 20% through consistent, quality project execution.
                    </li>
                  </ul>
                <br />
                 <p>Remote</p>
                  <h4>Front End Developer</h4>
                  <ul>
                    <li>• Completed projects following standards and design systems.</li>
                    <li>• Suggested and implemented performance improvements.</li>
                    <li>• Stayed current via courses and conferences.</li>
                  </ul>
              </div>
            </>
          )}
        </div>

        <p className="fakemargin">margin</p>
      </div>
    </section>
  );
}

export default Stacks;



