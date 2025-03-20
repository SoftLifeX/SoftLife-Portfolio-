import React from "react";
import Link from "next/link";
import NavLink from "./navlink";
import { motion as m } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { useTheme } from "./hooks/ThemeContext";

function Header() {
/*const [mode, setMode] = useThemeSwitcher;*/
  
const {theme, toggleTheme} = useTheme();
 
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

     const raysVariants = {
    hidden: {
      strokeOpacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    visible: {
      strokeOpacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const rayVariant = {
    hidden: {
      pathLength: 0,
      opacity: 0,
      // Start from center of the circle
      scale: 0
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        // Customize timing for each property
        pathLength: { duration: 0.3 },
        opacity: { duration: 0.2 },
        scale: { duration: 0.3 }
      }
    },
  };

  const shineVariant = {
    hidden: {
      opacity: 0,
      scale: 2,
      strokeDasharray: "20, 1000",
      strokeDashoffset: 0,
      filter: "blur(0px)",
    },
    visible: {
      opacity: [0, 1, 0],
      strokeDashoffset: [0, -50, -100],
      filter: ["blur(2px)", "blur(2px)", "blur(0px)"],
      transition: {


        duration: 0.75,
        ease: 'linear'
      },
    },



  };

  const sunPath =
    "M6.995 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007-2.246-5.007-5.007-5.007S6.995 9.239 6.995 12zM11 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2H2zm17 0h3v2h-3zM5.637 19.778l-1.414-1.414 2.121-2.121 1.414 1.414zM16.242 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.344 7.759 4.223 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z";
  const moonPath =
    "M70 49.5C70 60.8218 60.8218 70 49.5 70C38.1782 70 29 60.8218 29 49.5C29 38.1782 38.1782 29 49.5 29C39 45 49.5 59.5 70 49.5Z"
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

   <div onClick={toggleTheme} id="theme-switch" title='theme'>
          <m.svg
            strokeWidth="4"
            strokeLinecap="round"
            width={100}
            height={100}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className='relative'
          >
            <m.path variants={shineVariant} d={moonPath} className={'absolute top-0 left-0 stroke-blue-100 '} initial="hidden" animate={theme === 'dark' ? 'visible' : "hidden"} />

            <m.path
              d={sunPath}
              fill="transparent"
              transition={{ duration: 1, type: "spring" }}
              initial={{ fillOpacity: 0, strokeOpacity: 0 }}
              animate={
                theme === "dark"
                  ? {
                    d: moonPath,
                    rotate: -360,
                    scale: 2,
                    stroke: "blue",
                    fill: "blue",
                    fillOpacity: 0.35,
                    strokeOpacity: 1,
                    transition: { delay: 0.1 },
                  }
                  : {

                    d: sunPath,
                    rotate: 0,
                    stroke: "yellow",
                    fill: "yellow",
                    fillOpacity: 0.35,
                    strokeOpacity: 1,
                  }
              }
            />
          </m.svg>

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
