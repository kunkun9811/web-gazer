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
  /* height: 1000px; */
  height: 100vh;
  min-height: 900px;
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* background-color: pink; */

  @media screen and (max-width: 992px) {
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

export const TeamMember = styled.div`
  /* flex: 1; */
  /* height: 20%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding: 50px; */
  /* background-color: blue; */

  @media screen and (max-width: 992px) {
    /* padding: 50px; */
    /* height: 20%; */
    /* margin-bottom: 50px; */
  }
`;

/* TODO: Need to change this to image */
export const TeamMemberImage = styled.img`
  height: auto;
  width: 100%;

  border-radius: 50%;
  margin-bottom: 50px;
  /* background-color: grey; */

  @media screen and (max-width: 992px) {
    height: auto;
    width: 40%;
    min-width: 500px;
    margin-bottom: 0px;
  }
`;

export const Name = styled.p`
  color: black;
  font-size: 2rem;

  @media screen and (max-width: 992px) {
    font-size: 1.5rem;
  }
`;

export const TeamMemberDesc = styled.p`
  color: black;
  font-size: 1.5rem;
  text-align: center;

  @media screen and (max-width: 992px) {
    font-size: 1.1rem;
  }
`;
