import React, { useState, createContext } from 'react';

// type Theme = "light" | "dark";
// type ThemeContext = {
//   theme: Theme;
//   toggleTheme: () => void;
// }

export const ThemeContext = createContext({});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");


  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  let backgroundColor = 'bg-slate-100'; // = theme === "light" ? "bg-slate-100" : "bg-slate-500";
  if (theme === 'dark') {
    backgroundColor = 'bg-slate-100';
  } else {

    backgroundColor = 'bg-slate-700';
  }

  document.body.className = backgroundColor;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}