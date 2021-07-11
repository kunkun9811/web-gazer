import styled from "styled-components";

export const InfoSectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding-top: ${({ paddingTop }) => (paddingTop !== "undefined" ? `${paddingTop}px` : `none`)}; */
  padding-top: ${({ paddingTop }) => `none`};

  /* background-color: teal; */
`;

export const InfoSectionInnerContainer = styled.div`
  height: 950px;
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
  /* background: pink; */

  /* @media screen and (max-width: 992px) {
    padding: 0 50px;
  } */
`;

export const Title = styled.p`
  color: white;
  font-size: 3rem;
  text-align: center;
  padding: 0;
  margin: 0;
  /* background: purple; */
`;

export const Subtitle = styled.p`
  color: white;
  font-size: 1.5rem;
  text-align: center;
  padding: 0;
  margin: 0;
  /* background: purple; */
`;
