import styled from "styled-components";
import { Link as LinkRedirect } from "react-router-dom";

export const DemoSectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: rgba(208, 200, 202, 0.1);
`;

export const DemoSectionInnerContainer = styled.div`
  height: 100vh;
  min-height: 600px;
  max-height: 1300px;
  width: 90%;
  max-width: 1700px;
  display: flex;

  /* @media screen and (max-width: 992px) {
    padding: 0 80px;
    min-height: 600px;
  } */

  @media screen and (max-width: 992px) {
    /* padding: 0 30px; */
    min-height: 600px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  /* background: orange; */
`;

export const DemoSectionCol_1 = styled.div`
  height: auto;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  /* background-color: pink; */
`;

export const DemoSectionCol_2 = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* background-color: skyblue; */
`;

export const DemoSectionDescription = styled.p`
  color: black;
  font-family: "Open Sans", sans-serif;
  font-size: 3rem;
  text-align: center;
  padding: 0;
  margin-bottom: 40px;

  @media screen and (max-width: 1200px) {
    font-size: 2rem;
    padding: 0 10px;
  }

  @media screen and (max-width: 992px) {
    font-size: 1.5rem;
    padding: 0 10px;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.1rem;
  }

  /* background: purple; */
`;

export const DemoSectionButton = styled(LinkRedirect)`
  height: 80px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 80px;
  font-size: 1.5rem;
  color: white;
  background: linear-gradient(to bottom right, #7cc3f1, #b050d2);
  text-decoration: none !important;

  &:hover {
    background: transparent;
    color: black;
    transition: 0.3s ease-in-out;
  }

  @media screen and (max-width: 992px) {
    height: 60px;
    width: 150px;
  }
`;

export const DemoSectionImg = styled.img`
  object-fit: cover;
  height: auto;
  width: 100%;
  min-width: 400px;
`;
