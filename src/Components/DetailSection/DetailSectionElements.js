import styled from "styled-components";

export const DetailSectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* background: teal; */
`;

export const DetailSectionInnerContainer = styled.div`
  height: 100vh;
  min-height: 600px;
  max-height: 1300px;
  width: 90%;
  max-width: 1700px;
  display: flex;

  @media screen and (max-width: 992px) {
    /* padding: 0 30px; */
    min-height: 600px;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  /* background: orange; */
`;

export const DetailSectionCol_1 = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 992px) {
    height: 20%;
    width: 100%;
  }

  /* background-color: pink; */
`;

export const DetailSectionCol_2 = styled.div`
  height: auto;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  /* background-color: skyblue; */
`;

export const DetailSectionSubtitle = styled.p`
  color: black;
  font-family: "Open Sans", sans-serif;
  font-size: 3rem;
  text-align: center;
  padding: 0;
  margin: 0;

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

export const DetailSectionImg = styled.img`
  object-fit: cover;
  height: auto;
  width: 100%;
  min-width: 300px;

  @media screen and (max-height: 800px) and (min-width: 992px) {
    height: auto;
    width: 70%;
  }
`;
