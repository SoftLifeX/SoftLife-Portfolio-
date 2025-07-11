'use client'
import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import useGSAP from 



function Revealer() {
   const revealer = useRef(null);

   useGSAP(() => {
    gsap.to(revealer.current, {
       scaleY: 0,
       duration: 1.25,
       delay: 1,
    });
  }, []);

    
    useEffect( () => {
    gsap.to(revealer.current, {
      scaleY: 0,
      duration: 1.25,
      delay: 1,
    });
    }, []);

return (
    <div ref={revealer} className="revealer" />
 );
}

export default Revealer
