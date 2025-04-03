import React from "react";
import { Link } from "react-router-dom";
import css from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={css.navbar}>
      <div className={css.navbar_left}>
        <span className={css.navbar_brand}>Book Store</span>
      </div>
      <div className={css.navbar_right}>
        <Link className={css.navbar_link} to='/books'>Books</Link>
        <Link className={css.navbar_link}  to='/login'>Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
