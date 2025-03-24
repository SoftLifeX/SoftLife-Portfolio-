'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'




const NavLink = ({ link }) => {

  const numbers = [1]
  const pathName = usePathname();

  return (
       {numbers.map((num) => (
    <Link key={num} style={{ "--i": num }} className={pathName === link.url ? "active" : ""} href={link.url}>
        {link.title}
  </Link>
     ))}
  );
};

export default NavLink
