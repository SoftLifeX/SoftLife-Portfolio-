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

const NavLink = ({ route }) => {

  const router = useTransitionRouter();

  const pathName = usePathname();

  return (
  <Link className={pathName === route.url ? "active" : ""} href={route.url} 
    onClick={(e) => {
    e.preventDefault();
    router.push(route.url, {
    onTransitionReady: pageAnimation,
    });
     }}>
    {route.label}
  </Link>
  );
};

export default NavLink
