'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavLink = ({ link }) => {
  const pathName = usePathname();
  const numbers = [-1,0,1]

  return (
    <div>
    {numbers.map((num) => (
    <Link key={num} className={pathName === link.url ? "active" : ""} href={link.url} style={{ "--i": num }}>
     <span> {link.icon}</span>{link.title}
    </Link>
  ))}
  </div>
  );
};

export default NavLink
