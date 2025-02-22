"use client"

import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

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
