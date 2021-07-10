import styled from "styled-components";

export const TeamSectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  /* background-color: teal; */
`;

export const TeamSectionInnerContainer = styled.div`
  height: 950px;
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* background-color: pink; */

  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

export const TeamMember = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  /* background-color: blue; */

  @media screen and (max-width: 992px) {
    padding: 50px;
  }
`;

/* TODO: Need to change this to image */
export const TeamMemberImage = styled.div`
  height: 500px;
  width: 400px;
  border-radius: 50px;
  margin-bottom: 50px;
  background-color: grey;

  @media screen and (max-width: 992px) {
    height: 400px;
    width: 300px;
  }
`;

export const Name = styled.p`
  color: white;
  font-size: 2rem;

  @media screen and (max-width: 992px) {
    font-size: 1.5rem;
  }
`;

export const TeamMemberDesc = styled.p`
  color: white;
  font-size: 1.5rem;
  text-align: center;

  @media screen and (max-width: 992px) {
    font-size: 1.1rem;
  }
`;
