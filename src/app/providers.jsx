'use client'

import { ThemeProvider } from 'next-themes'
import { AnimatePresence } from "framer-motion";
import Header from "./components/header";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import {useEffect, useLayoutEffect, useRef, useState } from "react";
import Preloader from "./Preloader"
import StickyCursor from "./components/stickyCursor"
import CustomCursor from "./components/CustomCursor"




export function Providers({ children }) {

const [isLoading, setIsLoading] = useState(true);

  const paths = {

    "/": "Home",

    "/about": "About",

   "/craft": "Craft",

    "/contact": "Contact"

  }


  const pathName = usePathname();


    useEffect(() =>{
      setTimeout(() => {
             setIsLoading(false);

             document.body.style.cursor = "default";

             window.scrollTo(0, 0);
           }, 2000);
          },[]);

    return (
<ThemeProvider defaultTheme='system' enableSystem>
 <CustomCursor/>
 <Header />
  {children}
</ThemeProvider>
 )
}
