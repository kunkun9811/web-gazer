import React from "react";

export const CircleComponent = ({ className, onMouseHover }) => {
  return <button className={className} onMouseEnter={onMouseHover}></button>;
};

export default CircleComponent;
