import styled from "styled-components";

export const ResultContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  /* background-color: green; */
`;
export const ResultInnerContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 900px;

  /* background-color: pink; */
`;

export const ResultRow = styled.div`
  height: 50vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
  margin-bottom: 10vh;

  /* background-color: orange; */
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
