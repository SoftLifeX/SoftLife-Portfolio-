"use client";
import { motion } from "framer-motion";
import React from "react";
import { useEffect } from "react";
import About1 from "../components/about1";
import About2 from "../components/about2";
import About3 from "../components/about3";
import Contact from "../components/contact";

export const metadata = {
  title: "About",
};

const About = () => {

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
      <About1 />
      <About2 />
      <About3 />
      <Contact />
    </motion.div>
  );
};

export default About;
