import styled from "styled-components";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { Link as LinkScroll } from "react-scroll";

export const DropDownSideBarContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 999;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  transition: 0.2s ease-in-out;
  background-color: rgba(32, 32, 32);
`;

export const DropDownSideBarInnerContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ClosedIconContainer = styled.div`
  position: fixed;
  top: 3rem;
  right: 2rem;
`;

export const ClosedIcon = styled(HighlightOffIcon)`
  color: white;
  font-size: 30px !important;
  cursor: pointer;

  &:hover {
    color: pink;
  }
`;

export const MenuItem = styled(LinkScroll)`
  color: white;
  font-size: 2rem;
  text-decoration: none;
  padding: 30px 0;

  &:hover {
    text-decoration: none;
    color: pink;
  }
`;
