import React from "react";
import { InfoSectionContainer, InfoSectionInnerContainer, Title, Subtitle } from "./InfoSectionElements.js";

const InfoSection = ({ id, type, title, subtitle, paddingTop, backgroundImg }) => {
  // const InfoSection = ({ id, title, subtitle, paddingTop }) => {
  return (
    <>
      <InfoSectionContainer id={id} paddingTop={paddingTop} backgroundImg={backgroundImg}>
        <InfoSectionInnerContainer type={type}>
          <Title type={type}>{title}</Title>
          <Subtitle type={type}>{subtitle}</Subtitle>
        </InfoSectionInnerContainer>
      </InfoSectionContainer>
    </>
  );
};

export default InfoSection;
