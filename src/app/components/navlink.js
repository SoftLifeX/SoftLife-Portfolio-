'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'




const NavLink = ({ link }) => {
  const pathName = usePathname();

  return (
    <div>
    
    <Link className={pathName === link.url ? "active" : ""} href={link.url} 
    style={{ "--i": 1 }}>
     <span> {link.icon}</span>{link.title}
    </Link>
  
  </div>
  );
};

export default NavLink
