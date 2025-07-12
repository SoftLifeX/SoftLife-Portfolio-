'use client'
import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import CustomEase from 'gsap/CustomEase';



function useRevealer() {

   gsap.registerPlugin(CustomEase);

   const ease = CustomEase.create("hop", "0.9, 0, 0.1, 1");

   useGSAP(() => {
      
    gsap.to(".revealer", {
       scaleY: 0,
       duration: 1.25,
       delay: 1,
       ease: ease,
    });
  }, {});

export default useRevealer
