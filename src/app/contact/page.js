"use client";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Contactform from "../components/contactform";
import { useRevealer } from "../components/hooks/useRevealer";


const Contact = () => {

useRevealer();

const pathName = usePathname();

     useEffect(() => {
          (async () => {
            const LocomotiveScroll = (await import("locomotive-scroll")).default;
    
            const locomotiveScroll = new LocomotiveScroll();
          })();
        }, []);

return(
    <div>
     <div className="revealer" />
     <Contactform />
    </div>
  );
};

export default Contact;
