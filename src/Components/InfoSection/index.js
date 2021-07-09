import React from "react";
import { InfoSectionContainer, InfoSectionInnerContainer, Title, Subtitle } from "./InfoSectionElements.js";

const InfoSection = ({ id, title, subtitle }) => {
  return (
    <>
      <InfoSectionContainer id={id}>
        <InfoSectionInnerContainer>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </InfoSectionInnerContainer>
      </InfoSectionContainer>
    </>
  );
};

export default InfoSection;
