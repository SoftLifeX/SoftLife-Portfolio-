import React, { useRef } from 'react';
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

const charVariants_letsCollab = {
  hidden: { opacity: 0, y: "0.25em" },
  visible: {
    opacity: 1,
    y: "0em",
    transition: { duration: 0.4, ease: [0.175, 0.885, 0.32, 1.275] },
  },
};

const wordContainer_letsCollab = {
  visible: (i = 1) => ({
    transition: {
      staggerChildren: 0.04,
      delayChildren: i * 0.04,
      delay: 1,
    },
  }),
};

function Contactform() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });

  const words = ["It's", "time", "to", "level", "up!"];
  

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
            <motion.h5
             className="scale"
             initial={{ opacity: 0, scale: 0 }}
       whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
       transition={{ delay: 0.3, duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] }}>You've scrolled this far!</motion.h5>
            <h1>
             <motion.div
                  ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={wordContainer_letsCollab}
      className="flex flex-wrap text-[1.25rem] leading-tight"
      style={{
        whiteSpace: "normal",
        margin: 0,
        padding: 0,
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={`word-${i}`}
          style={{
            display: "inline-flex",
            marginRight: i !== words.length - 1 ? "0.4em" : "0",
          }}
          variants={wordContainer_letsCollab}
        >
          {word.split("").map((char, j) => (
            <motion.span
              key={`char-${i}-${j}`}
              variants={charVariants_letsCollab}
              style={{
                display: "inline-block",
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </motion.div>
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
                <Link href="/" className="btn4">
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
