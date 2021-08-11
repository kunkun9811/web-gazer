import React from "react";
import { InsightSectionContainer, InsightSectionInnerContainer, Column1, Column2, DemoIntro, Button, InsightImg } from "./InsightElements";
import coloredBrainImg from "../../asset/brain_2.png";

const InsightSection = ({ id, page, title, button_label, imgPos }) => {
  return (
    <>
      <InsightSectionContainer id={id}>
        <InsightSectionInnerContainer imgPos={imgPos}>
          {/* Column1 is going to be images */}
          <Column1>
            <InsightImg src={coloredBrainImg} />
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
