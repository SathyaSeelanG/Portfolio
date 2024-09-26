import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";
import logoImage from '../../assets/Images/SSlogo.jpg';
const Header = ({ toggle }) => {
  return (
    <div className="Container" style={{ padding: 0 }}>
      <Nav>
        <Logo to="/">
          <img src={logoImage} alt="Header Logo" />
        </Logo>
        <NavMenu>
          <NavLink className="menu-item" to="projects">
            Projects
          </NavLink>
          <NavLink className="menu-item" to="about">
            About
          </NavLink>
          <NavLink className="menu-item" to="skill">
            Skills
          </NavLink>
        </NavMenu>
        <NavBtn>
          <a
            className="btn PrimaryBtn"
            href="https://www.linkedin.com/in/sathya--seelan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect with me
          </a>
        </NavBtn>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
