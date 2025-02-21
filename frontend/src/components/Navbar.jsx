import React from "react";
import { Link } from "react-router-dom";
import "../app.css"; // ✅ Correct if Navbar is inside "components"


function Navbar() {
  return (
     
    <nav className="navbar">
     <h1 className="logo-text">⚡ Flash</h1>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/restaurants">Restaurants</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/login">Login</Link>
        


      </div>
    </nav>
  );
}

export default Navbar;
