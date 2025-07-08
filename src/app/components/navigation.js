'use client';
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import React from "react"

const Navigation = ({ children }) => {


  const pathName = usePathname();

      useEffect(() => {
        (async () => {
          const LocomotiveScroll = (await import("locomotive-scroll")).default;
  
          const locomotiveScroll = new LocomotiveScroll();
        })();
      }, []);

  return (
    
   <div>
    {children}
   </div>
   
  );
};

export default Navigation;

