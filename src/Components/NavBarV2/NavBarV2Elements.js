import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";
import MenuIcon from "@material-ui/icons/Menu";

export const Nav = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 20px;
  background-color: ${({ navTransparent }) => (navTransparent ? "transparent" : "rgba(31, 31, 31, 1)")};
  position: fixed;
  z-index: 50;
  top: 0;
  left: 0;
  /* padding-top: 20px; */
  /* cursor: pointer; */
  transition: 0.25s;
  transition-timing-function: ease-in-out;

  /* background-color: red; */
`;

export const NavBarContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border-radius: 20px;
  background-color: rgba(31, 31, 31, 1);
  padding: 0 40px;
`;

export const NavLogo = styled.div`
  width: 30%;
  height: 80%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  color: white;
  font-size: 2rem;
  padding-left: 5px;
  padding-top: 55px;
  background-color: transparent;
`;

export const NavLogoText = styled.p`
  color: white;
  font-size: 2rem;
  cursor: pointer;
  margin: 0;
  padding: 0;
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
  padding-bottom: 2px;
  font-family: sans-serif;
  background-color: transparent;
`;

export const MobileNavIconConatiner = styled.div`
  padding-top: 10px;
  padding-right: 1em;
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
    color: #7cc3f1;
  }

  /* &:active {
    border-bottom: 3px solid white !important;
  } */
`;
