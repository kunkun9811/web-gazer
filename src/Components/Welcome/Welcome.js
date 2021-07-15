import React from "react";
import "./Welcome.css";
import Button from "../Button/Button";

export const Welcome = ({ onClickHandler }) => {
  return (
    <div className="welcome-container">
      <p className="welcome-text">Welcome to Aankh Eye Tracker</p>
      <Button id="welcome-btn" label="Start Calibrating" BtnId="welcome-btn" buttonOnClickHandler={onClickHandler} selectedBtn="welcome-btn" />
    </div>
  );
};

export default Welcome;
