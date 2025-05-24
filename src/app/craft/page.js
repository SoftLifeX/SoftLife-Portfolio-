"use client";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";
import { useEffect } from "react";
import Craft1 from "../components/craft1";
import Craft2 from "../components/craft2";
import Contact from "../components/contact";


const Craft = () => {

const pathName = usePathname();
     
     useEffect(() => {
          (async () => {
            const LocomotiveScroll = (await import("locomotive-scroll")).default;
    
            const locomotiveScroll = new LocomotiveScroll();
          })();
        }, []);
        
  return (
    <AnimatePresence mode="wait" >
      <motion.div
        key={pathName}
        initial={{ opacity: 0, scale: 0, transformOrigin: 'top' }}
        animate={{ opacity: 1, scale: 1, transformOrigin: 'top' }}
        exit={{ opacity: 0, scale: 0, transformOrigin: 'top'}}
        transition={{ duration: 0.5 }}
      >

      <Craft1 />
      <Craft2 />
      <Contact />

    </motion.div>
   </AnimatePresence>
  );
};

export default Craft;
