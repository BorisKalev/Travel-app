import React, { useState } from "react";
import {
  IoSearchSharp,
  IoPersonCircleSharp,
  IoCloseOutline,
} from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-scroll";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <div className={nav ? "navbar navbar-bg" : "navbar"}>
      <div className={nav ? "logo dark" : "logo"}>
        <h2>Beaches.</h2>
      </div>
      <ul className="nav-menu">
        <Link to="home" smooth={true} duration={1000}>
          <li>Home</li>
        </Link>
        <Link to="destinations" smooth={true} duration={1000}>
          <li>Destinations</li>
        </Link>
        <Link to="carousel" smooth={true} duration={1500}>
          <li>Travel</li>
        </Link>
        <Link to="search" smooth={true} duration={1000}>
          <li>Books</li>
        </Link>
        <Link to="selects" smooth={true} duration={1500}>
          <li>Views</li>
        </Link>
      </ul>
      <div className="nav-icons">
        <IoSearchSharp className="icon" style={{ marginRight: "1rem" }} />
        <IoPersonCircleSharp className="icon" />
      </div>
      <div className={nav ? "hamburger dark" : "hamburger"} onClick={handleNav}>
        {nav ? (
          <IoCloseOutline className="icon" />
        ) : (
          <RxHamburgerMenu className="icon" />
        )}
      </div>

      <div className={nav ? "mobile-menu active" : "mobile-menu"}>
        <ul className="mobile-nav">
          <Link to="home" smooth={true} duration={1000}>
            <li>Home</li>
          </Link>
          <Link to="destinations" smooth={true} duration={1000}>
            <li>Destinations</li>
          </Link>
          <Link to="carousel" smooth={true} duration={1500}>
            <li>Travel</li>
          </Link>
          <Link to="search" smooth={true} duration={1000}>
            <li>Books</li>
          </Link>
          <Link to="selects" smooth={true} duration={1500}>
            <li>Views</li>
          </Link>
        </ul>
        <div className="mobile-menu-bottom">
          <div className="menu-icons">
            <button>Search</button>
            <button>Account</button>
          </div>
          <div className="social-icons">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaInstagram className="icon" />
            <FaYoutube className="icon" />
            <FaPinterest className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
