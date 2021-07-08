import styled from "styled-components";

export const TeamSectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: teal; */
`;

export const TeamSectionInnerContainer = styled.div`
  height: 1300px;
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* background-color: pink; */
`;

export const TeamMember = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: blue; */
`;

/* TODO: Need to change this to image */
export const TeamMemberImage = styled.div`
  height: 500px;
  width: 400px;
  border-radius: 50px;
  margin-bottom: 50px;
  background-color: grey;
`;

export const Name = styled.p`
  color: white;
  font-size: 2rem;
`;

export const TeamMemberDesc = styled.p`
  color: white;
  font-size: 1.5rem;
`;
