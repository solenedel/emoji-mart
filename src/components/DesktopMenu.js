import React from "react";
import { Link } from "react-router-dom";
import ThemeToggleButton from "./ThemeToggleButton";

const DesktopMenu = ({
  toggleTheme,
  setThemeBtnStyle,
  toggleButtonIcon,
  className,
}) => {
  return (
    <div id="desktop-menu" className={className}>
      <div className="desktop-links">
        <Link to="/login">Login</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">My cart</Link>
        <Link to="/favs">My favorites</Link>
        <ThemeToggleButton
          toggleTheme={toggleTheme}
          setThemeBtnStyle={setThemeBtnStyle}
          toggleButtonIcon={toggleButtonIcon}
        />
      </div>
    </div>
  );
};

export default DesktopMenu;
