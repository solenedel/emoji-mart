import React from "react";
import { Link } from "react-router-dom";

const MobileMenu = ({
  showMenu,
  setShowMenu,
  setThemeBtnStyle,
  toggleTheme,
  toggleButtonIcon,
}) => {
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
    <div>
      {" "}
      {showMenu && menu}
      {showMenu && menuMask}
    </div>
  );
};

export default MobileMenu;
