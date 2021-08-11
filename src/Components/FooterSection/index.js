import React from "react";
import {
  FooterSectionMainContainer,
  FooterSectionInnerContainer,
  FooterSectionLineBox,
  FooterSectionContentContainer,
  FooterSectionLeft,
  FooterSectionRight,
  FooterSectionLogoCotaniner,
  FooterSectionLogoText,
  FooterRightLogoWrapper,
  FooterRightLogo,
} from "./FooterSectionElements";
import linkedIn from "../../asset/linkedin.png";
import { animateScroll as scroll } from "react-scroll";

const linkedInUrl = "https://www.linkedin.com/company/aankh/";

const scrollToTop = () => {
  scroll.scrollToTop();
};

const FooterSection = () => {
  return (
    <FooterSectionMainContainer>
      <FooterSectionInnerContainer>
        <FooterSectionLineBox />
        <FooterSectionContentContainer>
          <FooterSectionLeft>
            <FooterSectionLogoCotaniner>
              <FooterSectionLogoText onClick={scrollToTop}>Aankh</FooterSectionLogoText>
            </FooterSectionLogoCotaniner>
          </FooterSectionLeft>
          <FooterSectionRight>
            <FooterRightLogoWrapper to={{ pathname: linkedInUrl }} target="_blank">
              <FooterRightLogo src={linkedIn} />
            </FooterRightLogoWrapper>
          </FooterSectionRight>
        </FooterSectionContentContainer>
      </FooterSectionInnerContainer>
    </FooterSectionMainContainer>
  );
};

export default FooterSection;
