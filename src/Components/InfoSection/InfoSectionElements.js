import styled from "styled-components";

export const InfoSectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: ${({ backgroundImg }) => (backgroundImg !== undefined ? `url(${backgroundImg})` : `none`)};
  background-size: cover;
  background-position: right 50% bottom 20%;

  /* background-color: teal; */
`;

export const InfoSectionInnerContainer = styled.div`
  height: 100vh;
  min-height: 900px;
  width: 100%;
  max-width: 1400px;

  // if type is "topData"
  position: ${({ type }) => (type === "topData" ? "relative" : "static")};
  top: ${({ type }) => (type === "topData" ? "70%" : "0%")};

  // if type is "about"
  display: ${({ type }) => (type === "about" ? "flex" : "initial")};
  flex-direction: ${({ type }) => (type === "about" ? "column" : "initial")};
  justify-content: ${({ type }) => (type === "about" ? "center" : "initial")};
  align-items: ${({ type }) => (type === "about" ? "center" : "initial")};
  padding-top: ${({ type }) => (type === "about" ? "80px" : "0px")};

  @media screen and (max-width: 992px) {
    padding: 0 80px;
    min-height: 600px;
  }

  /* background: pink; */
`;

export const Title = styled.p`
  color: white;
  font-family: "Open Sans", sans-serif;
  font-size: ${({ type }) => (type === "topData" ? "4rem" : "3rem")};
  font-weight: 500;
  text-align: center;
  padding: 0;
  margin: 0;

  @media screen and (max-width: 992px) {
    font-size: 2rem;
  }

  /* background: purple; */
`;

export const Subtitle = styled.p`
  color: white;
  font-family: "Open Sans", sans-serif;
  font-size: ${({ type }) => (type === "topData" ? "2.5rem" : "1.5rem")};
  text-align: center;
  padding: 0;
  margin: 0;

  @media screen and (max-width: 992px) {
    font-size: 1.5rem;
  }

  /* background: purple; */
`;
