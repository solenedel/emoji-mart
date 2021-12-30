import React, {useState} from "react";

const DarkMode = ({ className }) => {

  // const [buttonIcon, setButtonIcon] = useState('theme 🌙');

  // let clickedClass = "clicked"; // class for the button when it's clicked
  // const body = document.body;
  // const lightTheme = "light"; // class name for light theme
  // const darkTheme = "dark"; // class name for dark theme
  // let theme; // handles currently selected mode

  // if (localStorage) {
  //   theme = localStorage.getItem("theme");
  // }

  // if (theme === lightTheme || theme === darkTheme) {
  //   body.classList.add(theme);
  // } else {
  //   body.classList.add(lightTheme); // default to light theme
  // }

  // const switchTheme = (e) => {
  //   if (theme === darkTheme) {
  //     // set light theme
  //     body.classList.replace(darkTheme, lightTheme);
  //     e.target.classList.remove(clickedClass);
  //     localStorage.setItem("theme", "light");
  //     setButtonIcon('theme 🌙');
  //     theme = lightTheme;
  //   } else {
  //     // set dark theme
  //     body.classList.replace(lightTheme, darkTheme);
  //     e.target.classList.add(clickedClass);
  //     localStorage.setItem("theme", "dark");
  //     setButtonIcon('theme ☀️');
  //     theme = darkTheme;
  //   }
  // }

  return ( 
    <div className={className}>
    {/* <button
      className={theme === "dark" ? clickedClass : ""}
      id="dark-mode"
      onClick={(e) => switchTheme(e)}>{buttonIcon}</button> */}
    </div>
   );
}
 
export default DarkMode;