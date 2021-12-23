import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ className }) => {
  return ( 
    <div className={className}>
     <h1 id="logo">⚡ emoji mart</h1>
     <div className="links">
       <Link to="/login">Login</Link>
       <Link to="/login">Products</Link>
       <Link to="/cart">My cart</Link>
       <Link to="/favs">My favourites</Link>
     </div>
    </div>
   );
}
 
export default Navbar;