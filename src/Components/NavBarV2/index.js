import React from "react";
import { Nav, NavBarContainer, NavLogo, NavBarMenu, NavItem } from "./NavBarV2Elements";
import "./NavBarV2.css";

const NavBarV2 = () => {
  return (
    <Nav>
      <NavBarContainer>
        <NavLogo>Aankh</NavLogo>
        <NavBarMenu>
          <NavItem>ABOUT</NavItem>
          <NavItem>TEAM</NavItem>
          <NavItem>TRY IT OUT</NavItem>
          <NavItem>DATA EXPLORATION</NavItem>
        </NavBarMenu>
      </NavBarContainer>
    </Nav>
  );
};

export default NavBarV2;
