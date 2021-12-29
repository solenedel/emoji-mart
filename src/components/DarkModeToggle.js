import React, { useState } from "react";
import Toggle from "react-toggle";

const DarkModeToggle = () => {

  const [darkModeActive, setDarkModeActive] = useState(false);
  return (
    <Toggle
      className="dark-mode-toggle"
      checked={darkModeActive}
      onChange={}
      >
   );
}
 
export default DarkModeToggle;