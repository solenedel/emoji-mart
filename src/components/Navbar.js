import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({
  className,
  theme,
  setTheme,
  toggleTheme,
  toggleButtonIcon,
}) => {
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
    <div className={className}>
      <h1 id="logo">emoji mart</h1>
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

export default Navbar;
