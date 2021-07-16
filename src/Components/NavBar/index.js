import React from "react";
import { Nav, NavBarContainer, NavMenu, NavItem } from "./NavBarElements";
import Button2 from "../Button2/Button2";

// NOTE: This Navbar contains video + reading options
const NavBar = ({ selectedContent, onClickHandler }) => {
  return (
    <>
      <Nav>
        <NavBarContainer>
          {/* <NavLogo>Aankh</NavLogo> */}
          <NavMenu>
            {/* TODO: Include these two for videos options */}
            {/* <NavItem>
              <Button2 label="YouTube Chill" BtnId="1" onClickHandler={onClickHandler} selectedBtn={selectedContent} />
            </NavItem>
            <NavItem>
              <Button2 label="YouTube Academic" BtnId="2" onClickHandler={onClickHandler} selectedBtn={selectedContent} />
            </NavItem> */}
            {/* 3 = easy reading, 4 = hard reading */}
            <NavItem>
              <Button2 label="Reading" BtnId="3" onClickHandler={onClickHandler} selectedBtn={selectedContent} />
            </NavItem>
            {/* 5 = result */}
            <NavItem>
              <Button2 label="Result" BtnId="5" onClickHandler={onClickHandler} selectedBtn={selectedContent} />
            </NavItem>
          </NavMenu>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
