import React, { useState } from "react";
import "./Calibration.css";
import { Circle } from "../Utils/CircleElement";

export const Calibration = ({ checkIfPointsFinished }) => {
  /* states */
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

    console.log(`------------------------------------clickedBtn = ${clickedBtn}`);

    checkIfPointsFinished(calibPointsClickCnt);
  };

  return (
    <div className="calibration-container">
      <p className="calibration-text">Calibration</p>
      <p className="calibration-text" id="calibration-subtitle">
        To achieve the best accuracy, please keep your eyes on the moving red dot and click each blue points until it becomes yellow!
      </p>
      <Circle top="80" left="80" clickCount={calibPointsClickCnt.topLeft} onCircleClicked={() => calibPointsOnClick("topLeft")} />
      <Circle top="80" left="1380" clickCount={calibPointsClickCnt.topMid} onCircleClicked={() => calibPointsOnClick("topMid")} />
      <Circle top="80" right="80" clickCount={calibPointsClickCnt.topRight} onCircleClicked={() => calibPointsOnClick("topRight")} />
      <Circle top="740" right="80" clickCount={calibPointsClickCnt.rightMid} onCircleClicked={() => calibPointsOnClick("rightMid")} />
      <Circle bottom="80" right="80" clickCount={calibPointsClickCnt.bottomRight} onCircleClicked={() => calibPointsOnClick("bottomRight")} />
      <Circle bottom="80" left="1380" clickCount={calibPointsClickCnt.bottomMid} onCircleClicked={() => calibPointsOnClick("bottomMid")} />
      <Circle bottom="80" left="80" clickCount={calibPointsClickCnt.bottomLeft} onCircleClicked={() => calibPointsOnClick("bottomLeft")} />
      <Circle bottom="740" left="80" clickCount={calibPointsClickCnt.leftMid} onCircleClicked={() => calibPointsOnClick("leftMid")} />
    </div>
  );
};

export default Calibration;
