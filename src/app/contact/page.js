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
    <div>

     
     <Contactform />

       </div>
  );
};

export default Contact;
