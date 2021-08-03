import React, { useState, useEffect } from "react";
import { Nav, NavBarContainer, NavLogo, NavBarMenu, MobileNavIconConatiner, MobileMenuIcon, NavItem, NavLink } from "./NavBarV2Elements";
import { animateScroll as scroll } from "react-scroll";
import DropDownSideBar from "../DropDownSideBar";

// get viewport dimensions
import BrowserDimensions from "../Utils/BrowserDimensions";

const scrollToTop = () => {
  scroll.scrollToTop();
};

// TODO: Fix the buggy active state
const NavBarV2 = () => {
  /* Browser Dimensions */
  const { width: browserWidth, height: browserHeight } = BrowserDimensions();

  /* States */
  const [isOpen, setIsOpen] = useState(false);
  const [navTransparent, setNavTransparent] = useState(true);

  /* Listeners */
  useEffect(() => {
    // listens to scroll for navbar animation
    window.addEventListener("scroll", handleNavBarScrollAnimation);
  }, []);

  /* Methods */
  const menuIconClicked = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleNavBarScrollAnimation = () => {
    if (window.scrollY > browserHeight - 30) {
      setNavTransparent(false);
    } else {
      setNavTransparent(true);
    }
  };

  return (
    <Nav navTransparent={navTransparent}>
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
            <NavLink to="demo" smooth={true} spy={true} duration={500}>
              DEMO
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="team" smooth={true} spy={true} duration={500}>
              TEAM
            </NavLink>
          </NavItem>
          {/* Removed data visualization for now */}
          {/* <NavItem>
            <NavLink to="viz" smooth={true} spy={true} duration={500}>
              DATA EXPLORATION
            </NavLink>
          </NavItem> */}
        </NavBarMenu>
      </NavBarContainer>
    </Nav>
  );
};

export default NavBarV2;
