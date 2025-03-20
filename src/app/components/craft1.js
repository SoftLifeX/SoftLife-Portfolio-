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
                      <a href="#stack" className={action === "Project" ? "active": "" }
                        onClick={() => {
                        setAction("Project");
                        }}
                       >
                        Case Studies 
                      </a>
                    </li>
                    <li>
                      <a href="#stack" className={action === "Concept" ? "active": "" }
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
            <h3> My digital crafts </h3>
            
            <div className="work-list">
              <div className="work">
                <Image src={images.work2} alt="work2" />
                <div className="layer">
                  <p></p>
                  <a href="">
                    <i className="bx bx-link-external"></i>
                  </a>
                </div>
              </div>

              <div className="work">
                <Image src={images.work3} alt="work3" />
                <div className="layer">
                  <p></p>
                  <a href="">
                    <i className="bx bx-link-external"></i>
                  </a>
                </div>
              </div>

              <div className="work">
                <Image src={images.work2} alt="work2" />
                <div className="layer">
                  <p></p>
                  <a href="">
                    <i className="bx bx-link-external"></i>
                  </a>
                </div>
              </div>

              <div className="work">
                <Image src={images.work1} alt="work1" />
                <div className="layer">
                  <p></p>
                  <a href="">
                    <i className="bx bx-link-external"></i>
                  </a>
                </div>
              </div>

            <p className="fakemargin">margin</p>
            </div>
          </div>
          ) : (
            <div/>
            )}
            {action === "Concept" ? (
          <div>
            <h3> Concepts in production!</h3>
          <div className="work-list">
              <div className="work">
                <Image src={images.work2} alt="work2" />
                <div className="layer">
                  <p></p>
                  <a href="">
                    <i className="bx bx-link-external"></i>
                  </a>
                </div>
              </div>

              <div className="work">
                <Image src={images.work3} alt="work3" />
                <div className="layer">
                  <p></p>
                  <a href="">
                    <i className="bx bx-link-external"></i>
                  </a>
                </div>
              </div>

              <div className="work">
                <Image src={images.work2} alt="work2" />
                <div className="layer">
                  <p></p>
                  <a href="">
                    <i className="bx bx-link-external"></i>
                  </a>
                </div>
              </div>

              <div className="work">
                <Image src={images.work1} alt="work1" />
                <div className="layer">
                  <p></p>
                  <a href="">
                    <i className="bx bx-link-external"></i>
                  </a>
                </div>
              </div>
            <p className="fakemargin">margin</p>
            </div>
          </div>
            
          ) : (
            <div/>
            )}
         </div>
        </div>
      </section>
    </div>

/* <div className="work-list">
              <div className="work">
                <Image src={images.work2} alt="work2" />
                <div className="layer">
                  <p></p>
                  <a href="">
                    <i className="bx bx-link-external"></i>
                  </a>
                </div>
              </div>

              <div className="work">
                <Image src={images.work3} alt="work3" />
                <div className="layer">
                  <p></p>
                  <a href="">
                    <i className="bx bx-link-external"></i>
                  </a>
                </div>
              </div>

              <div className="work">
                <Image src={images.work2} alt="work2" />
                <div className="layer">
                  <p></p>
                  <a href="">
                    <i className="bx bx-link-external"></i>
                  </a>
                </div>
              </div>

              <div className="work">
                <Image src={images.work1} alt="work1" />
                <div className="layer">
                  <p></p>
                  <a href="">
                    <i className="bx bx-link-external"></i>
                  </a>
                </div>
              </div>
            </div>

            <p className="fakemargin">margin</p>
          </div>*/
  );
}

export default Craft1
