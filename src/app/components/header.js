import React from "react";
import Link from "next/link";
import NavLink from "./navlink";


function Header() {
  const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/craft", title: "Craft" },
    { url: "/contact", title: "Contact" },
  ];

  return (
    <div>
      <header className="top">
        <a href="" className="logo">
          <span>S</span>
          <span>o</span>
          <span>F</span>
          <span>T</span>
          <span>‎</span>
          <span>L</span>
          <span>i</span>
          <span>f</span>
          <span>e</span>
        </a>

        <div className="square"></div>
        <div className="rectangle"></div>

        <input className="icons" type="checkbox" id="check" />
        <div className="icons">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className="navbar">
         <ul>
          <li>
            {links.map((link) => (
            <NavLink link={link} key={link.title} />
          ))}
          </li>
         </ul>
          
        </nav>
      </header>
    </div>
  );
}

export default Header;
