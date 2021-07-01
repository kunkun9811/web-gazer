import React, { useState, useEffect } from "react";
import Script from "react-load-script";
import "./WebGazeLoader.css";
import { WebGazeContext } from "./WebGazeContext";
import MainApp from "../Main/Main";
import Calibration from "../Calibration/Calibration";
import PageState from "../Utils/PageState";

// instruct compiler that "webgazer" was already declared From WebGazer.js [consider using Typescript instead of Javascript?]
declare var webgazer;

// const urlGet = "http://localhost:5000/";
const urlProcess = "http://localhost:5000/process";

export default function WebGazeLoader() {
  /* state fields */
  const [curPageState, updateCurPageState] = useState(PageState.CALIBRATION); // for switching page content
  const [finishedCalibPoints, updateFinishedCalibPoints] = useState([]); // for checking how many calibration points have finished
  const [collectedData, updateCollectedData] = useState([]); // for collecting WebGazer.js data

  /* Methods */
  // push finished points into "finishedCalibPoints" array
  const checkIfPointsFinished = (clickedCounts) => {
    for (let point in clickedCounts) {
      // 0 is the first click
      if (clickedCounts[point] === 4) updateFinishedCalibPoints((prevFinishedCalibPoints) => [...prevFinishedCalibPoints, point]);
    }

    // console.log("----------------------------------------Clicked Counts--------------------------------------");
    // console.log(clickedCounts);

    checkAllPointsClicked();
  };

  // check if all 8 calibration points have been clicked
  const checkAllPointsClicked = () => {
    // console.log("----------------------------------------Finished Counts--------------------------------------");
    // console.log(finishedCalibPoints);
    // console.log(finishedCalibPoints.length);
    /* Production */
    // if (finishedCalibPoints.length === 8) updateCurPageState(PageState.READY);
    /* Development */
    if (finishedCalibPoints.length === 1) updateCurPageState(PageState.READY);
    // console.log(`-----------------------------After update cheack, finishedCalibPoints = ${curPageState}`);
  };

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

  const handleScriptError = () => {
    console.log("error");
  };

  const processSessionData = async () => {
    console.log("-----------------useState method-------------------");

    console.log(collectedData);

    console.log("---------------------------------------------------");
    console.log("Sending data to backend...");
    console.log("Processing data to backend...");
    console.log(`collectedData size = ${collectedData.length}`);
    // check what data looks like
    console.log(collectedData);
    // (TESTING) send to backend [GET]
    // await fetch(urlGet).then((response) => console.log(response));
    // send data to backend for processing
    await fetch(urlProcess, {
      method: "POST",
      body: JSON.stringify(collectedData),
    }).then((response) => {
      console.log(`Successfully connected with {POST} endpoint => response:`);
      console.log(response.body);
    });
    // remove sent data
    updateCollectedData([]);
    console.log(`collectedData size = ${collectedData.length}`);
  };

  // setInterval(processSessionData, 10000);

  return (
    <div class="web-gazer-container">
      <Script url="https://webgazer.cs.brown.edu/webgazer.js" onLoad={handleScriptLoad} onError={handleScriptError} />
      {curPageState === PageState.CALIBRATION ? <Calibration checkIfPointsFinished={checkIfPointsFinished} /> : <MainApp processSessionData={processSessionData} />}
      {/* <MainApp /> */}
    </div>
  );
}
