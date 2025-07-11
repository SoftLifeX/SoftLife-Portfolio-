"use client";

import { AnimatePresence } from "framer-motion";
import Header from "./header";
import Contact from "./contact";
import Revealer from "./revealer";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Preloader from "../Preloader"
import StickyCursor from "../components/stickyCursor"


const TransitionProvider = ({ children }) => {


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
         <Revealer />
      <StickyCursor/>
        {!noHeaderPaths.includes(pathName) && <Header />}
        <div>{children}</div>
      {!noContactPaths.includes(pathName) && <Contact />}
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
