'use client'
import React from 'react'
import Link from 'next/link'
import { useTransitionRouter } from 'next-view-transitions'
import { usePathname } from 'next/navigation'




const NavLink = ({ link }) => {

  const pathName = usePathname();
  const router = useTransitionRouter();

  function triggerPageTransition () {
    document.documentElement.animate([
      {
        clipPath: "polygon(25% 75% 75% 75% 75% 75% 25% 75%)",
      },
      {
        clipPath: "polygon(0% 100% 100% 100% 100% 0% 0% 0%)",
      },
    ],
    {
      duration: 2000,
      easing: "cubic-bezier(0.9, 0, 0.1, 1)",
      pseudoElement: "::view-transition-new(root)",
    });
  }

  
  
  const handleNavigation = ({ link }) => (e) => {
    if (link === pathName) {
      e.preventDefault();
      return;
    }
    router.push ({ link }, {
      onTransitionReady: triggerPageTransition,
    });
  };

  
  
  return (
    <Link onClick={handleNavigation} className={pathName === link.url ? "active" : ""} href={link.url}>
        {link.title}
  </Link>
  );
};

export default NavLink
