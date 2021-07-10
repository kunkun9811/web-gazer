import styled from "styled-components";
import { Link as LinkRedirect } from "react-router-dom";

export const InsightSectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: teal; */
`;

export const InsightSectionInnerContainer = styled.div`
  height: 1200px;
  width: 100%;
  max-width: 1400px;
  padding: 50px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* NOTE: Remember to but a single quote inside the double quotes for it to work */
  // reason being the syntax => https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas
  grid-template-areas: ${({ imgPos }) => (imgPos === "left" ? "'col1 col2'" : "'col2 col1'")};

  @media screen and (max-width: 992px) {
    height: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 100px 0;
    padding: 0;
  }
  /* background-color: pink; */
`;

export const Column1 = styled.div`
  /* flex: 1; */
  grid-area: col1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  /* background-color: burlywood; */
`;

export const Column2 = styled.div`
  /* flex: 1; */
  grid-area: col2;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: crimson; */

  @media screen and (max-width: 992px) {
    height: 40%;
    padding-top: 50px;
  }

  @media screen and (max-width: 720px) {
    height: 40%;
    padding: 0;
  }
`;

export const ImgWrapper = styled.div`
  height: 60%;
  width: 100%;
  border-radius: 50px;
  background-color: grey;

  @media screen and (max-width: 992px) {
    height: 600px;
    width: 600px;
  }

  @media screen and (max-width: 720px) {
    height: 400px;
    min-width: 400px;
  }
`;

export const DemoIntro = styled.p`
  color: white;
  font-size: 1.2rem;
  text-align: center;
`;

// TODO: This will use Link from react-xxx-dom
export const Button = styled(LinkRedirect)`
  height: 80px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 80px;
  margin: 50px 0;
  font-size: 1.5rem;
  color: white;
  background-color: violet;
  text-decoration: none !important;

  &:hover {
    background-color: rgb(255, 192, 203);
    color: white;
  }
`;
