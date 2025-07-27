import React, { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import emailjs from '@emailjs/browser';
import Link from "next/link";
import { Typewriter, Cursor } from "nextjs-simple-typewriter";
import { motion, useInView } from "framer-motion";
import Lottie from "lottie-react";
import Email from "@/app/assets/Email.json";
import Facebook from "@/app/assets/Facebook.json";
import Github from "@/app/assets/Github.json";
import Instagram from "@/app/assets/Instagram.json";
import LinkedIn from "@/app/assets/LinkedIn.json";
import Whatsapp from "@/app/assets/Whatsapp.json";
import X from "@/app/assets/X.json";
import { usePathname } from "next/navigation";
import { useTransitionRouter } from "next-view-transitions";

//page transition
const pageAnimation = () => {
  document.documentElement.animate(
    [
      {
        clipPath: "polygon(25% 75%, 75% 75%, 75% 75%, 25% 75%)",
      },
      {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      },
    ],
    {
      duration: 2000,
      easing: "cubic-bezier(0.9, 0, 0.1, 1)",
      pseudoElement: "::view-transition-new(root)",
    }
  );
  }




function Contactform() {

  //splitText
 useGSAP(() => {
        const heroSplit = new SplitText(".title", {
         type: "chars, words, lines",
        });


        // Apply text-gradient class once before animating
        heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

        gsap.from(heroSplit.chars, {
         opacity: 0,
         yPercent: 50,
         duration: 0.4,
         ease: "back.out",
         stagger: 0.04,
         delay: 2,
        });
   }, []);
  
  const router = useTransitionRouter();

  const pathName = usePathname();


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_fzonyeb', 'template_rfw102k', form.current, {
        publicKey: 't7MHRMttPJp383CfY',
      })
      .then(
        (response) => {
          msg.innerHTML = "Message sent successfully!";
                setTimeout(function () {
                  msg.innerHTML = "";
                }, 5000);
               e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
      <section className="contactForm">
        <div className="contact">
          <div className="container">
            <h5 className="title">
              You've scrolled this far!
            </h5>
            <h1 className="title">
             It's time to level up!
            </h1>
            <div className="row">
              <div className="contact-left">
                <motion.h2
                 className="scale"
                initial={{ opacity: 0, scale: 0 }}
       whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
       transition={{ delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
                <span className="typed">
                  <Typewriter
                    words={[
                      " Let's connect, \n I'm available on any of these virtual platforms! "
                    ]}
                    cursor
                    cursorStyle=""
                    typeSpeed={90}
                    deleteSpeed={1000}
                    delaySpeed={1000}
                  />
                </span>
                  <br /> <br /> Trust me we're good at what we do :)
                </motion.h2>
                <div className="social-icons">
                  <a href="mailto:daniel.c.daniel.dev@gmail.com" target="_blank" data-title="Email Me">
                    <Lottie
                  id="lottie3" 
                  loop={false} 
                  animationData={Email} 
                    />
                  </a>
                  <a href="https://web.facebook.com/SoftLife.dev" target="_blank" data-title="Facebook">
                    <Lottie
                  id="lottie3"
                  loop={false} 
                  animationData={Facebook} 
                    />
                  </a>
                  <a href="https://x.com/SoftLife_Dev" target="_blank" data-title="X">
                    <Lottie
                  id="lottie3"
                  loop={false} 
                  animationData={X} 
                    />
                  </a>
                  <a href="https://wa.link/wjns9h" target="_blank" data-title="WhatsApp">
                    <Lottie
                  id="lottie3"
                  loop={false}  
                  animationData={Whatsapp}
                    />
                  </a>
                  <a href="https://www.instagram.com/softlifekid/" target="_blank" data-title="Instagram">
                    <Lottie
                  id="lottie3"
                  loop={false} 
                  animationData={Instagram} 
                    />
                  </a>
                  <a href="https://linkedin.com/in/daniel-c-daniel-dev" target="_blank" data-title="linkedin">
                     <Lottie
                  id="lottie3"
                  loop={false} 
                  animationData={LinkedIn}
                    />
                  </a>
                  <a href="https://github.com/SoftLifeDev" target="_blank" data-title="Github">
                    <Lottie
                  id="lottie3"
                  loop={false}  
                  animationData={Github} 
                    />
                  </a>
                </div>
                <Link 
              href="/" 
              className="btn2" 
              onClick={(e) => {
              e.preventDefault();
              router.push("/", {
              onTransitionReady: pageAnimation,
             });
           }}>
              HomePage
            </Link>
                <a href="./Daniel c. Daniel's Resume.pdf" download className="btn2">
                 Resume
                </a>
              </div>
              <div className="contact-right">
                <form ref={form} onSubmit={sendEmail}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                  <textarea
                    name="message"
                    rows="6"
                    placeholder="Message"
                    required
                  ></textarea>
                  <button type="submit" className="btn4">
                    Send Message!
                  </button>
                </form>
                <span id="msg"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default Contactform
