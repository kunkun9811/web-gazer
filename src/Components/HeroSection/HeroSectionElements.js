import styled from "styled-components";

export const HeroSectionContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: ${({ backgroundImg }) => (backgroundImg !== undefined ? `url(${backgroundImg})` : `none`)};
  background-size: cover;
  background-position: right 50% bottom 7%;
  background-repeat: no-repeat;

  /* @media screen and (max-width: 1630px) {
    background-position: right 0% bottom 7%;
  } */

  /* background-color: orange; */
`;

export const HeroSectionInnerContainer = styled.div`
  position: relative;
  height: 100vh;
  min-height: 800px;
  width: 100%;
  /* max-width: 1400px; */

  display: flex;
  justify-content: center;
  align-items: center;

  /* background-image: ${({ backgroundImg }) => (backgroundImg !== undefined ? `url(${backgroundImg})` : `none`)};
  background-size: cover;
  background-position: right 50% bottom 7%;
  background-repeat: no-repeat; */

  @media screen and (max-width: 992px) {
    padding: 0 80px;
    min-height: 600px;
  }

  /* blur filter */
  background-color: rgba(208, 200, 202, 0.1);
`;

export const HeroSectionLeftColumn = styled.div`
  height: 100%;
  width: 50%;

  /* background-color: teal; */
`;

export const HeroSectionRightColumn = styled.div`
  position: absolute;
  right: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* @media screen and (max-width: 1630px) {
    right: 1%;
  }

  @media screen and (max-width: 1272px) {
    right: 0%;
  } */

  /* background-color: red; */
`;

export const HeroSectionTitle = styled.p`
  color: black;
  font-family: "Open Sans", sans-serif;
  font-size: ${({ type }) => (type === "topData" ? "4rem" : "3rem")};
  font-weight: 500;
  text-align: center;
  padding: 0;
  margin: 0;

  @media screen and (max-width: 996px) {
    font-size: 2rem;
  }

  /* background: purple; */
`;

export const HeroSectionSubtitle = styled.p`
  color: black;
  font-family: "Open Sans", sans-serif;
  font-size: ${({ type }) => (type === "topData" ? "2.5rem" : "1.5rem")};
  text-align: center;
  padding: 0;
  margin: 0;

  @media screen and (max-width: 996px) {
    font-size: 1.5rem;
  }

  /* background: purple; */
`;
