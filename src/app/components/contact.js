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
            <a href="mailto:daniel.c.daniel.dev@gmail.com" className="btn4">
              daniel.c.daniel.dev@gmail.com
            </a>
            </Magnetic2>
            <Magnetic2>
            <a href="tel:+234 813 933 1585" className="btn2">
              +234 813 933 1585
            </a>
            </Magnetic2>
          </div>
          <div className="socials">
               <a href="https://wa.link/wjns9h" data-title="WhatsApp">
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
                <a href="https://github.com/SoftLifeDev" data-title="Github">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="linkedin.com/in/daniel-c-daniel-dev" data-title="linkedin">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/softlifekid/" data-title="Instagram">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://x.com/SoftLife_Dev" data-title="X">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
          </div>
        </div>
        <div className="copyright">
          <p>
            Copyright <i className="bx bx-copyright"></i> SoFTLife. All Rights
            Reserved 2025
          </p>
        </div>
      </section>
    </div>
  );
}

export default Contact
