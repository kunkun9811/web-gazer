import styled from "styled-components";
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";
import MenuIcon from "@material-ui/icons/Menu";

export const Nav = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
  background-color: rgba(31, 31, 31, 1);
  position: fixed;
  z-index: 50;
  top: 0;
  left: 0;
  padding-top: 20px;
  cursor: pointer;
`;

export const NavBarContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  /* background-color: teal; */
  background-color: transparent;
`;

export const NavLogo = styled.div`
  width: 30%;
  height: 80%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  color: white;
  font-size: 2rem;
  padding-left: 50px;
  /* background-color: pink; */
  background-color: transparent;
`;

export const NavBarMenu = styled.ul`
  width: 70%;
  height: 80%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  /* background-color: purple; */
  background-color: transparent;
`;

export const MobileNavIconConatiner = styled.div`
  padding-top: 10px;
  padding-right: 3.5em;
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenuIcon = styled(MenuIcon)`
  font-size: 2.2rem !important;
  color: white;
`;

export const NavItem = styled.li`
  color: white;
  height: 100%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(LinkScroll)`
  display: flex;
  justify-self: center;
  align-items: flex-end;
  color: white;
  height: 100%;
  padding: 3px 20px;
  margin: 0;
  font-size: 1.1rem;
  /* font-family: sans-serif; */
  background-color: transparent;
  text-decoration: none !important;
  cursor: pointer;

  &:hover {
    color: pink;
  }

  &:active {
    border-bottom: 3px solid white !important;
  }
`;
