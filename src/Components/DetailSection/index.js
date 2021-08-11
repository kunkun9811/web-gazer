import React from "react";
import { DetailSectionContainer, DetailSectionInnerContainer, DetailSectionCol_1, DetailSectionCol_2, DetailSectionSubtitle, DetailSectionImg } from "./DetailSectionElements";
import coloredBrainImg from "../../asset/brain_2.png";

const subtitle = "We see and understand your emotional and cognitive states by analysing your facial and eye movements";

const DetailSection = () => {
  return (
    <DetailSectionContainer id="about">
      <DetailSectionInnerContainer>
        <DetailSectionCol_1>
          <DetailSectionSubtitle>{subtitle}</DetailSectionSubtitle>
        </DetailSectionCol_1>
        <DetailSectionCol_2>
          <DetailSectionImg src={coloredBrainImg} />
        </DetailSectionCol_2>
      </DetailSectionInnerContainer>
    </DetailSectionContainer>
  );
};

export default DetailSection;
