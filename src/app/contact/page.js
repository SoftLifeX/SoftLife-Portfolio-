"use client";
import { motion } from "framer-motion";
import React from "react";
import { useEffect } from "react";
import Contactform from "../components/contactform";

/*export const metadata = {
  title: "Contact Me",
};*/

const Contact = () => {

     useEffect(() => {
          (async () => {
            const LocomotiveScroll = (await import("locomotive-scroll")).default;
    
            const locomotiveScroll = new LocomotiveScroll();
          })();
        }, []);

  return (
    <motion.div
      initial={{ y: "60vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
     
     <Contactform />

    </motion.div>
  );
};

export default Contact;
