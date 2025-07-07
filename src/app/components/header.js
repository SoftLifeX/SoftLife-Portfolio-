'use client'

import { useState, useRef, useEffect } from 'react';
import { useTheme } from 'next-themes'
import Link from "next/link";
import NavLink from "./navlink";
import { motion as m } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faFolder } from "@fortawesome/free-solid-svg-icons";


function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedOutsideMenu =
        menuRef.current && !menuRef.current.contains(event.target);
      const clickedOutsideButton =
        buttonRef.current && !buttonRef.current.contains(event.target);

      if (clickedOutsideMenu && clickedOutsideButton) {
        setIsOpen(false);
      }
    };

    // Use capture phase to catch earlier in the event cycle
    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

   //sticky 
   const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY >= 10);
    });
  });

   //navigation 
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

   //theme switch
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
      }

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
			scale: 0,
		},
		visible: {
			pathLength: 1,
			opacity: 1,
			scale: 0.85,
			transition: {
				duration: 0.5,
				ease: "easeOut",
				// Customize timing for each property
				pathLength: { duration: 0.3 },
				opacity: { duration: 0.2 },
				scale: { duration: 0.3 },
			},
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
				ease: "linear",
			},
		},
	};

	const sunPath =
		"M70 49.5C70 60.8218 60.8218 70 49.5 70C38.1782 70 29 60.8218 29 49.5C29 38.1782 38.1782 29 49.5 29C60 29 69.5 38 70 49.5Z";
	const moonPath =
		"M70 49.5C70 60.8218 60.8218 70 49.5 70C38.1782 70 29 60.8218 29 49.5C29 38.1782 38.1782 29 49.5 29C39 45 49.5 59.5 70 49.5Z";

  return (
    <div>
      <header className="top">
        {/* <a href="/" className={`logo ${scroll ? "stickylogo" : ""}`}>
          <span>&lt;</span>
          <span>S</span>
          <span>o</span>
          <span>f</span>
          <span>t</span>
          <span>‎</span>
          <span>L</span>
          <span>i</span>
          <span>f</span>
          <span>e</span>
          <span>‎</span>
          <span>D</span>
          <span>e‎</span>
          <span>v</span>
          <span>‎</span>
          <span>/</span>
          <span>&gt;</span>
        </a>*/}
     
         <span
          ref={buttonRef}
          onClick={(e) => {
          e.stopPropagation();
          toggleMenu();
          }}
         className={`menuButton ${scroll ? "stickymenuButton" : ""}`}>
          <span className={`icon1 ${isOpen ? "active" : ""}`}></span>
          <span className={`icon2 ${isOpen ? "active" : ""}`}></span>
          <span className={`icon3 ${isOpen ? "active" : ""}`}></span>
          <span className={`icon4 ${isOpen ? "active" : ""}`}></span>
         </span>

   <div onClick={() => setTheme(theme === "light" ? "dark" : "light")}
         id="theme-switch" data-title="Theme">
          <m.svg
						strokeWidth="4"
						strokeLinecap="round"
						width={100}
						height={100}
						viewBox="0 0 100 100"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="themesvg"
					>
	                                        {/*<m.path
							variants={shineVariant}
							d={moonPath}
							className="shinePath"
							initial="hidden"
							animate={theme === "dark" ? "visible" : "hidden"}
						/>*/}

						<m.g
							variants={raysVariants}
							initial="hidden"
							animate={theme === "light" ? "visible" : "hidden"}
							className="themeg"
							style={{ strokeLinecap: "round" }}
						>
							<m.path
								className="rayPath"
								variants={rayVariant}
								d="M50 2V11"
							/>
							<m.path variants={rayVariant} d="M85 15L78 22" />
							<m.path variants={rayVariant} d="M98 50H89" />
							<m.path variants={rayVariant} d="M85 85L78 78" />
							<m.path variants={rayVariant} d="M50 98V89" />
							<m.path variants={rayVariant} d="M23 78L16 84" />
							<m.path variants={rayVariant} d="M11 50H2" />
							<m.path variants={rayVariant} d="M23 23L16 16" />
						</m.g>

						<m.path
							d={sunPath}
							fill="transparent"
							transition={{ duration: 1, type: "spring" }}
							initial={{ fillOpacity: 0, strokeOpacity: 0 }}
							animate={
								theme === "dark"
									? {
											d: moonPath,
											rotate: 0,
											scale: 1.3,
											stroke: "#E2DFD2",
											fill: "#E2DFD2",
											fillOpacity: 0.5,
											strokeOpacity: 1,
											transition: { delay: 0.1 },
										}
									: {
											d: sunPath,
											rotate: 360,
											stroke: "#000",
											fill: "#000",
											fillOpacity: 0.5,
											strokeOpacity: 1,
										}
							}
						/>
					</m.svg>

        </div>

        <nav
         onClick={(e) => {
          e.stopPropagation();
          }}       
        className={`navbar ${scroll ? "sticky" : ""} ${isOpen ? 'open' : ''}`}>
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
