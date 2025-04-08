import React from "react";
import { Link } from "react-router-dom";
import css from './Navbar.module.css'

const Navbar = ({bar}) => {
  return (
    <nav className={css.navbar}>
      <div className={css.navbar_left}>
        <Link className={css.navbar_brand} to='/'>Book Store</Link>
      </div>
      <div className={css.navbar_right}>
        <Link className={css.navbar_link} to='/books'>Books</Link>
        {bar === 'admin' && 
        <>
        <Link className={css.navbar_link}  to='/addbook'>Add Book</Link>
        <Link className={css.navbar_link}  to='/addstudent'>Add Student</Link>
        <Link className={css.navbar_link}  to='/dashboard'>Dashboard</Link>
        </>
        }
        {bar === '' ?
        <>
        <Link className={css.navbar_link}  to='/login'>Login</Link>
        <Link className={css.navbar_link}  to='/register'>Register</Link>
        </>
        :
        <>
        <Link className={css.navbar_link}  to='/logout'>LogOut</Link>
        </>
        }
    

      </div>
    </nav>
  );
};

export default Navbar;
