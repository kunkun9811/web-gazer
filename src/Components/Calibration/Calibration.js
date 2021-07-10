import React, { useState, useEffect } from "react";
import "./Calibration.css";
import { Circle } from "../Utils/CircleElement";

// TODO: Might need to turn off clickListener after calibration - understand what clickListener do in WebGazer.js
export const Calibration = ({ checkIfPointsFinished }) => {
  /* states */
  // keeps track of the click count of each calibration point
  const [calibPointsClickCnt, updateCalibPointsClickCnt] = useState({
    topLeft: 0,
    topMid: 0,
    topRight: 0,
    rightMid: 0,
    bottomRight: 0,
    bottomMid: 0,
    bottomLeft: 0,
    leftMid: 0,
  });
  const [hideCalibPreText, updateHideCalibPreText] = useState(false);
  const [showCalibText, updateShowCalibText] = useState(false);

  /* useEffect listeners */
  // listen to changes of click counts of each calibration points
  useEffect(() => {
    checkIfPointsFinished(calibPointsClickCnt);
  }, [calibPointsClickCnt]);

  /* methods */
  // on click handler for calibration points
  const calibPointsOnClick = (clickedBtn) => {
    var newCount = calibPointsClickCnt[clickedBtn] + 1;
    updateCalibPointsClickCnt((prevCounts) => {
      return {
        ...prevCounts,
        [clickedBtn]: newCount,
      };
    });
  };

  // for animating the first instruction
  setTimeout(() => {
    updateHideCalibPreText(true);
  }, 5000);

  // for animating the second instruction
  setTimeout(() => {
    updateShowCalibText(true);
  }, 6000);

  return (
    <div className="calibration-container">
      <p className="calibration-text">Calibration</p>
      <p className={`calibration-subtitle-pre ${hideCalibPreText ? `calibration-subtitle-pre-hide` : ""}`}>
        Please wait until the tracking red dot and the blue calibration points to appear, thank you :)
      </p>
      <p className={`${showCalibText ? "calibration-subtitle" : "calibration-subtitle-initial"}`}>
        To achieve the best accuracy, please keep your eyes on your cursor and click each blue points until it becomes yellow!
      </p>

      <div className="calibration-circles">
        <Circle top="80" left="80" clickCount={calibPointsClickCnt.topLeft} onCircleClicked={() => calibPointsOnClick("topLeft")} />
        {/* <Circle top="80" left="1380" clickCount={calibPointsClickCnt.topMid} onCircleClicked={() => calibPointsOnClick("topMid")} />
        <Circle top="80" right="80" clickCount={calibPointsClickCnt.topRight} onCircleClicked={() => calibPointsOnClick("topRight")} />
        <Circle top="740" right="80" clickCount={calibPointsClickCnt.rightMid} onCircleClicked={() => calibPointsOnClick("rightMid")} />
        <Circle bottom="80" right="80" clickCount={calibPointsClickCnt.bottomRight} onCircleClicked={() => calibPointsOnClick("bottomRight")} />
        <Circle bottom="80" left="1380" clickCount={calibPointsClickCnt.bottomMid} onCircleClicked={() => calibPointsOnClick("bottomMid")} />
        <Circle bottom="80" left="80" clickCount={calibPointsClickCnt.bottomLeft} onCircleClicked={() => calibPointsOnClick("bottomLeft")} />
        <Circle bottom="740" left="80" clickCount={calibPointsClickCnt.leftMid} onCircleClicked={() => calibPointsOnClick("leftMid")} /> */}
      </div>
    </div>
  );
};

export default Calibration;
