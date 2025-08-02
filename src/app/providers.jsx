'use client'
import { ThemeProvider } from 'next-themes'
import Header from "./components/header";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import {useEffect, useLayoutEffect, useRef, useState } from "react";
import Preloader from "./Preloader"
import StickyCursor from "./components/stickyCursor"
import CustomCursor from "./components/CustomCursor"
import InitScrollSmoother from './components/InitScrollSmoother';
import ScrollToTopOnRouteChange from './components/ScrollToTopOnRouteChange';
//import ScrollRestoration from './components/ScrollRestoration';



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
  <InitScrollSmoother />
  {/*<ScrollRestoration />*/}
  <ScrollToTopOnRouteChange />
 <CustomCursor/>
 <Header />
  <div id="smooth-wrapper">
    <div id="smooth-content">
      {children}
    </div>
  </div>
</ThemeProvider>
 )
}
