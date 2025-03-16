"use client"

import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const useMode = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('');
            
  useEffect(() => {
    if(theme === 'light'){
      document.body.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    }
    if(theme === 'dark'){
      document.body.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    }
    
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


    /*const preferLightQuery = "(prefer-color-scheme: dark)";
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

    const toggleMode = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}*/

  
