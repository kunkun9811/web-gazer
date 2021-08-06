import React, { useState } from "react";
import Button from "../Button/Button";
// import { CustomButton } from "../Button2/Button2.Style";
import YoutubeEmbed from "../YoutubeEmbed";
import Reading from "../Reading/Reading";
import NavBar from "../NavBar";
// import Result from "../Result";
import ResultZingChart from "../ResultCharts";

/* TODO: make this work */
// import Emotion from "../../scripts/emotion/emotion";

// css
import "./Main.css";

export default function MainApp({ processCollectedData, clearDataCollection, easyReadData, hardReadData }) {
  /* State Variables */
  // NOTE: Contains all content starting from 1
  // const [selectedContent, updateSelectedContent] = useState("1");
  const [selectedContent, updateSelectedContent] = useState("3");
  const [isStarted, updateIsStarted] = useState(false);

  // TODO: state for starting emotion detection
  const [emotionDetectIsReady, updateEmotionDetectIsReady] = useState(false);

  /* Functions */
  // onClick Handler
  const onNavChangeHandler = (BtnId) => {
    console.log(`current selectedContent = ${BtnId}`);
    updateSelectedContent(BtnId);
  };

  // toggle isStarted
  const toggleIsStarted = () => {
    updateIsStarted((prevState) => !prevState);
  };

  // toggle emotionDetectIsReady
  const toggleEmotionDetectIsReady = () => {
    updateEmotionDetectIsReady((prevState) => !prevState);
  };

  // start or button click handler
  const doneStartButtonClickHandler = () => {
    // if not started, it means it's about to start
    if (!isStarted) clearDataCollection();
    else processCollectedData(selectedContent);
    toggleIsStarted();
    toggleEmotionDetectIsReady();

    console.log(`emotionDetectIsReady = ${emotionDetectIsReady}`);
  };

  return (
    <div class="main-container">
      <NavBar selectedContent={selectedContent} onNavChangeHandler={onNavChangeHandler} />
      {/* All three contents */}
      {/* {selectedContent === "1" ? <YoutubeEmbed embedId="JUF5cJCCp-8" /> : selectedContent === "2" ? <YoutubeEmbed embedId="QVKj3LADCnA" /> : <Reading onClickHandler={onClickHandler} />} */}
      {/* {selectedContent === "5" ? <Result easyReadDocId={easyReadDocId} hardReadDocId={hardReadDocId} /> : <Reading onClickHandler={onClickHandler} />} */}
      {selectedContent === "5" ? <ResultZingChart easyReadData={easyReadData} hardReadData={hardReadData} /> : <Reading onClickHandler={onNavChangeHandler} />}
      {/* BtnId = selectedContent for deciding which database to populate in the backend */}
      {/* selectedBtn = "done" for not ever showing it as "selected" */}
      {selectedContent !== "5" ? (
        <div className="main-btns-container">
          <Button label={isStarted ? "Done!" : "Start"} BtnId="start" buttonOnClickHandler={() => doneStartButtonClickHandler()} selectedBtn={selectedContent} />
        </div>
      ) : null}
    </div>
  );
}
