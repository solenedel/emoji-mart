import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ className, theme, toggleTheme, toggleButtonIcon }) => {
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

  const menu = (
    <div id="mobile-menu">
      <div className="links">
        <button
          type="button"
          id="quit-menu"
          onClick={() => setShowMenu(!showMenu)}
        >
          <i className="fas fa-times" />
        </button>

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

  const menuMask = (
    // eslint-disable-next-line
    <div id="menu-mask" onClick={() => setShowMenu(!showMenu)}>
    </div>
  );

  return (
    <nav className={className}>
      {!showMenu && <h1 id="logo">emoji mart</h1>}
      <button type="button" onClick={() => setShowMenu(!showMenu)}>
        <i className="fas fa-bars" />
      </button>
      {showMenu && menu}
      {showMenu && menuMask}
    </nav>
  );
};

export default Navbar;
