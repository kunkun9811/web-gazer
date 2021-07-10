import React, { useState } from "react";
import "./Reading.css";
import { easyRead, hardRead } from "./ReadingData";

export const Reading = () => {
  // true = easy, false = hard
  const [readingLvl, setReadingLvl] = useState(true);

  const changeReadingLvl = () => {
    setReadingLvl((prevState) => !prevState);
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
