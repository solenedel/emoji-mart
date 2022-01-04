import React from "react";
import { Link } from "react-router-dom";

const DesktopMenu = ({ toggleTheme, setThemeBtnStyle, toggleButtonIcon }) => {
  return (
    <div id="desktop-menu">
      <div className="links">
        <Link to="/login">Login</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">My cart</Link>
        <Link to="/favs">My favourites</Link>
        <button
          type="button"
          id="theme-toggle-btn"
          style={setThemeBtnStyle()}
          onClick={toggleTheme}
        >
          {toggleButtonIcon}
        </button>
      </div>
    </div>
  );
};

export default DesktopMenu;
