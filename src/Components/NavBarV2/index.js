import React, { useState } from "react";
import { Nav, NavBarContainer, NavLogo, NavBarMenu, MobileNavIconConatiner, MobileMenuIcon, NavItem, NavLink } from "./NavBarV2Elements";
import { animateScroll as scroll } from "react-scroll";
import DropDownSideBar from "../DropDownSideBar";

// import "./NavBarV2.css";

const scrollToTop = () => {
  scroll.scrollToTop();
};

// TODO: Fix the buggy active state
const NavBarV2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuIconClicked = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <Nav>
      <DropDownSideBar closedIconClicked={menuIconClicked} isOpen={isOpen} />
      <NavBarContainer>
        <NavLogo to="top-page" onClick={scrollToTop}>
          Aankh
        </NavLogo>
        <NavBarMenu>
          <MobileNavIconConatiner>
            <MobileMenuIcon onClick={menuIconClicked} />
          </MobileNavIconConatiner>
          <NavItem>
            <NavLink to="about" smooth={true} spy={true} duration={500}>
              ABOUT
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="team" smooth={true} spy={true} duration={500}>
              TEAM
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="demo" smooth={true} spy={true} duration={500}>
              DEMO
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="viz" smooth={true} spy={true} duration={500}>
              DATA EXPLORATION
            </NavLink>
          </NavItem>
        </NavBarMenu>
      </NavBarContainer>
    </Nav>
  );
};

export default NavBarV2;
