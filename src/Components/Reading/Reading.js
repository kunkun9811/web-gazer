import React, { useState } from "react";
import "./Reading.css";
import { easyRead, hardRead } from "./ReadingData";

export const Reading = ({ onClickHandler }) => {
  // true = easy, false = hard
  const [readingLvl, setReadingLvl] = useState(true);

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
      <button className={`reading-toggle ${readingLvl ? "" : "hard-btn"}`} onClick={changeReadingLvl}>
        {readingLvl ? "Easy" : "Hard"}
      </button>
      <div className="reading-inner-container">
        <p className="reading-text-easy">{readingLvl === true ? easyRead : hardRead}</p>
      </div>
    </div>
  );
};

export default Reading;
