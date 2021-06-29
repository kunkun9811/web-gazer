import styled from "styled-components";

export const CustomButton = styled.button`
  width: 300px;
  height: 100px;
  border-radius: 50px;
  border: none;
  outline: none;
  background-color: ${({ selected }) => (selected ? "#e4f1fe" : "#22a7f0")};
  color: ${({ selected }) => (selected ? "white" : "black")};
  transition: ease-in-out 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  margin: 10px 20px 10px 20px;

  &:hover {
    transition: ease-in-out 0.2s;
    background-color: rgba(34, 167, 240, 1);
  }
`;
