import React from "react";
import { InfoSectionContainer, InfoSectionInnerContainer, Title, Subtitle } from "./InfoSectionElements.js";

const InfoSection = ({ id, title, subtitle, paddingTop }) => {
  return (
    <>
      <InfoSectionContainer id={id} paddingTop={paddingTop}>
        <InfoSectionInnerContainer>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </InfoSectionInnerContainer>
      </InfoSectionContainer>
    </>
  );
};

export default InfoSection;
