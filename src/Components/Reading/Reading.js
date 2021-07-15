import React, { useState } from "react";
import "./Reading.css";
import { easyRead, hardRead } from "./ReadingData";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { ToggleButton } from "@material-ui/lab";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
// import Switch from "@material-ui/core/Switch";

export const Reading = ({ onClickHandler }) => {
  // true = easy, false = hard
  const [readingLvl, setReadingLvl] = useState(true);
  const [alignment, setAlignment] = React.useState("easy");
  const [switchState, setSwitchState] = useState(false); // false = easy, true = hard

  const handleAlignment = (event, newAlignment) => {
    console.log(`newAlignment = ${newAlignment}`);
    if (newAlignment !== null) {
      setAlignment(newAlignment);
      changeReadingLvl();
    }
  };

  // const handleSwitch = (event) => {
  //   const currentState = setSwitchState({ [event.target.name]: event.target.checked });
  // };

  const changeReadingLvl = () => {
    setReadingLvl((prevState) => {
      // NOTE: prevState === true means it is currently "easy" and going to change to "hard". So BtnId shud be 4
      if (prevState) onClickHandler("4");
      else onClickHandler("3");
      return !prevState;
    });
  };

  return (
    <div className="reading-container">
      {/* <button className={`reading-toggle ${readingLvl ? "" : "hard-btn"}`} onClick={changeReadingLvl}>
        {readingLvl ? "Change to Hard" : "Change to Easy"}
      </button> */}
      <ToggleButtonGroup value={alignment} exclusive onChange={handleAlignment} aria-label="text alignment" className="toggle-btns-group">
        <ToggleButton value="easy" aria-label="left aligned">
          Easy
        </ToggleButton>
        <ToggleButton value="hard" aria-label="centered">
          Hard
        </ToggleButton>
      </ToggleButtonGroup>
      <div className="reading-inner-container">
        <h1>{readingLvl === true ? "Easy" : "Hard"}</h1>
        <p className="reading-text-easy">{readingLvl === true ? easyRead : hardRead}</p>
      </div>
    </div>
  );
};

export default Reading;
