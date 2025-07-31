'use client'
import { ThemeProvider } from 'next-themes'
import Header from "./components/header";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import {useEffect, useLayoutEffect, useRef, useState } from "react";
import Preloader from "./Preloader"
import StickyCursor from "./components/stickyCursor"
import CustomCursor from "./components/CustomCursor"




export function Providers({ children }) {


  const paths = {

    "/": "Home",

    "/about": "About",

   "/craft": "Craft",

    "/contact": "Contact"

  }


  const pathName = usePathname();


    return (
<ThemeProvider defaultTheme='system' enableSystem>
 <CustomCursor/>
 <Header />
  {children}
</ThemeProvider>
 )
}
