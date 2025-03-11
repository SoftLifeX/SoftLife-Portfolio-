import React from 'react';
import { motion, useInView } from "framer-motion";

function About3() {
  return (
    <div>
      <section className="about3">
        <div className="services">
          <div className="container">
           <h5>Our Services</h5>
            <motion.div 
              initial={{ y: "60svh", opacity: 0 }}
                whileInView={{ y: "0%", opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
             className="services-list">
              <div>
                <i className="bx bx-code-alt"></i>
                <h2>Web Development</h2>
                <p>
                  Ready to <b>Captivate</b> your desired audience?
                  <br />
                  Now you can! with ease, and efficiency;
                  <br />
                  Across ALL devices!
                  <br />
                  <br />
                  We boast functonality, without the compromise of your
                  aesthetics.
                </p>
              </div>

              <div>
                <i className="bx bx-devices"></i>
                <h2>UI/UX</h2>
                <p>
                  Unlock the vast potential of user-centric designs:
                  <br />
                  From intuitive and comprehensive concepts, crafts; to fluid
                  user-experience;
                  <br />
                  Your audience is sure to be delighted!
                  <br />
                  <br />
                  Endless customization and creative innovations in design,
                  guaranteed to elevate your digital products.
                </p>
              </div>

              <div>
                <i class="fa-solid fa-paintbrush"></i>
                <h2>Graphic Design</h2>
                <p>
                  Your Brand is your Legacy;
                  <br />
                  why settle for less?
                  <br />
                  you no longer have to!
                  <br />
                  <br />
                  Represent your Legacy with your own unique style;
                  <br />
                  Tailored specifically, <b>just for YOU!</b>
                </p>
              </div>

              <div>
                <i className="fa-brands fa-app-store"></i>
                <h2>App Design</h2>
                <p>
                  There's a thin line between your visions and REALITY.
                  <br />
                  <br />
                  Let us aid you in bridging that gap.
                  <br />
                  <br />
                  Bringing your creativity to life is no longer a far dream.
                  <br />
                  <br />
                  Why wait?
                  <br />
                  seamlessly integrate you vision with top-tier algorithms.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About3
