import "./navbar.css";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className="top">
      <div className="top-left">
        <h3 className="logo">Himanth</h3>
      </div>
      <div className="top-right" ref={navRef}>
        <ul className="top-list">
          <li className="top-list-item">
            <Link to="/" onClick={showNavbar} className="top-list-item">
              Home
            </Link>
          </li>
          <li className="top-list-item">
            <Link to="/blogs" onClick={showNavbar} className="top-list-item">
              Blogs
            </Link>
          </li>
          <li className="top-list-item">
            <Link to="/about" onClick={showNavbar} className="top-list-item">
              About
            </Link>
          </li>
          <li className="top-list-item">
            <Link to="/latest" onClick={showNavbar} className="top-list-item">
              Latest
            </Link>
          </li>
          <li className="top-list-item">
            <Link to="/contact" onClick={showNavbar} className="top-list-item">
              Contact
            </Link>
          </li>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </ul>
      </div>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </div>
  );
};

export default Navbar;
