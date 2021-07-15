import React, { useState } from "react";
import Button from "../Button/Button";
// import { CustomButton } from "../Button2/Button2.Style";
import YoutubeEmbed from "../YoutubeEmbed";
import Reading from "../Reading/Reading";
import NavBar from "../NavBar";

// css
import "./Main.css";

export default function MainApp({ processCollectedData, clearDataCollection }) {
  /* State Variables */
  const [selectedContent, updateSelectedContent] = useState("1");
  const [isStarted, updateIsStarted] = useState(false);

  /* Functions */
  // onClick Handler
  const onClickHandler = (BtnId) => {
    console.log(`current selectedContent = ${BtnId}`);
    updateSelectedContent(BtnId);
  };

  // toggle isStarted
  const toggleIsStarted = () => {
    updateIsStarted((prevState) => !prevState);
  };

  const doneStartButtonClickHandler = ({ selectedContent }) => {
    // if not started, it means it's about to start
    if (!isStarted) clearDataCollection();
    else processCollectedData({ selectedContent });
    toggleIsStarted();
  };

  return (
    <div class="main-container">
      <NavBar selectedContent={selectedContent} onClickHandler={onClickHandler} />
      {selectedContent === "1" ? <YoutubeEmbed embedId="JUF5cJCCp-8" /> : selectedContent === "2" ? <YoutubeEmbed embedId="QVKj3LADCnA" /> : <Reading onClickHandler={onClickHandler} />}
      {/* BtnId = selectedContent for deciding which database to populate in the backend */}
      {/* selectedBtn = "done" for not ever showing it as "selected" */}
      {/* TODO: modify the Button functionality */}
      <div className="main-btns-container">
        <Button label={isStarted ? "Done!" : "Start"} BtnId="start" doneStartButtonClickHandler={() => doneStartButtonClickHandler({ selectedContent })} selectedBtn={selectedContent} />
        {/* <Button
          label={isStarted ? "Started!" : "Start"}
          BtnId="start"
          onClickHandler={() => {
            clearDataCollection();
            toggleIsStarted();
          }}
          selectedBtn={selectedContent}
        />
        <Button label="Done!" BtnId="done" onClickHandler={() => processCollectedData({ selectedContent })} selectedBtn={selectedContent} /> */}
      </div>
    </div>
  );
}
