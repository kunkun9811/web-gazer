import React from "react";
import { InsightSectionContainer, InsightSectionInnerContainer, Column1, Column2, DemoIntro, Button, ImgWrapper } from "./InsightElements";

const InsightSection = ({ id, page, title, button_label, imgPos }) => {
  return (
    <>
      <InsightSectionContainer id={id}>
        <InsightSectionInnerContainer imgPos={imgPos}>
          {/* TODO: Column1 is going to be images */}
          <Column1>
            <ImgWrapper></ImgWrapper>
          </Column1>
          <Column2>
            <DemoIntro>{title}</DemoIntro>
            <Button to={`${id}`}>{button_label}</Button>
          </Column2>
        </InsightSectionInnerContainer>
      </InsightSectionContainer>
    </>
  );
};

export default InsightSection;
