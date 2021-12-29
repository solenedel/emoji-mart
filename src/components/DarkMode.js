import React from "react";

const DarkMode = ({ className }) => {

  let clickedClass = "clicked"; // class for the button when it's clicked
  const body = document.body;
  const lightTheme = "light"; // class name for light theme
  const darkTheme = "dark"; // class name for dark theme
  let theme; // handles currently selected mode

  return ( 
    <div className={className}>
    <button>dark mode</button>
    </div>
   );
}
 
export default DarkMode;