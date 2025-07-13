"use client";

import Header from "./header";
import Contact from "./contact";
import { useRevealer } from "./hooks/useRevealer";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Preloader from "../Preloader"
import StickyCursor from "../components/stickyCursor"



const Transition = ({ children }) => {

   useRevealer();

   const [isLoading, setIsLoading] = useState(true);

  const paths = {

    "/": "Home",

    "/about": "About",

   "/craft": "Craft",

    "/contact": "Contact"

  }

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
    <>
         <div className="revealer" />
      <StickyCursor/>
        <div>
           {children}
        </div>
      {!noContactPaths.includes(pathName) && <Contact />}
    </>
  );
};

export default Transition;
