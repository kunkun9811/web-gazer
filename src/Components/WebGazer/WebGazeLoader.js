import React, { useState, useEffect } from "react";
import Script from "react-load-script";
import "./WebGazeLoader.css";
import { WebGazeContext } from "./WebGazeContext";
import MainApp from "../Main/Main";
import Calibration from "../Calibration/Calibration";
import PageState from "../Utils/PageState";

// instruct compiler that "webgazer" was already declared From WebGazer.js [consider using Typescript instead of Javascript?]
declare var webgazer;

/* TODO: */
// Development use
// const url = "http://localhost:5000";
// Production use
const url = "https://api.aankh.co";

export default function WebGazeLoader() {
  /* state fields */
  const [curPageState, updateCurPageState] = useState(PageState.CALIBRATION); // for switching page content
  const [collectedData, updateCollectedData] = useState([]); // for collecting WebGazer.js data

  /* Methods */

  const calibrationFinished = () => {
    /* Production */
    // if (finishedCalibPoints.length === 8) updateCurPageState(PageState.READY);
    /* Development */
    console.log("*****In CalibrationFinished*****");
    updateCurPageState(PageState.READY);
    // disabling click listener to prevent inaccurate calibration in demo
    webgazer = webgazer.removeMouseEventListeners();
    // not allowing calibration coordaintes be part of the data
    updateCollectedData([]); // resetting it here because not sure why curPageState doesn't get updated in "setGazeListener"
  };

  // Using the current mouse position to calibrate webgazer
  const calibratePosition = (x, y) => {
    console.log("**********In calibratePosition**********");
    console.log(`x = ${x}, y=${y}`);

    webgazer.recordScreenPosition(x, y, "click");
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
    console.log("REMOVING!");
    webgazer.showFaceOverlay(false);
    webgazer.showVideoPreview(false);
    webgazer.saveDataAcrossSessions(false);
  };

  // callback for error loading WebGazer.js
  const handleScriptError = () => {
    console.log("error");
  };

  // send raw WebGazer.js data to the backend for processing
  // NOTE:
  // dataType = 1 => casual_video
  //          = 2 => serious_video
  //          = 3 => easy reading
  //          = 4 => hard reading
  const processCollectedData = async (type) => {
    // log info
    console.log("Sending data to backend...");
    console.log("Processing data to backend...");
    console.log(`collectedData size = ${collectedData.length}`);
    console.log(collectedData);

    console.log(typeof type.selectedContent);

    // request url
    const dataType = type.selectedContent;

    console.log(`datatype`);

    var request_url = "";
    if (dataType === "1") request_url = `${url}/casual_video`;
    else if (dataType === "2") request_url = `${url}/serious_video`;
    else if (dataType === "3") request_url = `${url}/reading`;
    else if (dataType === "4") request_url = `${url}/hard_reading`;

    console.log(`request_url = ${request_url}`);

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
      {curPageState === PageState.CALIBRATION ? (
        <Calibration calibratePosition={calibratePosition} calibrationFinished={calibrationFinished} />
      ) : (
        <MainApp processCollectedData={processCollectedData} />
      )}
    </div>
  );
}
