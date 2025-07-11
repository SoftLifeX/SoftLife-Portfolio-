'use client'
import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';




function Revealer() {
   const revealer = useRef(null);

    
    useEffect( () => {
    gsap.registerPlugin(CustomEase);
    gsap.to(revealer, {
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
