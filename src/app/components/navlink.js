'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const numbers = [-1,0,1]

const NavLink = ({ link }) => {
  const pathName = usePathname();

  return (
    <div>
    {numbers.map((num) => (
    <Link key={num}  className={pathName === link.url ? "active" : ""} href={link.url} 
    style={{ "--i": num }}>
     <span> {link.icon}</span>{link.title}
    </Link>
  ))}
  </div>
  );
};

export default NavLink
