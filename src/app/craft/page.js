"use client";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";
import { useEffect } from "react";
import Craft1 from "../components/craft1";
import Craft2 from "../components/craft2";
import Contact from "../components/contact";

/*export const metadata = {
  title: "My Craft",
};*/


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
        initial={{ y: "20vh", opacity: 0, scale: 0 }}
        animate={{ y: "0%", opacity: 1, scale: 1 }}
        exit={{ y: "20vh", opacity: 0, scale: 0 }}
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
