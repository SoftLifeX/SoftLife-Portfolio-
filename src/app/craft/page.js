"use client";
import { motion } from "framer-motion";
import React from "react";
import { useEffect } from "react";
import Craft1 from "../components/craft1";
import Craft2 from "../components/craft2";
import Contact from "../components/contact";

/*export const metadata = {
  title: "My Craft",
};*/


const Craft = () => {

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

      <Craft1 />
      <Craft2 />
      <Contact />

    </motion.div>
  );
};

export default Craft;
