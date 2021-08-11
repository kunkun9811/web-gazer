import React from "react";
import { HeroSectionContainer, HeroSectionInnerContainer, HeroSectionLeftColumn, HeroSectionRightColumn, HeroSectionTitle, HeroSectionSubtitle } from "./HeroSectionElements";

const HeroSection = ({ id, type, title, subtitle, paddingTop, backgroundImg }) => {
  return (
    <>
      <HeroSectionContainer id={id} paddingTop={paddingTop} backgroundImg={backgroundImg}>
        <HeroSectionInnerContainer type={type}>
          {/* <HeroSectionLeftColumn></HeroSectionLeftColumn> */}
          <HeroSectionRightColumn>
            <HeroSectionTitle type={type}>{title}</HeroSectionTitle>
            <HeroSectionSubtitle type={type}>{subtitle}</HeroSectionSubtitle>
          </HeroSectionRightColumn>
        </HeroSectionInnerContainer>
      </HeroSectionContainer>
    </>
  );
};

export default HeroSection;
