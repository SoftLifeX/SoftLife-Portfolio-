import React from 'react'
import Image from "next/image";
import { images } from "@/app/images/images";


function Craft1() {
  return (
    <div>
      <section className="craft1">
        <div className="portfolio">
          <div className="container">
            <h1 data-scroll data-scroll-speed={0.1}>
              Digital concepts given life
            </h1>

            <h2>Craft</h2>
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
            </div>

            <p className="fakemargin">margin</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Craft1