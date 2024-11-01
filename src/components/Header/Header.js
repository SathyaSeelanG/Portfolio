
import React from "react";
import logoImage from '../../assets/Images/SSlogo.jpg';
import './Header.css'; // Import the CSS file
import { Link } from "react-router-dom";

import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";
const Header = ({ toggle, home }) => {
  return (
    <div className="Container" style={{ padding: 0 }}>
      <nav className="Nav">
        <div className="Logo">
          <img src={logoImage} alt="Header Logo" />
        </div>
        {home ? (
          <div className="NavMenu">
            <NavLink className={home ? "NavLinkHome menu-item" : "NavLink menu-item"} to="projects">
              Projects
            </NavLink>
            <NavLink className={home ? "NavLinkHome menu-item" : "NavLink menu-item"} to="about">
              About
            </NavLink>
            <NavLink className={home ? "NavLinkHome menu-item" : "NavLink menu-item"} to="skill">
              Skills
            </NavLink>
          </div>) : (<div className="NavMenu">
            <Link className={home ? "NavLinkHome menu-item" : "NavLink menu-item"} to="/">
              Home
            </Link>
          </div>)}
        <div className="NavBtn">
          <a
            className="btn PrimaryBtn"
            href="https://www.linkedin.com/in/sathya--seelan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect With Me
          </a>
        </div>
        <div className="Bars" onClick={toggle} />
      </nav>
    </div>
  );
};

export default Header;
