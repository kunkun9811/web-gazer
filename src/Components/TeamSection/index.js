import React from "react";
import { TeamSectionContainer, TeamSectionInnerContainer, TeamMember, TeamMemberImage, Name, TeamMemberDesc } from "./TeamSectionElements";

const TeamSection = ({ id, img1, img2, name1, name2, desc1, desc2 }) => {
  return (
    <>
      <TeamSectionContainer id={id}>
        <TeamSectionInnerContainer>
          <TeamMember>
            <TeamMemberImage src={img1} />
            <Name>{name1}</Name>
            <TeamMemberDesc>{desc1}</TeamMemberDesc>
          </TeamMember>
          <TeamMember>
            <TeamMemberImage src={img2} />
            <Name>{name2}</Name>
            <TeamMemberDesc>{desc2}</TeamMemberDesc>
          </TeamMember>
        </TeamSectionInnerContainer>
      </TeamSectionContainer>
    </>
  );
};

export default TeamSection;
