"use client";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import Contactform from "../components/contactform";
import { useRevealer } from "../components/hooks/useRevealer";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
const Contact = () => {

useRevealer();

const pathName = usePathname();

    {/*useGSAP(() => {
    ScrollSmoother.create({
      smooth: 2,
      effects: true,
      smoothTouch: 0.1,
    });
  }); */}

return(
   <div>
     <div className="revealer" />
     <Contactform />
  </div>
  );
};

export default Contact;

