"use client";
import { motion } from "framer-motion";
import React from "react"
import { useEffect } from "react";
import Home1 from "./components/home1";
import Home2 from "./components/home2";
import Contact from "./components/contact";


const Home = () => {

 useEffect(() => {
   (async () => {
     const LocomotiveScroll = (await import("locomotive-scroll")).default;

     const locomotiveScroll = new LocomotiveScroll();
   })();
 }, []);

  return (
    <div
      
    >
      
      <Home1 />
      <Home2 />
      <Contact />

    </div>
  );
};

export default Home;
