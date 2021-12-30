import React from "react";
import { Link } from "react-router-dom";
import { StyledDarkMode } from "./styled/DarkMode.style";


const Navbar = ({ className, theme, setTheme, toggleTheme }) => {

  return ( 
    <div className={className}>
     <h1 id="logo">emoji mart</h1>
     <div className="links">
       <Link to="/login">Login</Link>
       <Link to="/products">Products</Link>
       <Link to="/cart">My cart</Link>
       <Link to="/favs">My favourites</Link>
       <button onClick={toggleTheme}>toggle theme</button>
     </div>
    </div>
   );

}
 
export default Navbar;