'use client'

import React from 'react'

import Link from 'next/link'

import { usePathname } from 'next/navigation'

import { useTransitionRouter } from "next-view-transitions";





const pageAnimation = () => {

  document.documentElement.animate(

    [

      {

        clipPath: "polygon(25% 75%, 75% 75%, 75% 75%, 25% 75%)",

      },

      {

        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",

      },

    ],

    {

      duration: 2000,

      easing: "cubic-bezier(0.9, 0, 0.1, 1)",

      pseudoElement: "::view-transition-new(root)",

    }

  );

}



const TransitionLink = ({href, label}) => {


const pathname = usePathname();
  const router = useTransitionRouter();
  
  const handleNav = (path) => (e) => {
 if (path === pathname) {
  e.preventDefault(); 
  return;
 }
  
  router.push(path, {
  onTransitionReady: pageAnimation,
 });
};




  return (

  <Link href={href} onClick={handleNav}>
    {label}
  </Link>

  );

};



export default TransitionLink
