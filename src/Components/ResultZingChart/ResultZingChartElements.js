import styled from "styled-components";

export const ResultContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ResultInnerContainer = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  min-width: 900px;
`;
export const ResultColumn1 = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* background-color: pink; */
`;

export const ResultColumn2 = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  /* background-color: teal; */
`;

export const ResultChartWrapper = styled.div`
  height: 40%;
  width: 80%;
  min-height: 400px;
  min-width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;

  /* background-color: purple; */
`;
