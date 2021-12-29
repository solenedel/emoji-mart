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