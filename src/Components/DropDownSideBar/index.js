import React from "react";
import { DropDownSideBarContainer, DropDownSideBarInnerContainer, ClosedIconContainer, ClosedIcon, MenuItem } from "./DropDownSideBarElements";

const DropDownSideBar = ({ closedIconClicked, isOpen }) => {
  const onClickHandler = () => {
    closedIconClicked();
  };

  return (
    <DropDownSideBarContainer isOpen={isOpen}>
      <DropDownSideBarInnerContainer>
        <ClosedIconContainer>
          <ClosedIcon onClick={onClickHandler} />
        </ClosedIconContainer>
        <MenuItem to="about" smooth={true} spy={true} duration={500} onClick={onClickHandler}>
          ABOUT
        </MenuItem>
        <MenuItem to="team" smooth={true} spy={true} duration={500} onClick={onClickHandler}>
          TEAM
        </MenuItem>
        <MenuItem to="demo" smooth={true} spy={true} duration={500} onClick={onClickHandler}>
          DEMO
        </MenuItem>
        <MenuItem to="viz" smooth={true} spy={true} duration={500} onClick={onClickHandler}>
          DATA EXPLORATION
        </MenuItem>
      </DropDownSideBarInnerContainer>
    </DropDownSideBarContainer>
  );
};

export default DropDownSideBar;
