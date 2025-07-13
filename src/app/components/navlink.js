'use client'
import React from 'react'
import Link from 'next/link'
import { useTransitionRouter } from 'next-view-transitions'
import { usePathname } from 'next/navigation'




const NavLink = ({ link }) => {

  const pathName = usePathname();
  const router = useTransitionRouter();

  
  
  return (
    <Link className={pathName === link.url ? "active" : ""} href={link.url}>
        {link.title}
  </Link>
  );
};

export default NavLink
