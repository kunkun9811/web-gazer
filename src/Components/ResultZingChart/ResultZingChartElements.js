import styled from "styled-components";

export const ResultContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-top: 300px; */

  background-color: green;
`;
export const ResultInnerContainer = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  min-width: 900px;

  background-color: pink;
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

export const ResultRow = styled.div`
  height: 50vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-top: 200px; */

  background-color: orange;
`;

// export const ResultRowChart1 = styled.div`
//   height: 100%;
//   width: 50%;
//   padding: 0
// `

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
