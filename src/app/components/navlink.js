'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'




const NavLink = ({ link }) => {

  const numbers = [1,2,3,4]
  const pathName = usePathname();

  return (
    <Link className={pathName === link.url ? "active" : ""} href={link.url}>
   {numbers.map((num) => (
            <span key={num} style={{ "--i": num }}>{link.icon}</span>
          ))}
    {link.title}
    </Link>
  );
};

export default NavLink
