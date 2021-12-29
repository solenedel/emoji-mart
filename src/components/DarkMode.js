import React from "react";

const DarkMode = ({ className }) => {

  let clickedClass = "clicked"; // class for the button when it's clicked
  const body = document.body;
  const lightTheme = "light"; // class name for light theme
  const darkTheme = "dark"; // class name for dark theme
  let theme; // handles currently selected mode

  if (localStorage) {
    theme = localStorage.getItem("theme");
  }

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(lightTheme); // default to light theme
  }

  const switchTheme = (e) => {
    if (theme === darkTheme) {
      // set light theme
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "light");
      theme = lightTheme;
    } else {
      // set dark theme
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.add(clickedClass);
       localStorage.setItem("theme", "dark");
      theme = darkTheme;
    }
  }

  return ( 
    <div className={className}>
    <button
      className={theme === "dark" ? clickedClass : ""}
      id="dark-mode"
      onClick={(e) => switchTheme(e)}>dark mode</button>
    </div>
   );
}
 
export default DarkMode;