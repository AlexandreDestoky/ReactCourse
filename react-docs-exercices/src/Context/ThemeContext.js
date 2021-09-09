import React from "react";
import { createContext } from "react";
import { useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = props => {
  const [theme, setTheme] = useState(false);
  const toggleTheme = () => setTheme(!theme);

  if (theme) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{props.children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
