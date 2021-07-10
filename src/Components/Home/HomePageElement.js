import styled from "styled-components";

export const HomePage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 992px) {
    padding: 0 100px;
  }
`;

export const TempText = styled.p`
  width: 30%;
  color: white;
  font-size: 1.5rem;
`;
