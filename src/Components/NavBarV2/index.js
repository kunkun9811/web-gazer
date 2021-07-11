import React from "react";
import { Nav, NavBarContainer, NavLogo, NavBarMenu, NavItem, NavLink } from "./NavBarV2Elements";
import { animateScroll as scroll } from "react-scroll";
// import "./NavBarV2.css";

const scrollToTop = () => {
  scroll.scrollToTop();
};

// TODO: Fix the buggy active state
const NavBarV2 = () => {
  return (
    <Nav>
      <NavBarContainer>
        <NavLogo to="top-page" onClick={scrollToTop}>
          Aankh
        </NavLogo>
        <NavBarMenu>
          <NavItem>
            <NavLink to="about" smooth={true} spy={true} duration={500} offset={80}>
              ABOUT
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="team" smooth={true} spy={true} duration={500} offset={80}>
              TEAM
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="demo" smooth={true} spy={true} duration={500} offset={80}>
              DEMO
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="viz" smooth={true} spy={true} duration={500} offset={80}>
              DATA EXPLORATION
            </NavLink>
          </NavItem>
        </NavBarMenu>
      </NavBarContainer>
    </Nav>
  );
};

export default NavBarV2;
