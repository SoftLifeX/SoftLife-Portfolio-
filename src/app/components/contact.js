import React from 'react'
import Magnetic2 from "./magnetic2";

function Contact() {
  return (
    <div>
      <section className="home3">
        <div className="contact">
          <div className="container">
            <h1 data-scroll data-scroll-speed={0.1}>
              Ready to elevate your brand?
            </h1>
            <Magnetic2>
            <a href="mailto:softlife.dev001@gmail.com" className="btn3">
              softlife.dev001@gmail.com
            </a>
            </Magnetic2>
            <Magnetic2>
            <a href="tel:+234 813 933 1585" className="btn3">
              +234 813 933 1585
            </a>
            </Magnetic2>
          </div>
          <div className="socials">
            <a href="https://wa.link/wjns9h">
              <i className="bx bxl-whatsapp"></i>
            </a>
            <a href="https://github.com/SoftLifeDev">
              <i className="bx bxl-github"></i>
            </a>
            <a href="">
              <i className="bx bxl-linkedin-square"></i>
            </a>
          </div>
        </div>
        <div className="copyright">
          <p>
            Copyright <i className="bx bx-copyright"></i> SoFTLife. All Rights
            Reserved 2024
          </p>
        </div>
      </section>
    </div>
  );
}

export default Contact
