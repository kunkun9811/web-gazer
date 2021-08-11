import React from "react";
import "./Welcome.css";
import Button from "../Button/Button";
import BrowserDimensions from "../Utils/BrowserDimensions";

export const Welcome = ({ onClickHandler }) => {
  /* check if user's screen was bigger than 1214px (magic number, but meaning BIG SCREEN */
  const { width: browserWidth, height: browserHeight } = BrowserDimensions();

  if (browserHeight > 790 && browserWidth > 1214) {
    return (
      <div className="welcome-container">
        <p className="welcome-text">Welcome to Aankh Eye Tracker</p>
        <Button id="welcome-btn" label="Start Calibrating" BtnId="welcome-btn" buttonOnClickHandler={onClickHandler} selectedBtn="welcome-btn" />
      </div>
    );
  } else {
    return (
      <div className="welcome-container">
        <p>Please use a device with larger Screen or make your browser window bigger. Thank you :)</p>
      </div>
    );
  }
};

export default Welcome;
