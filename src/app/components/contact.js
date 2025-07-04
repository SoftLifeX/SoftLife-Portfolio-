'use client';
import React, { useRef, useEffect } from "react";
import Magnetic2 from "./magnetic2";
import Lottie from "lottie-react";
import { useLottie } from "lottie-react";
import Email from "@/app/assets/Email.json";
import Facebook from "@/app/assets/Facebook.json";
import Github from "@/app/assets/Github.json";
import Instagram from "@/app/assets/Instagram.json";
import LinkedIn from "@/app/assets/LinkedIn.json";
import Whatsapp from "@/app/assets/Whatsapp.json";
import X from "@/app/assets/X.json";

function Contact() {

  const containerRef = useRef();
  const [hasPlayed, setHasPlayed] = useState(false);

  const options = {
    animationData: X,
    loop: false,
    autoplay: false,
  };

  const { View, play, stop } = useLottie(options);

  // Use native IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasPlayed) {
          play();
          setHasPlayed(true);
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [hasPlayed, play]);

  // Replay on hover
  const handleHover = () => {
    stop();
    play();
  };

  return (
    <div>
      <section className="home3">
        <div className="contact">
          <div className="container">
            <h1 data-scroll data-scroll-speed={0.1}>
              Ready to elevate your brand?
            </h1>
            <Magnetic2>
            <a href="mailto:daniel.c.daniel.dev@gmail.com" target="_blank" className="btn4">
              daniel.c.daniel.dev@gmail.com
            </a>
            </Magnetic2>
            <Magnetic2>
            <a href="tel:+234 813 933 1585" target="_blank" className="btn2">
              +234 813 933 1585
            </a>
            </Magnetic2>
          </div>
          <div className="socials">
                  <a href="https://x.com/SoftLife_Dev" target="_blank" data-title="X">
                   <div
                    ref={containerRef}
                    onMouseEnter={handleHover}
                    id="lottie3">{View}</div>
                  </a>
                  <a href="https://wa.link/wjns9h" target="_blank" data-title="WhatsApp">
                    <Lottie
                  id="lottie3"
                  loop={true} 
                  animationData={Whatsapp} />
                  </a>
                  <a href="https://www.instagram.com/softlifekid/" target="_blank" data-title="Instagram">
                    <Lottie
                  id="lottie3"
                  loop={true} 
                  animationData={Instagram} />
                  </a>
                  <a href="https://linkedin.com/in/daniel-c-daniel-dev" target="_blank" data-title="linkedin">
                     <Lottie
                  id="lottie3"
                  loop={true} 
                  animationData={LinkedIn} />
                  </a>
                  <a href="https://github.com/SoftLifeDev" target="_blank" data-title="Github">
                    <Lottie
                  id="lottie3"
                  loop={true} 
                  animationData={Github} />
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
