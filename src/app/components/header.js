import React from "react";
import Link from "next/link";
import NavLink from "./navlink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

function Header() {
  const [mode, setMode] = useThemeSwitcher();
 
 const links = [
   {
     url: "/",
     title: "Home",
     icon: (
       <FontAwesomeIcon
         icon={faHouse}
         style={{ paddingRight: "5px", scale: "0.8" }}
       />
     ),
   },

   {
     url: "/about",
     title: "About",
     icon: (
       <FontAwesomeIcon
         icon={faUser}
         style={{ paddingRight: "5px", scale: "0.8" }}
       />
     ),
   },

   {
     url: "/craft",
     title: "Craft",
     icon: (
       <FontAwesomeIcon
         icon={faFolder}
         style={{ paddingRight: "5px", scale: "0.8" }}
       />
     ),
   },

   {
     url: "/contact",
     title: "Contact",
     icon: (
       <FontAwesomeIcon
         icon={faEnvelope}
         style={{ paddingRight: "5px", scale: "0.8" }}
       />
     ),
   },
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

        <input className="icons" type="checkbox" id="check" />
        <div className="icons">
          <span></span>
          <span></span>
          <span></span>
        </div>

   <div onClick={() => setMode(mode === "light" ? "dark" : "light")} id="theme-switch" title='theme'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            title="dark mode"
          >
            <path d="M12 11.807A9.002 9.002 0 0 1 10.049 2a9.942 9.942 0 0 0-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142 3.906 3.906 10.237 3.905 14.143 0a9.946 9.946 0 0 0 2.735-5.119A9.003 9.003 0 0 1 12 11.807z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            title="light mode"
          >
            <path d="M6.995 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007-2.246-5.007-5.007-5.007S6.995 9.239 6.995 12zM11 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2H2zm17 0h3v2h-3zM5.637 19.778l-1.414-1.414 2.121-2.121 1.414 1.414zM16.242 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.344 7.759 4.223 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"></path>
          </svg>
        </div>

        <nav className="navbar">
         <ul>
          <li>
            {links.map((link) => (
            <NavLink link={link} key={link.title} />
          ))}
          </li>
         </ul>

     <div className="social-icons">
                  <a href="mailto:softlife.dev001@gmail.com">
                    <i className="bx bxl-gmail"></i>
                  </a>
                  <a href="https://web.facebook.com/SoftLife.dev">
                    <i className="bx bxl-facebook"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-square-x-twitter"></i>
                  </a>
                  <a href="https://wa.link/wjns9h">
                    <i className="bx bxl-whatsapp"></i>
                  </a>
                  <a href="">
                    <i className="bx bxl-discord-alt"></i>
                  </a>
                  <a href="https://www.instagram.com/softlifekid/">
                    <i className="bx bxl-instagram"></i>
                  </a>
                  <a href="">
                     <i className="bx bxl-linkedin-square"></i>
                  </a>
                  <a href="https://github.com/SoftLifeDev">
                    <i className="bx bxl-github"></i>
                  </a>
                </div>
          
        </nav>
      </header>
    </div>
  );
}

export default Header;
