import React, { useState } from 'react'
import Image from "next/image";
import { images } from "@/app/images/images";


function Craft1() {

  const [action,  setAction] = useState("Project");
  
  return (
    <div>
      <section className="craft1">
        <div className="portfolio">
          <div className="container">
            <h1 data-scroll data-scroll-speed={0.1}>
              Digital concepts given life
            </h1>

            <h5>Craft</h5>
         <div id="stacks">stacks</div>
         <div className="tab-titles">
                <h4>
                  <ul>
                    <li>
                      <a href="#projects" className={action === "Project" ? "active": "" }
                        onClick={() => {
                        setAction("Project");
                        }}
                       >
                        Case Studies 
                      </a>
                    </li>
                    <li>
                      <a href="#concepts" className={action === "Concept" ? "active": "" }
                        onClick={() => {
                        setAction("Concept");
                        }}
                       >
                        Concept Works
                      </a>
                    </li>
                  </ul>
                </h4>
              </div>

          {action === "Project" ? (
            <div>
            <h3> My digital crafts
            <span> 
          <div className="dot"></div>
         <div className="dot"></div>
        <div className="dot"></div>
         </span>
            </h3>
            
           <div className="work-list">
              <div className="work">
                <Image src={images.work1} alt="CritiQue" title="Critique" />
                <div className="layer">
                  <div className="work-info">  
                  <p>CritiQue</p>
                  <a href="">
                    View Project<i className="fa-light fa-arrow-up-right"></i>
                  </a>
                   </div> 
                </div>
              </div>

              <div className="work">
                <Image src={images.work1} alt="CritiQue" title="Critique" />
                <div className="layer">
                  <div className="work-info">  
                  <p>CritiQue</p>
                  <a href="">
                    View Project<i className="fa-light fa-arrow-up-right"></i>
                  </a>
                   </div> 
                </div>
              </div>
               
            <div className="work">
                <Image src={images.work1} alt="Upskill Africa" title="Upskill Africa" />
                <div className="layer">
                  <div className="work-info">  
                  <p>Upskill Africa</p>
                  <a href="">
                    View Project<i className="fa-light fa-arrow-up-right"></i>
                  </a>
                   </div> 
                </div>
              </div>

              <div className="work">
                <Image src={images.work1} alt="CritiQue" title="Critique" />
                <div className="layer">
                  <div className="work-info">  
                  <p>CritiQue</p>
                  <a href="">
                    View Project<i className="fa-light fa-arrow-up-right"></i>
                  </a>
                   </div> 
                </div>
             </div>
          </div>
            <p className="fakemargin">margin</p>
         </div>

          ) : (
            <div/>
            )}
            {action === "Concept" ? (
          <div>
            <h3> Concepts in production
            <span> 
          <div className="dot"></div>
         <div className="dot"></div>
        <div className="dot"></div>
         </span>
            </h3>
           <div className="work-list">
              <div className="work">
                <Image src={images.work1} alt="CritiQue" title="Critique" />
                <div className="layer">
                  <div className="work-info">  
                  <p>CritiQue</p>
                  <a href="">
                    View Project<i className="fa-light fa-arrow-up-right"></i>
                  </a>
                   </div> 
                </div>
              </div>

              <div className="work">
                <Image src={images.work1} alt="CritiQue" title="Critique" />
                <div className="layer">
                  <div className="work-info">  
                  <p>CritiQue</p>
                  <a href="">
                    View Project<i className="fa-light fa-arrow-up-right"></i>
                  </a>
                   </div> 
                </div>
              </div>

              <div className="work">
                <Image src={images.work1} alt="CritiQue" title="Critique" />
                <div className="layer">
                  <div className="work-info">  
                  <p>CritiQue</p>
                  <a href="">
                    View Project<i className="fa-light fa-arrow-up-right"></i>
                  </a>
                   </div> 
                </div>
              </div>

              <div className="work">
                <Image src={images.work1} alt="CritiQue" title="Critique" />
                <div className="layer">
                  <div className="work-info">  
                  <p>CritiQue</p>
                  <a href="">
                    View Project<i className="fa-light fa-arrow-up-right"></i>
                  </a>
                   </div> 
                </div>
            </div>
          </div>
            <p className="fakemargin">margin</p>
        </div>
          ) : (
            <div/>
            )}
         </div>
        </div>
      </section>
    </div>
  );
}

export default Craft1
