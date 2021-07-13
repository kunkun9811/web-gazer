import React from "react";

export const CircleComponent = ({ className, onCircleClicked, onMouseHover }) => {
  return <button className={className} onClick={onCircleClicked} onMouseEnter={onMouseHover}></button>;
};

export default CircleComponent;
