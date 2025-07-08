'use client';
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import React from "react"

export default function Navigation = () => {

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
    

