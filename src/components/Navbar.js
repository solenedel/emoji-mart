import React, { useState } from "react";
import { Link } from "react-router-dom";
import useWindowSize from "../hooks/useWindowSize";
import MobileMenu from "./MobileMenu";

const Navbar = ({ className, theme, toggleTheme, toggleButtonIcon }) => {
  // const [height, width] = useWindowSize();
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

  // const desktopMenu = (
  //   <div id="desktop-menu">
  //     <div className="links">
  //       <Link to="/login">Login</Link>
  //       <Link to="/products">Products</Link>
  //       <Link to="/cart">My cart</Link>
  //       <Link to="/favs">My favourites</Link>
  //       <button
  //         type="button"
  //         id="theme-toggle-btn"
  //         style={setThemeBtnStyle()}
  //         onClick={toggleTheme}
  //       >
  //         {toggleButtonIcon}
  //       </button>
  //     </div>
  //   </div>
  // );

  return (
    <nav className={className}>
      <h1 id="logo">emoji mart</h1>
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
    </nav>
  );
};

export default Navbar;
