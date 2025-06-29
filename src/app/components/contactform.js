import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Link from "next/link";
import { motion, useInView } from "framer-motion";

function Contactform() {

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

 /* const handleSubmit = (e) =>{
     e.preventDefault();

     const url =
       "https://script.google.com/macros/s/AKfycbz9XaaCC0nE-w8yw5uDEMuz9M9bqsGciQQWMD-RO4SMXm-w2hkygQ-RTGsgf6PaD1A/exec";

       fetch(url, {
         method: "POST",
         headers: { "Content-type": "application/x-www-form-urlencoded" },
         body: (`Name=${e.target.name.value}&Email=${e.target.email.value}&Message=${e.target.message.value}`)
       }).then((response) => {
                msg.innerHTML = "Message sent successfully!";
                setTimeout(function () {
                  msg.innerHTML = "";
                }, 5000);
               e.target.reset();
              })
              .catch((error) => console.error("Error!", error.message));
  } */

  return (
    <div>
      <section>
        <div className="contact">
          <div className="container">
            <motion.h5
             initial={{ opacity: 0, scale: 0 }}
       whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
       transition={{ delay: 0.45, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>You've scrolled this far!</motion.h5>
            <motion.h1 
             initial={{ opacity: 0, scale: 0 }}
       whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
       transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
              Let's collaborate
            </motion.h1>
            <div className="row">
              <div className="contact-left">
                <motion.h2
                initial={{ opacity: 0, scale: 0 }}
       whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
       transition={{ delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
                  Connect with me on any of these online spaces
          <span> 
          <div className="dot"></div>
         <div className="dot"></div>
        <div className="dot"></div>
         </span>
                  <br /> <br /> Trust me we're good at what we do! :)
                </motion.h2>
                <div className="social-icons">
                  <a href="mailto:softlife.dev001@gmail.com" target="_blank" data-title="Email Me">
                    <i className="bx bxl-gmail"></i>
                  </a>
                  <a href="https://web.facebook.com/SoftLife.dev" target="_blank" data-title="Facebook">
                    <i className="bx bxl-facebook"></i>
                  </a>
                  <a href="https://x.com/SoftLife_Dev" target="_blank" data-title="X">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                  <a href="https://wa.link/wjns9h" target="_blank" data-title="WhatsApp">
                    <i className="bx bxl-whatsapp"></i>
                  </a>
{/*<a href="" data-title="Discord">
                    <i className="bx bxl-discord-alt"></i>
                  </a>*/}
                  <a href="https://www.instagram.com/softlifekid/" target="_blank" data-title="Instagram">
                    <i className="bx bxl-instagram"></i>
                  </a>
                  <a href="https://linkedin.com/in/daniel-c-daniel-dev" target="_blank" data-title="linkedin">
                     <i className="bx bxl-linkedin-square"></i>
                  </a>
                  <a href="https://github.com/SoftLifeDev" target="_blank" data-title="Github">
                    <i className="bx bxl-github"></i>
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
    </div>
  );
}

export default Contactform
