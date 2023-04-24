import React, { useState, useRef } from "react";
import "./header.css";
import { Link, NavLink } from "react-router-dom";
import logo01 from "../../assets/logo.png";
import logo02 from "../../assets/logo-dark.png";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  // {
  //   path: "/",
  //   display: "Pages",
  // },
  {
    path: "/service",
    display: "Service",
  },
  {
    path: "/project",
    display: "Project",
  },
  {
    path: "/blog",
    display: "BLOG",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  // After scrooll cahnge navbar
  const [navHeader, setNavHeader] = useState(false);

  const changeBackground = () => {
    if (window.scrollY > 0) {
      setNavHeader(true);
    } else {
      setNavHeader(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  // eND after scroll
  const menuRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle("navMobile_active");
  // const [mobileNav, setMobileNav] = useState(false);
  return (
    <header
      className={
        navHeader ? "header container header_active" : "header container"
      }
    >
      <div className="logoHeader">
        <Link to="/">
          <img src={logo01} className="logoDisplay" alt="Logo" />
          <img src={logo02} className="logoScrolled" alt="Logo" />
        </Link>
      </div>

      <nav className="navMobile" ref={menuRef} onClick={toggleMenu}>
        <ul className="mainNavigation">
          {navLinks.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className={(navClass) =>
                navClass.isActive ? "nav__active nav__items" : "nav__items"
              }
            >
              {item.display}
            </NavLink>
          ))}
        </ul>
      </nav>
      <div class="searchContainer">
        <Link class="serachBtn">
          <i class="bx bx-search"></i>
        </Link>
        <Link class="theme-btn btnQuote">Get Quote</Link>
        <button className="barIco" onClick={toggleMenu}>
          <i class="bx bx-menu-alt-right"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
