"use client";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
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

return(
    <div>
     <Contactform />
    </div>
  );
};

export default Contact;
