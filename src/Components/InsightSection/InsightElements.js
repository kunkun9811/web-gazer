import styled from "styled-components";

export const InsightSectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: teal; */
`;

export const InsightSectionInnerContainer = styled.div`
  height: 1350px;
  width: 100%;
  max-width: 1400px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: "col1 col2";
  /* TODO: Conditionalize col1 and col2 position */
  background-color: pink;
`;

export const Column1 = styled.div`
  /* flex: 1; */
  grid-area: col1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: burlywood;
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
  background-color: crimson;
`;

export const ImgWrapper = styled.div`
  height: 60%;
  width: 90%;
  border-radius: 50px;
  background-color: grey;
`;

export const DemoIntro = styled.p`
  color: white;
  font-size: 1.5rem;
`;

// TODO: This will use Link from react-xxx-dom
export const Button = styled.div`
  height: 100px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 80px;
  margin: 50px 0;
  font-size: 1.5rem;
  color: white;
  background-color: violet;
`;
