import React from "react";

export const CircleComponent = ({ className, onCircleClicked }) => {
  return <button className={className} onClick={onCircleClicked}></button>;
};

export default CircleComponent;
