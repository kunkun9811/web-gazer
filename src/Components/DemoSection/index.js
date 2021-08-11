import React from "react";
import { DemoSectionContainer, DemoSectionInnerContainer, DemoSectionCol_1, DemoSectionCol_2, DemoSectionDescription, DemoSectionImg, DemoSectionButton } from "./DemoSectionElements";
import demoImg from "../../asset/demo_pic_small.png";

/* data */
const description = "Try out our demo right now to see how our technology works";
const id = "demo";

const DemoSection = () => {
  return (
    <DemoSectionContainer id="demo">
      <DemoSectionInnerContainer>
        <DemoSectionCol_1>
          <DemoSectionImg src={demoImg} />
        </DemoSectionCol_1>
        <DemoSectionCol_2>
          <DemoSectionDescription>{description}</DemoSectionDescription>
          <DemoSectionButton to={`${id}`}>Demo</DemoSectionButton>
        </DemoSectionCol_2>
      </DemoSectionInnerContainer>
    </DemoSectionContainer>
  );
};

export default DemoSection;
