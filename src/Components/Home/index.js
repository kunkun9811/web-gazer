import React, { useState, useEffect } from "react";
import { HomePage, TempText } from "./HomePageElement";
import NavBarV2 from "../NavBarV2";
import HeroSection from "../HeroSection";
import { heroDataObj } from "../HeroSection/HeroData";
import DetailSection from "../DetailSection";
import DemoSection from "../DemoSection";
import TeamSection from "../TeamSection";
import { teamMemberObj } from "../TeamSection/TeamData";
import FooterSection from "../FooterSection";

// TODO: Keep doing it, on DEMO section and remember to delete the deprecated ones (infosection)
const Home = () => {
  return (
    <HomePage>
      <NavBarV2 />
      <HeroSection {...heroDataObj} />
      <DetailSection />
      <DemoSection />
      <TeamSection {...teamMemberObj} />
      <FooterSection />
    </HomePage>
  );
};

export default Home;
