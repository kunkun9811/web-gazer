import styled from "styled-components";

export const Nav = styled.nav`
  background: transparent;
  height: 100px;
  width: 100%;
  /* margin-top: -80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const NavBarContainer = styled.div`
  background: transparent;
  display: flex;
  justify-content: center;
  height: 100px;
  width: 100%;
  z-index: 1;
  padding: 0 24px;
  /* margin-left: 1rem; */
`;

// export const NavLogo = styled.div`
//   background: transparent;
//   color: white;
//   display: flex;
//   align-items: center;
//   justify-self: flex-start;
//   font-size: 1.8rem;
// `;

export const NavMenu = styled.ul`
  background: transparent;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
  text-align: center;
  width: 50%;
  /* margin-right: 600px; */
`;

export const NavItem = styled.li`
  background: transparent;
  height: 100px;
`;
