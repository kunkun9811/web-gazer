import React, { useState, useEffect } from "react";
import "./Calibration.css";
import { Circle } from "../Utils/CircleElement";
import BrowserDimensions from "../Utils/BrowserDimensions";

// TODO: Might need to turn off clickListener after calibration - understand what clickListener do in WebGazer.js
export const Calibration = ({ calibratePosition, calibrationFinished }) => {
  /* Browser Dimensions */
  const { width: browserWidth, height: browserHeight } = BrowserDimensions();

  /* states */
  const [hideCalibPreText, updateHideCalibPreText] = useState(false);
  const [showCalibText, updateShowCalibText] = useState(false);

  // TODO:
  const [calibrationPoints, updateCalibrationPoints] = useState([
    { top: browserHeight / 15, left: browserWidth / 30 },
    { top: browserHeight / 15, left: browserWidth / 3.7 },
    { top: browserHeight / 15, left: browserWidth / 2 },
    { top: browserHeight / 15, left: browserWidth / 1.38 },
    { top: browserHeight / 15, left: browserWidth / 1.05 },
    { top: browserHeight / 2, left: browserWidth / 1.05 },
    { top: browserHeight / 1.1, left: browserWidth / 1.05 },
    { top: browserHeight / 1.1, left: browserWidth / 1.38 },
    { top: browserHeight / 1.1, left: browserWidth / 2 },
    { top: browserHeight / 1.1, left: browserWidth / 3.7 },
    { top: browserHeight / 1.1, left: browserWidth / 30 },
    { top: browserHeight / 2, left: browserWidth / 30 },
    { top: browserHeight / 4, left: browserWidth / 7 },
    { top: browserHeight / 4, left: browserWidth / 2 },
    { top: browserHeight / 4, left: browserWidth / 1.17 },
    { top: browserHeight / 1.37, left: browserWidth / 7 },
    { top: browserHeight / 1.37, left: browserWidth / 2 },
    { top: browserHeight / 1.37, left: browserWidth / 1.17 },
    { top: browserHeight / 3, left: browserWidth / 2 },
    { top: browserHeight / 2, left: browserWidth / 2.5 },
    { top: browserHeight / 1.55, left: browserWidth / 2 },
    { top: browserHeight / 2, left: browserWidth / 1.68 },
  ]);
  const [currentCalibPoint, updateCurrentCalibPoint] = useState(0);

  /* useEffect listeners */
  // check if all points have been calibrated
  useEffect(() => {
    console.log("********In useEffect********");
    console.log(`currentCalibPoint = ${currentCalibPoint}`);
    console.log(`calibrationPoints.length = ${calibrationPoints.length}`);

    if (currentCalibPoint === calibrationPoints.length) calibrationFinished();
  }, [currentCalibPoint]);

  // allows responsive calibration points
  useEffect(() => {
    updateCalibrationPoints([
      { top: browserHeight / 15, left: browserWidth / 30 },
      { top: browserHeight / 15, left: browserWidth / 3.7 },
      { top: browserHeight / 15, left: browserWidth / 2 },
      { top: browserHeight / 15, left: browserWidth / 1.38 },
      { top: browserHeight / 15, left: browserWidth / 1.05 },
      { top: browserHeight / 2, left: browserWidth / 1.05 },
      { top: browserHeight / 1.1, left: browserWidth / 1.05 },
      { top: browserHeight / 1.1, left: browserWidth / 1.38 },
      { top: browserHeight / 1.1, left: browserWidth / 2 },
      { top: browserHeight / 1.1, left: browserWidth / 3.7 },
      { top: browserHeight / 1.1, left: browserWidth / 30 },
      { top: browserHeight / 2, left: browserWidth / 30 },
      { top: browserHeight / 4, left: browserWidth / 7 },
      { top: browserHeight / 4, left: browserWidth / 2 },
      { top: browserHeight / 4, left: browserWidth / 1.17 },
      { top: browserHeight / 1.37, left: browserWidth / 7 },
      { top: browserHeight / 1.37, left: browserWidth / 2 },
      { top: browserHeight / 1.37, left: browserWidth / 1.17 },
      { top: browserHeight / 3, left: browserWidth / 2 },
      { top: browserHeight / 2, left: browserWidth / 2.5 },
      { top: browserHeight / 1.55, left: browserWidth / 2 },
      { top: browserHeight / 2, left: browserWidth / 1.68 },
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
  }, 1000); // TODO: og 5000

  // for animating the second instruction
  setTimeout(() => {
    updateShowCalibText(true);
  }, 1000); // TODO: og 6000

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
        {currentCalibPoint < calibrationPoints.length ? (
          <Circle
            top={calibrationPoints[currentCalibPoint].top}
            right={calibrationPoints[currentCalibPoint].right}
            bottom={calibrationPoints[currentCalibPoint].bottom}
            left={calibrationPoints[currentCalibPoint].left}
            onMouseHover={onMouseHover}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Calibration;
