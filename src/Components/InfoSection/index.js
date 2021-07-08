import React from "react";
import { InfoSectionContainer, InfoSectionInnerContainer, Title, Subtitle } from "./InfoSectionElements.js";

const InfoSection = ({ title, subtitle }) => {
  return (
    <>
      <InfoSectionContainer>
        <InfoSectionInnerContainer>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </InfoSectionInnerContainer>
      </InfoSectionContainer>
    </>
  );
};

export default InfoSection;
