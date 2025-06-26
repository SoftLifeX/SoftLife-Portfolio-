import React, { useState } from 'react'


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
                      <a href="#stack" className={action === "Tools" ? "active": "" }
                        onClick={() => {
                        setAction("Tools");
                        }}
                       >
                        Tools
                      </a>
                    </li>
                    <li>
                      <a href="#stack" className={action === "Experience" ? "active": "" }
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
              <h2>My Stack & Tools</h2>
              <div className="tab-contents">
                <ul>
                  <div className="tools">
                    <i className="bx bxl-html5">
                      <p>HTML</p>
                    </i>
                    <i className="bx bxl-css3">
                      <p>CSS3</p>
                    </i>
                    <i className="bx bxl-tailwind-css">
                      <p>Tailwind</p>
                    </i>
                    <i className="bx bxl-javascript">
                      <p>JavaScript</p>
                    </i>
                    <i className="bx bxl-nodejs">
                      <p>Node JS</p>
                    </i>
                    <i className="bx bxl-typescript">
                      <p>Typescript</p>
                    </i>
                    <i className="bx bxl-jquery">
                      <p>JQuery</p>
                    </i>
                    <i className="bx bxl-react">
                      <p>React</p>
                    </i>
                    <i className="bx bxl-git">
                      <p>Git</p>
                    </i>
                    <i className="bx bxl-github">
                      <p>GitHub</p>
                    </i>
                   <i className="fa-brands fa-flutter">
                     <p>Flutter</p>
                   </i>
                   <i className="fa-brands fa-figma">
                     <p>Figma</p>
                   </i>
                  </div>
                </ul>
              </div>
              <h2>Certification & CV</h2>
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
              <h2>Experience</h2>
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
