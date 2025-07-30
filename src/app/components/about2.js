import React, { useState } from 'react';
import { Icons } from "./svg"; // uses memoized icons

function About2() {
  const [isTools, setIsTools] = useState(true);

  const techStack = [
    { icon: <Icons.Html />, name: "HTML" },
    { icon: <Icons.Css />, name: "CSS3" },
    { icon: <Icons.Bootstrap />, name: "Bootstrap" },
    { icon: <Icons.Tailwind />, name: "Tailwind" },
    { icon: <Icons.Sass />, name: "Sass" },
    { icon: <Icons.Express />, name: "Express.js" },
    { icon: <Icons.Javascript />, name: "JavaScript" },
    { icon: <Icons.Vue />, name: "Vue.js" },
    { icon: <Icons.Nodejs />, name: "Node.js" },
    { icon: <Icons.Reacticon />, name: "React" },
    { icon: <Icons.Framer />, name: "Framer" },
    { icon: <Icons.Gitlab />, name: "Gitlab" },
    { icon: <Icons.Reacticon />, name: "React Native" },
    { icon: <Icons.Nextjs />, name: "Next.js" },
    { icon: <Icons.Git />, name: "Git" },
    { icon: <Icons.Bitbucket />, name: "Bitbucket" },
    { icon: <Icons.Figma />, name: "Figma" },
    { icon: <Icons.Flutter />, name: "Flutter" },
    { icon: <Icons.Typescript />, name: "TypeScript" },
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
                  href="./daniel-daniel-resume.pdf"
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
                      Delivered fast and cost-effective solutions, increasing average client
                      sales by 30–40% and achieving 95% satisfaction.
                    </li>
                  </ul>
                  <br />
                 <p>11/2024 - Present</p>
                  <h4>Business Administrator & Personal Asst. – Bellzito ENT</h4>
                  <ul>
                    <li>
                      Boosted efficiency by 20% through consistent, quality project execution.
                    </li>
                  </ul>
                <br />
                 <p>Remote</p>
                  <h4>Front End Developer</h4>
                  <ul>
                    <li>Completed projects following standards and design systems.</li>
                    <li>Suggested and implemented performance improvements.</li>
                    <li>Stayed current via courses and conferences.</li>
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

export default About2;
