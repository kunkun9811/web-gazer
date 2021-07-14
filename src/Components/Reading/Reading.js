import React, { useState } from "react";
import "./Reading.css";
import { easyRead, hardRead } from "./ReadingData";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

export const Reading = ({ onClickHandler }) => {
  // true = easy, false = hard
  const [readingLvl, setReadingLvl] = useState(true);
  const [alignment, setAlignment] = React.useState("easy");

  const handleAlignment = (event, newAlignment) => {
    console.log(`newAlignment = ${newAlignment}`);
    if (newAlignment !== null) {
      setAlignment(newAlignment);
      changeReadingLvl();
    }
  };

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
