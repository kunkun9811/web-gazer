import React, { useState, useEffect } from "react";
import Script from "react-load-script";
import "./WebGazeLoader.css";
import { WebGazeContext } from "./WebGazeContext";
import MainApp from "../Main/Main";
import Calibration from "../Calibration/Calibration";
import PageState from "../Utils/PageState";

// instruct compiler that "webgazer" was already declared From WebGazer.js [consider using Typescript instead of Javascript?]
declare var webgazer;

const url = "http://localhost:5000";

export default function WebGazeLoader() {
  /* state fields */
  const [curPageState, updateCurPageState] = useState(PageState.CALIBRATION); // for switching page content
  const [finishedCalibPoints, updateFinishedCalibPoints] = useState([]); // for checking how many calibration points have finished
  const [collectedData, updateCollectedData] = useState([]); // for collecting WebGazer.js data

  /* Methods */
  // push finished calibration points into "finishedCalibPoints" array
  const checkIfPointsFinished = (clickedCounts) => {
    for (let point in clickedCounts) {
      // 0 is the first click
      if (clickedCounts[point] === 4) updateFinishedCalibPoints((prevFinishedCalibPoints) => [...prevFinishedCalibPoints, point]);
    }
    checkAllPointsClicked();
  };

  // check if all 8 calibration points have been clicked 5 times
  const checkAllPointsClicked = () => {
    /* Production */
    // if (finishedCalibPoints.length === 8) updateCurPageState(PageState.READY);
    /* Development */
    if (finishedCalibPoints.length === 1) {
      updateCurPageState(PageState.READY);
      // not allowing calibration coordaintes be part of the data
      updateCollectedData([]); // resetting it here because not sure why curPageState doesn't get updated in "setGazeListener"
    }
  };

  // callback for when WebGazer.js is loaded
  const handleScriptLoad = () => {
    webgazer
      .setGazeListener((data, elapsedTime) => {
        if (data == null) {
          return;
        }

        updateCollectedData((prevEntries) => [
          ...prevEntries,
          {
            data: data.all[0],
            elapsedTime: elapsedTime,
          },
        ]);
      })
      .begin();

    console.log(webgazer);
    webgazer.showFaceOverlay(false).showVideoPreview(false);
  };

  // callback for error loading WebGazer.js
  const handleScriptError = () => {
    console.log("error");
  };

  // send raw WebGazer.js data to the backend for processing
  // NOTE:
  // dataType = 1 => casual_video
  //          = 2 => serious_video
  //          = 3 => reading
  const processCollectedData = async (type) => {
    // log info
    console.log("Sending data to backend...");
    console.log("Processing data to backend...");
    console.log(`collectedData size = ${collectedData.length}`);
    console.log(collectedData);

    // request url
    console.log(`--------------------------------------------type = ${type}-------------------------------------------------------`);
    console.log(type.selectedContent);

    const dataType = type.selectedContent;
    var request_url = "";
    if (dataType === "1") request_url = `${url}/casual_video`;
    else if (dataType === "2") request_url = `${url}/serious_video`;
    else if (dataType === "3") request_url = `${url}/reading`;

    console.log(`--------------------------------request url = ${request_url} --------------------------------------`);

    // send data to backend for processing
    await fetch(request_url, {
      method: "POST",
      body: JSON.stringify(collectedData),
    }).then((response) => {
      console.log(`Successfully connected with {POST} endpoint => response:`);
      console.log(response.body);
    });

    // clear sent data
    updateCollectedData([]);
  };

  return (
    <div class="web-gazer-container">
      {/* Load WebGazer.js */}
      <Script url="https://webgazer.cs.brown.edu/webgazer.js" onLoad={handleScriptLoad} onError={handleScriptError} />
      {/* Load page by PageState's condition */}
      {curPageState === PageState.CALIBRATION ? <Calibration checkIfPointsFinished={checkIfPointsFinished} /> : <MainApp processCollectedData={processCollectedData} />}
    </div>
  );
}
