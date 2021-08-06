// TODO: Figure out why fast clicking causes a crash
import React, { useState, useEffect } from "react";
import Script from "react-load-script";
import "./WebGazeLoader.css";
import MainApp from "../Main/Main";
import Calibration from "../Calibration/Calibration";
import PageState from "../Utils/PageState";
import ClientDimensions from "../Utils/ClientDimensions";

/* TODO: DELETE THIS AFTER TESTING */
import { gaze_x, gaze_y, gaze_t } from "./TempData";
/* END TO BE DELETED */

/* Scripts */
import { EKDetector } from "../../scripts/EKDetector";
const ekd_detector = new EKDetector();

// instruct compiler that "webgazer" was already declared From WebGazer.js [consider using Typescript instead of Javascript?]
declare var webgazer;

/* TODO: */
// Development use
const url = "http://localhost:5000";
// Production use
// const url = "https://api.aankh.co";

export default function WebGazeLoader() {
  /* Client Dimensions */
  const { width: clientWidth, height: clientHeight } = ClientDimensions();

  /* state fields */
  const [curPageState, updateCurPageState] = useState(PageState.CALIBRATION); // for switching page content
  const [collectedData, updateCollectedData] = useState([]); // for collecting WebGazer.js data
  const [easyReadDocId, updateEasyReadDocId] = useState(undefined);
  const [hardReadDocId, updateHardReadDocId] = useState(undefined);
  // TODO: Need to get data from backend to calculate statistics
  const [easyReadData, updateEasyReadData] = useState(undefined);
  const [hardReadData, updateHardReadData] = useState(undefined);

  /** Methods **/
  /* For Calibration */
  // Using the current mouse position to calibrate webgazer
  const calibratePosition = (x, y) => {
    console.log("**********In calibratePosition**********");
    console.log(`x = ${x}, y=${y}`);

    webgazer.recordScreenPosition(x, y, "click");
  };

  const calibrationFinished = () => {
    console.log("*****In CalibrationFinished*****");
    updateCurPageState(PageState.READY);
    // disabling click listener to prevent inaccurate calibration in demo
    webgazer = webgazer.removeMouseEventListeners();
    // not allowing calibration coordaintes be part of the data
    updateCollectedData([]);
  };

  /* For webgazer */
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

    /* TODO: Uncomment this for production */
    webgazer.showPredictionPoints(false);
  };

  // callback for error loading WebGazer.js
  const handleScriptError = () => {
    console.log("error");
  };

  /* For data collection */
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
    console.log("*********collectedData*********");
    console.log(collectedData);

    // request url
    var request_url = "";
    if (type === "1") request_url = `${url}/casual_video`;
    else if (type === "2") request_url = `${url}/serious_video`;
    else if (type === "3") request_url = `${url}/reading`;
    else if (type === "4") request_url = `${url}/hard_reading`;

    console.log(`request_url = ${request_url}`);

    /* TODO: OFFICIAL - CHANGE TO THIS WHEN DONE TESTING PYTHON */
    const samples = {
      x: collectedData.map((entry) => entry.data.x),
      y: collectedData.map((entry) => entry.data.y),
      t: collectedData.map((entry) => entry.elapsedTime),
    };

    console.log("=======================================Samples=======================================");
    console.log(samples);

    /* TODO: TESTING - for converting to python */
    // const samples = {
    //   x: gaze_x,
    //   y: gaze_y,
    //   t: gaze_t,
    //   clientWidth: clientWidth,
    //   clientHeight: clientHeight,
    // };

    // calculate "fixations" and "saccades"
    const [fixations, saccades] = ekd_detector.detect(samples);

    // populate the corresponding variable
    if (type === "3") {
      updateEasyReadData({
        fixations: fixations,
        saccades: saccades,
      });
    } else if (type === "4") {
      updateHardReadData({
        fixations: fixations,
        saccades: saccades,
      });
    }

    console.log("*******************Fixations*******************");
    console.log(fixations);
    console.log("*******************Saccades*******************");
    console.log(saccades);

    // END TEST EKDetector-------------------------------------------------------------------------

    // send data to backend for processing
    await fetch(request_url, {
      method: "POST",
      body: JSON.stringify(collectedData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(`Successfully connected with {POST} endpoint => response:`);
        console.log(data);
        if (type === "3") {
          updateEasyReadDocId(data.newDocId);
          // TODO: Get the data to calculate mean and all that shit
          // updateEasyReadData(data.data);
          console.log("********************************Updated Easy Read ID + DATA********************************");
        } else if (type === "4") {
          updateHardReadDocId(data.newDocId);
          // updateHardReadData(data.data);
          console.log("********************************Updated Hard Read ID + DATA********************************");
        }
      });

    // clear sent data
    updateCollectedData([]);
  };

  const clearDataCollection = () => {
    console.log("*** In clearDataCollection ***");
    updateCollectedData([]);
  };

  /* Debug Use */
  // useEffect(() => {
  //   if (collectedData.length === 0) {
  //     console.log("*** CLEARED ***");
  //     console.log(collectedData);
  //   }
  // }, [collectedData]);

  // For reading easyReadData
  useEffect(() => {
    console.log("*********************easy read populated*********************");
    console.log(easyReadData);
  }, [easyReadData]);

  // For reading hardReadData
  useEffect(() => {
    console.log("*********************hard read populated*********************");
    console.log(hardReadData);
  }, [hardReadData]);
  /* END Debug use */

  return (
    <div class="web-gazer-container">
      {/* Load WebGazer.js */}
      <Script url="https://webgazer.cs.brown.edu/webgazer.js" onLoad={handleScriptLoad} onError={handleScriptError} />
      {/* Load page by PageState's condition */}
      {curPageState === PageState.CALIBRATION ? (
        <Calibration calibratePosition={calibratePosition} calibrationFinished={calibrationFinished} />
      ) : (
        // <MainApp processCollectedData={processCollectedData} clearDataCollection={clearDataCollection} easyReadDocId={easyReadDocId} hardReadDocId={hardReadDocId} />
        <MainApp processCollectedData={processCollectedData} clearDataCollection={clearDataCollection} easyReadData={easyReadData} hardReadData={hardReadData} />
      )}
    </div>
  );
}
