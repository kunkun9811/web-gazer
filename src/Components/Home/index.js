import React, { useState, useEffect } from "react";
import { HomePage, TempText } from "./HomePageElement";
import NavBarV2 from "../NavBarV2";
import InfoSection from "../InfoSection";
import { topDataObj, aboutDataObj } from "../InfoSection/Data";
import TeamSection from "../TeamSection";
import { teamMemberObj } from "../TeamSection/TeamData";
import InsightSection from "../InsightSection";
import { demoObj, vizObj } from "../InsightSection/InsightData";

const Home = () => {
  return (
    <HomePage>
      <NavBarV2 />
      <InfoSection {...topDataObj} />
      <InfoSection {...aboutDataObj} />
      <InsightSection {...demoObj} />
      <TeamSection {...teamMemberObj} />
      {/* TODO: Removed data visualization for now */}
      {/* <InsightSection {...vizObj} /> */}
    </HomePage>
  );
};

export default Home;
