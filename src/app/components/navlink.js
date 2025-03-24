'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'




const NavLink = ({ link }) => {

  const pathName = usePathname();

  return (
    <Link style={{ "--i": 1 }} className={pathName === link.url ? "active" : ""} href={link.url}>
        {link.title}
  </Link>
  );
};

export default NavLink
