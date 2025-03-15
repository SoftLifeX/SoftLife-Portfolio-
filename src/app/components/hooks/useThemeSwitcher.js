import React, { useEffect, useState } from 'react'

/*const  useThemeSwitcher = () => {

    const preferLightQuery = "(prefer-color-scheme: light)";
    const [mode, setMode] = useState("");

    useEffect(() => {
        const mediaQuery = window.matchMedia(preferLightQuery);
        const userPref = window.localStorage.getItem("theme");

        const handleChange = () => {
            if(userPref){
                let check = userPref === "light" ? "light" : "dark";
                setMode(check);

                if(check==="light"){
                    document.documentElement.classList.add('light')
                }else{
                     document.documentElement.classList.remove("light");
                }
            }else{
                 let check = mediaQuery.matches ? "light" : "dark";
                   setMode(check);

                     if (check === "light") {
                       document.documentElement.classList.add("light");
                     } else {
                       document.documentElement.classList.remove("light");
                     }
            }
        }
        mediaQuery.addEventListener("change", handleChange)

        return () => mediaQuery.removeEventListener("change", handleChange)
    }, [])

    useEffect(() => {
        if(mode === "light"){
            window.localStorage.setItem("theme", "light");
            document.documentElement.classList.add("light");
        }if(mode === 'dark'){
             window.localStorage.setItem("theme", "dark");
            document.documentElement.classList.remove("light");
        }
    }, [mode])
  return [mode, setMode]
}

export default useThemeSwitcher*/

const  useThemeSwitcher = () => {

    const preferLightQuery = "(prefer-color-scheme: light)";
    const [mode, setMode] = useState("");

    useEffect(() => {
        const mediaQuery = window.matchMedia(preferLightQuery);
        const userPref = window.localStorage.getItem("theme");

        const handleChange = () => {
            if(userPref){
                let check = userPref === "light" ? "light" : "dark";
                setMode(check);

                if(check==="light"){
                    document.body.setAttribute('data-theme', 'light');
                }
                if(check==="dark"){
                    document.body.setAttribute('data-theme', 'dark');
                }
            }else{
                 let check = mediaQuery.matches ? "light" : "dark";
                   setMode(check);
                
                if(check==="light"){
                    document.body.setAttribute('data-theme', 'light');
                }
                if(check==="dark"){
                    document.body.setAttribute('data-theme', 'dark');
                }
            }
        }
        mediaQuery.addEventListener("change", handleChange)

        return () => mediaQuery.removeEventListener("change", handleChange)
    }, [])

    useEffect(() => {
        if(mode === "light"){
            window.localStorage.setItem("theme", "light");
            document.body.setAttribute('data-theme', 'light');
        }if(mode === 'dark'){
             window.localStorage.setItem("theme", "dark");
            document.body.setAttribute('data-theme', 'dark');
        }
    }, [mode])
  return [mode, setMode]
}

export default useThemeSwitcher
            
