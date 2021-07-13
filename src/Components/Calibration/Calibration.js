import React, { useState, useEffect } from "react";
import "./Calibration.css";
import { Circle } from "../Utils/CircleElement";
import BrowserDimensions from "../Utils/BrowserDimensions";

// TODO: Might need to turn off clickListener after calibration - understand what clickListener do in WebGazer.js
export const Calibration = ({ checkIfPointsFinished, calibratePosition, calibrationFinished }) => {
  /* Browser Dimensions */
  const { width: browserWidth, height: browserHeight } = BrowserDimensions();

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

  // TODO:
  const [calibrationPoints, updateCalibrationPoints] = useState([
    { top: browserHeight / 15, right: undefined, bottom: undefined, left: browserWidth / 30 },
    { top: browserHeight / 15, right: undefined, bottom: undefined, left: browserWidth / 3.7 },
    { top: browserHeight / 15, right: undefined, bottom: undefined, left: browserWidth / 2 },
    { top: browserHeight / 15, right: undefined, bottom: undefined, left: browserWidth / 3.7 },
    { top: browserHeight / 15, right: undefined, bottom: undefined, left: browserWidth / 30 },
    { top: browserHeight / 2, right: browserWidth / 30 },
    { top: undefined, right: browserWidth / 30, bottom: browserHeight / 15, left: undefined },
    { top: undefined, right: browserWidth / 3.7, bottom: browserHeight / 15, left: undefined },
    { top: undefined, right: undefined, bottom: browserHeight / 15, left: browserWidth / 2 },
    { top: undefined, right: undefined, bottom: browserHeight / 15, left: browserWidth / 3.7 },
    { top: undefined, right: undefined, bottom: browserHeight / 15, left: browserWidth / 30 },
    { top: undefined, right: undefined, bottom: browserHeight / 2, left: browserWidth / 30 },
    { top: browserHeight / 4, right: undefined, bottom: undefined, left: browserWidth / 7 },
    { top: browserHeight / 4, right: undefined, bottom: undefined, left: browserWidth / 2 },
    { top: browserHeight / 4, right: browserWidth / 7, bottom: undefined, left: undefined },
    { top: undefined, right: undefined, bottom: browserHeight / 4, left: browserWidth / 7 },
    { top: undefined, right: undefined, bottom: browserHeight / 4, left: browserWidth / 2 },
    { top: undefined, right: browserWidth / 7, bottom: browserHeight / 4, left: undefined },
    { top: browserHeight / 3, right: undefined, bottom: undefined, left: browserWidth / 2 },
    { top: browserHeight / 2, right: undefined, bottom: undefined, left: browserWidth / 2.5 },
    { top: undefined, right: browserWidth / 2, bottom: browserHeight / 3, left: undefined },
    { top: undefined, right: browserWidth / 2.5, bottom: browserHeight / 2, left: undefined },
  ]);
  const [currentCalibPoint, updateCurrentCalibPoint] = useState(0);

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

  useEffect(() => {
    if (currentCalibPoint === calibrationPoints.length) calibrationFinished();
  }, [currentCalibPoint]);

  // allows responsive calibration points
  useEffect(() => {
    updateCalibrationPoints([
      { top: browserHeight / 15, right: undefined, bottom: undefined, left: browserWidth / 30 },
      { top: browserHeight / 15, right: undefined, bottom: undefined, left: browserWidth / 3.7 },
      { top: browserHeight / 15, right: undefined, bottom: undefined, left: browserWidth / 2 },
      { top: browserHeight / 15, right: undefined, bottom: undefined, left: browserWidth / 3.7 },
      { top: browserHeight / 15, right: undefined, bottom: undefined, left: browserWidth / 30 },
      { top: browserHeight / 2, right: browserWidth / 30 },
      { top: undefined, right: browserWidth / 30, bottom: browserHeight / 15, left: undefined },
      { top: undefined, right: browserWidth / 3.7, bottom: browserHeight / 15, left: undefined },
      { top: undefined, right: undefined, bottom: browserHeight / 15, left: browserWidth / 2 },
      { top: undefined, right: undefined, bottom: browserHeight / 15, left: browserWidth / 3.7 },
      { top: undefined, right: undefined, bottom: browserHeight / 15, left: browserWidth / 30 },
      { top: undefined, right: undefined, bottom: browserHeight / 2, left: browserWidth / 30 },
      { top: browserHeight / 4, right: undefined, bottom: undefined, left: browserWidth / 7 },
      { top: browserHeight / 4, right: undefined, bottom: undefined, left: browserWidth / 2 },
      { top: browserHeight / 4, right: browserWidth / 7, bottom: undefined, left: undefined },
      { top: undefined, right: undefined, bottom: browserHeight / 4, left: browserWidth / 7 },
      { top: undefined, right: undefined, bottom: browserHeight / 4, left: browserWidth / 2 },
      { top: undefined, right: browserWidth / 7, bottom: browserHeight / 4, left: undefined },
      { top: browserHeight / 3, right: undefined, bottom: undefined, left: browserWidth / 2 },
      { top: browserHeight / 2, right: undefined, bottom: undefined, left: browserWidth / 2.5 },
      { top: undefined, right: browserWidth / 2, bottom: browserHeight / 3, left: undefined },
      { top: undefined, right: browserWidth / 2.5, bottom: browserHeight / 2, left: undefined },
    ]);
  }, [browserWidth, browserHeight]);

  // on mouse hover over calibration points handler
  const onMouseHover = () => {
    console.log(`ENTERED on MouseOver, current calibration is = ${currentCalibPoint}`);
    let x = calibrationPoints[currentCalibPoint].left !== undefined ? calibrationPoints[currentCalibPoint].left : calibrationPoints[currentCalibPoint].right;
    let y = calibrationPoints[currentCalibPoint].top !== undefined ? calibrationPoints[currentCalibPoint].top : calibrationPoints[currentCalibPoint].bottom;
    calibratePosition(x, y);
    updateCurrentCalibPoint((prevCnt) => prevCnt + 1);
  };

  // for animating the first instruction
  setTimeout(() => {
    updateHideCalibPreText(true);
  }, 5000);

  // for animating the second instruction
  setTimeout(() => {
    updateShowCalibText(true);
  }, 6000);

  console.log(`${browserHeight}, ${browserWidth}`);

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
        {/* <Circle top={browserHeight / 15} left={browserWidth / 30} clickCount={calibPointsClickCnt.topLeft} onCircleClicked={() => calibPointsOnClick("topLeft")} /> */}
        {currentCalibPoint < calibrationPoints.length ? (
          <Circle
            top={calibrationPoints[currentCalibPoint].top}
            right={calibrationPoints[currentCalibPoint].right}
            bottom={calibrationPoints[currentCalibPoint].bottom}
            left={calibrationPoints[currentCalibPoint].left}
            onMouseHover={onMouseHover}
            clickCount={calibPointsClickCnt.topLeft}
            onCircleClicked={() => calibPointsOnClick("topLeft")}
          />
        ) : null}
        {/* TODO: Finished the first 5 points, CONTINUE */}
        {/* OUTER */}
        {/* <Circle top={browserHeight / 15} left={browserWidth / 30} clickCount={calibPointsClickCnt.topLeft} onCircleClicked={() => calibPointsOnClick("topLeft")} />
        <Circle top={browserHeight / 15} left={browserWidth / 3.7} clickCount={calibPointsClickCnt.topLeft} onCircleClicked={() => calibPointsOnClick("topLeftMid")} />
        <Circle top={browserHeight / 15} left={browserWidth / 2} clickCount={calibPointsClickCnt.topMid} onCircleClicked={() => calibPointsOnClick("topMid")} />
        <Circle top={browserHeight / 15} left={browserWidth / 1.38} clickCount={calibPointsClickCnt.topRight} onCircleClicked={() => calibPointsOnClick("topRightMid")} />
        <Circle top={browserHeight / 15} left={browserWidth / 1.05} clickCount={calibPointsClickCnt.topRight} onCircleClicked={() => calibPointsOnClick("topRight")} /> */}
        {/* <Circle top={browserHeight / 2} right={browserWidth / 30} clickCount={calibPointsClickCnt.rightMid} onCircleClicked={() => calibPointsOnClick("rightMid")} /> */}
        {/* <Circle bottom={browserHeight / 15} right={browserWidth / 30} clickCount={calibPointsClickCnt.bottomRight} onCircleClicked={() => calibPointsOnClick("bottomRight")} /> */}
        {/* <Circle bottom={browserHeight / 15} right={browserWidth / 3.7} clickCount={calibPointsClickCnt.bottomRight} onCircleClicked={() => calibPointsOnClick("bottomRightMid")} /> */}
        {/* <Circle bottom={browserHeight / 15} left={browserWidth / 2} clickCount={calibPointsClickCnt.bottomMid} onCircleClicked={() => calibPointsOnClick("bottomMid")} /> */}
        {/* <Circle bottom={browserHeight / 15} left={browserWidth / 3.7} clickCount={calibPointsClickCnt.bottomLeft} onCircleClicked={() => calibPointsOnClick("bottomLeftMid")} /> */}
        {/* <Circle bottom={browserHeight / 15} left={browserWidth / 30} clickCount={calibPointsClickCnt.bottomLeft} onCircleClicked={() => calibPointsOnClick("bottomLeft")} /> */}
        {/* <Circle bottom={browserHeight / 2} left={browserWidth / 30} clickCount={calibPointsClickCnt.leftMid} onCircleClicked={() => calibPointsOnClick("leftMid")} /> */}
        {/* INNER */}
        {/* <Circle top={browserHeight / 4} left={browserWidth / 7} clickCount={calibPointsClickCnt.topLeft} onCircleClicked={() => calibPointsOnClick("topLeftInner")} /> */}
        {/* <Circle top={browserHeight / 4} left={browserWidth / 2} clickCount={calibPointsClickCnt.topLeft} onCircleClicked={() => calibPointsOnClick("topMidInner")} /> */}
        {/* <Circle top={browserHeight / 4} right={browserWidth / 7} clickCount={calibPointsClickCnt.topLeft} onCircleClicked={() => calibPointsOnClick("topMidInner")} /> */}
        {/* <Circle bottom={browserHeight / 4} left={browserWidth / 7} clickCount={calibPointsClickCnt.topLeft} onCircleClicked={() => calibPointsOnClick("topLeftInner")} /> */}
        {/* <Circle bottom={browserHeight / 4} left={browserWidth / 2} clickCount={calibPointsClickCnt.topLeft} onCircleClicked={() => calibPointsOnClick("topMidInner")} /> */}
        {/* <Circle bottom={browserHeight / 4} right={browserWidth / 7} clickCount={calibPointsClickCnt.topLeft} onCircleClicked={() => calibPointsOnClick("topMidInner")} /> */}
        {/* INNER MOST */}
        {/* <Circle top={browserHeight / 3} left={browserWidth / 2} clickCount={calibPointsClickCnt.topLeft} onCircleClicked={() => calibPointsOnClick("topMidInnerMost")} /> */}
        {/* <Circle top={browserHeight / 2} left={browserWidth / 2.5} clickCount={calibPointsClickCnt.topLeft} onCircleClicked={() => calibPointsOnClick("leftInnerMost")} /> */}
        {/* <Circle bottom={browserHeight / 3} right={browserWidth / 2} clickCount={calibPointsClickCnt.topLeft} onCircleClicked={() => calibPointsOnClick("bottomMidInnerMost")} /> */}
        {/* <Circle bottom={browserHeight / 2} right={browserWidth / 2.5} clickCount={calibPointsClickCnt.topLeft} onCircleClicked={() => calibPointsOnClick("rightInnerMost")} /> */}
      </div>
    </div>
  );
};

export default Calibration;
