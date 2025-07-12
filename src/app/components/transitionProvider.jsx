"use client";

import { AnimatePresence } from "framer-motion";
import Header from "./header";
import Contact from "./contact";
import useRevealer from "./hooks/useRevealer";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useTransitionRouter } from 'next-view-transitions'
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Preloader from "../Preloader"
import StickyCursor from "../components/stickyCursor"


  const router = useTransitionRouter();

  export function triggerPageTransition() {
  document.documentElement.animate([
    {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"
    },
    {
      clipPath: "polygon(25% 75%, 75% 75%, 75% 75%, 25% 75%)"
    },
  ], {
    duration: 2000,
    easing: 'cubic-bezier(0.9, 0, 0.1, 1)',
    pseudoElement: '::view-transition-new(root)'
  });
  }


const TransitionProvider = ({ children }) => {
  useRevealer();

   const [isLoading, setIsLoading] = useState(true);

  const paths = {

    "/": "Home",

    "/about": "About",

   "/craft": "Craft",

    "/contact": "Contact"

  }

   const noHeaderPaths = ['/'];
   const noContactPaths = ['/contact'];

  const pathName = usePathname();

    useEffect(() =>{
      setTimeout(() => {
             setIsLoading(false);
    
             document.body.style.cursor = "default";
    
             window.scrollTo(0, 0);
           }, 2000);
  },[]);

  return (
     <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      <div key={pathName}>
         <div className="revealer" />
      <StickyCursor/>
        {!noHeaderPaths.includes(pathName) && <Header />}
        <div>{children}</div>
      {!noContactPaths.includes(pathName) && <Contact />}
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
