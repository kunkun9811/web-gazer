import React from "react";
import { InsightSectionContainer, InsightSectionInnerContainer, Column1, Column2, DemoIntro, Button, ImgWrapper } from "./InsightElements";

const InsightSection = ({ title, button_label }) => {
  return (
    <>
      <InsightSectionContainer>
        <InsightSectionInnerContainer>
          {/* TODO: Column1 is going to be images */}
          <Column1>
            <ImgWrapper></ImgWrapper>
          </Column1>
          <Column2>
            <DemoIntro>{title}</DemoIntro>
            <Button>{button_label}</Button>
          </Column2>
        </InsightSectionInnerContainer>
      </InsightSectionContainer>
    </>
  );
};

export default InsightSection;
