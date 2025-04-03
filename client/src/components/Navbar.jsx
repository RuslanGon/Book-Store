import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left-navbar">
        <span>Book Store</span>
      </div>
      <div className="right-navbar">
        <Link className="navbar-link" to='/books'>Books</Link>
        <Link className="navbar-link" to='/login'>Login</Link>

      </div>
    </nav>
  );
};

export default Navbar;
