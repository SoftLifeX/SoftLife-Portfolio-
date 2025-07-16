import React from 'react';
import { motion, useInView } from "framer-motion";
import Dev from "@/app/assets/Dev.json";
import Serve from "@/app/assets/Serve.json";
import Costs from "@/app/assets/Costs.json";
import Brand from "@/app/assets/Brand.json";
import Developer from "@/app/assets/Developer.json";
import Branding from "@/app/assets/Branding.json";
import Figma from "@/app/assets/Figma.json";
import Targeted from "@/app/assets/Targeted.json";
import Lottie from "lottie-react";

function About3() {
  return (
      <section className="about3">
        <div className="services">
          <div className="container">
           <h5>What we Serve!
             <Lottie
              id="lottie3"
              loop={true} 
              animationData={Serve} />
           </h5>
            <div className="services-list">
              <div className="serviceCard">
                 <Lottie
                  id="lottie"
                  loop={true} 
                  animationData={Developer} />
                <h2>Web | App Development</h2>
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

              <div className="serviceCard">
                <Lottie
                  id="lottie2"
                  loop={true} 
                  animationData={Figma} />
                <h2>UI/UX</h2>
                <p>
                  Unlock the unique experience of user-centric designs:
                  <br />
                  From intuitive and comprehensive concepts; to fluid
                  user-experience;
                  <br />
                  Your audience is sure to be delighted!
                  <br />
                  <br />
                  Endless customization and creative innovations in design,
                  guaranteed to elevate your digital products.
                </p>
                    </div>

              <div className="serviceCard">
               <Lottie
                  id="lottie"
                  loop={true} 
                  animationData={Branding} />
                <h2>Branding</h2>
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

           <div className="serviceCard">
                 <Lottie
                  id="lottie"
                  loop={true} 
                  animationData={Costs} />
                <h2>Affordable excellence</h2>
                <p>
                    Helping brands exceed monthly estimated ROI by
                    turning visitors into loyal customers and accelerating growth.
                    <br /> 
                    <br />
                    what's more?
                    <br />
                    No surprises here! No hidden fees, No sneaky bills!
                    <br />
                    transparency redefined
                </p>
              </div>

              <div className="serviceCard">
                <Lottie
                  id="lottie3"
                  loop={true} 
                  animationData={Targeted} />
                <h2>The Full Package</h2>
                <p>
                  There's a thin line between your visions and REALITY.
                  <br />
                  Let us aid you in bridging that gap.
                  <br />
                  Bringing your creativity to lifehad never been easier!.
                  <br />
                  <br />
                  Why wait?
                  <br />
                  seamlessly integrate you vision with top-tier algorithms.
                </p>
               </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default About3
