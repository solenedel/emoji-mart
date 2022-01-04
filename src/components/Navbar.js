import React, { useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import MobileMenu from "./MobileMenu";
import { StyledDesktopMenu } from "./styled/DesktopMenu.style";

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
      {width <= 950 && (
        <>
          <button
            type="button"
            id="hamburger-btn"
            onClick={() => setShowMenu(!showMenu)}
          >
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
      )}
      {width >= 951 && (
        <StyledDesktopMenu
          setThemeBtnStyle={setThemeBtnStyle}
          toggleTheme={toggleTheme}
          toggleButtonIcon={toggleButtonIcon}
        />
      )}
    </nav>
  );
};

export default Navbar;
