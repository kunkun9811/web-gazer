import styled from "styled-components";
import { Link as LinkRedirect } from "react-router-dom";

export const FooterSectionMainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(31, 31, 31, 1);
`;

export const FooterSectionInnerContainer = styled.div`
  height: 15vh;
  min-height: 150px;
  width: 100vw;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  padding-top: 1%;

  /* background-color: blanchedalmond; */
`;

export const FooterSectionLineBox = styled.div`
  height: 10%;
  width: 80%;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  border-bottom: 1px solid white;

  /* background-color: blueviolet; */
`;

export const FooterSectionContentContainer = styled.div`
  height: 45%;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterSectionLeft = styled.div`
  height: 80%;
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 5px;

  /* background-color: pink; */
`;

export const FooterSectionRight = styled.div`
  height: 80%;
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 5px;

  /* background-color: teal; */
`;

export const FooterRightLogoWrapper = styled(LinkRedirect)`
  height: auto;
  width: auto;
`;

export const FooterRightLogo = styled.img`
  height: auto;
  width: 50px;
`;

export const FooterSectionLogoCotaniner = styled.div``;

export const FooterSectionLogoText = styled.p`
  font-family: sans-serif;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  margin: 0;
  padding: 0;
`;
