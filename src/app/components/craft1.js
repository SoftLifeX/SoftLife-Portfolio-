import React, { useState } from 'react'
import Image from "next/image";
import { images } from "@/app/images/images";
import { motion, useInView } from "framer-motion";


function Craft1() {

  const [action,  setAction] = useState("Project");
  
  return (
    <div>
      <section className="craft1">
        <div className="portfolio">
          <div className="container">
            <motion.h1
       initial={{ opacity: 0, scale: 0 }}
       whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
       transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
              Digital concepts given life
            </motion.h1>

          <motion.p
        initial={{ opacity: 0, scale: 0 }}
       whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
       transition={{ delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
       >
       Still confused?
        </motion.p>
       <motion.h5
                initial={{ opacity: 0, scale: 0 }}
       whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
       transition={{ delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
       >
       See My Craft!
         </motion.h5>
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
            <p> My digital crafts
            <span> 
          <div className="dot"></div>
         <div className="dot"></div>
        <div className="dot"></div>
         </span>
         </p>
            
           <div className="work-list">
              <div className="work">
                <Image src={images.work1} alt="CritiQue" title="Critique" />
                <div className="layer">
                  <div className="work-info">  
                  <p>CritiQue</p>
                  <a href="">
                    View <i className="fa-light fa-arrow-up-right"></i>
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
                    View <i className="fa-light fa-arrow-up-right"></i>
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
                    View <i className="fa-light fa-arrow-up-right"></i>
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
                    View <i className="fa-light fa-arrow-up-right"></i>
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
            <p> Concepts in production
            <span> 
          <div className="dot"></div>
         <div className="dot"></div>
        <div className="dot"></div>
         </span>
            </p>
           <div className="work-list">
              <div className="work">
                <Image src={images.work1} alt="CritiQue" title="Critique" />
                <div className="layer">
                  <div className="work-info">  
                  <p>CritiQue</p>
                  <a href="">
                    View <i className="fa-light fa-arrow-up-right"></i>
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
                    View <i className="fa-light fa-arrow-up-right"></i>
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
                    View <i className="fa-light fa-arrow-up-right"></i>
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
                    View <i className="fa-light fa-arrow-up-right"></i>
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
