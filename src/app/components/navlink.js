'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavLink = ({ link }) => {
  const pathName = usePathname();

  return (
    <Link className={pathName === link.url ? "active" : ""} href={link.url}>
     <span> {link.icon}</span>{link.title}
    </Link>
  );
};

export default NavLink
