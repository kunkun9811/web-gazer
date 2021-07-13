import styled from "styled-components";
import { CircleComponent } from "./CircleComponent";

export const Circle = styled(CircleComponent)`
  border-radius: 80px;
  border: 2px solid black;

  /* background-color changes with "clickCount" */
  ${({ clickCount }) => {
    switch (clickCount) {
      case 0:
        return "background-color: #5c97bf;";
      case 1:
        return "background-color: #6bb9f0;";
      case 2:
        return "background-color: #81cfe0;";
      case 3:
        return "background-color: #89c4f4;";
      case 4:
        return "background-color: #c5eff7;";
      default:
        return "background-color: yellow;";
    }
  }}

  width: 30px;
  height: 30px;
  position: absolute;
  transition: 0.2s linear;

  /* Custom positions */
  ${({ top }) => (top !== undefined ? `top: ${top}px;` : "")}
  ${({ right }) => (right !== undefined ? `right: ${right}px;` : "")}
  ${({ bottom }) => (bottom !== undefined ? `bottom: ${bottom}px;` : "")}
  ${({ left }) => (left !== undefined ? `left: ${left}px;` : "")}
`;
