'use client'
import React from 'react'
import Link from 'next/link'
import triggerPageTransition from "./transitionProvider";
import { usePathname } from 'next/navigation'




const NavLink = ({ link }) => {

  const pathName = usePathname();

  const handleNavigation = (path) => (e) => {
  if (path === pathName) {
    e.preventDefault();
    return;
  }

  router.push(path, {
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
