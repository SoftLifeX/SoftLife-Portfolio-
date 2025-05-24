"use client";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";
import { useEffect } from "react";
import Contactform from "../components/contactform";

const Contact = () => {

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
     
     <Contactform />

    </motion.div>
</AnimatePresence>
  );
};

export default Contact;
