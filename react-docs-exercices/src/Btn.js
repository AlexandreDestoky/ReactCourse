import React from "react";
import { ThemeContext } from "./Context/ThemeContext";
import { useContext } from "react";

export default function Btn() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return <button onClick={toggleTheme}>{theme ? "Light🌞" : "Dark🌑"} Mode</button>;
}
