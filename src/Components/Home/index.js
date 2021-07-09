import React from "react";
import { HomePage, TempText } from "./HomePageElement";
import NavBarV2 from "../NavBarV2";
import InfoSection from "../InfoSection";
import { topDataObj, aboutDataObj } from "../InfoSection/Data";
import TeamSection from "../TeamSection";
import { teamMemberObj } from "../TeamSection/TeamData";
import InsightSection from "../InsightSection";
import { demoObj, vizObj } from "../InsightSection/InsightData";

const Home = () => {
  console.log("TOP OBJECT");
  console.log(topDataObj);

  return (
    <HomePage>
      <NavBarV2 />
      <InfoSection {...topDataObj} />
      <InfoSection {...aboutDataObj} />
      <TeamSection {...teamMemberObj} />
      <InsightSection {...demoObj} />
      <InsightSection {...vizObj} />
    </HomePage>
  );
};

export default Home;
