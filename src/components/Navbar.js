import React, { useState } from "react";
import { Link } from "react-router-dom";
import useWindowSize from "../hooks/useWindowSize";
import MobileMenu from "./MobileMenu";

const Navbar = ({ className, theme, toggleTheme, toggleButtonIcon }) => {
  const [height, width] = useWindowSize();
  const [showMenu, setShowMenu] = useState(false);

  const setThemeBtnStyle = () => {
    if (theme === "light") {
      return {
        background: "black",
        color: "#FEFFC3",
      };
    }
    return {
      background: "#AB94FA",
      color: "black",
      border: "solid black 2px",
      borderRadius: "5px",
    };
  };

  return (
    <nav className={className}>
      <h1 id="logo">emoji mart</h1>
      {width < 750 ? (
        <>
          <button type="button" onClick={() => setShowMenu(!showMenu)}>
            <i className="fas fa-bars" />
          </button>
          <MobileMenu
            showMenu={showMenu}
            setShowMenu={setShowMenu}
            setThemeBtnStyle={setThemeBtnStyle}
            toggleTheme={toggleTheme}
            toggleButtonIcon={toggleButtonIcon}
          />
        </>
      ) : (
        <div>desktop menu</div>
      )}
    </nav>
  );
};

export default Navbar;
