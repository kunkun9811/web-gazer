import React, { useState, useEffect } from "react";
import "./Calibration.css";
import { Circle } from "../Utils/CircleElement";
import BrowserDimensions from "../Utils/BrowserDimensions";
import CustomModal from "../CustomModal";
import { agreementModal, calibCompleteModal, instruction1, instruction2 } from "./CalibrationData";
import CalibrationPageState from "../Utils/CalibrationPageState";

// TODO: Might need to turn off clickListener after calibration - understand what clickListener do in WebGazer.js
export const Calibration = ({ calibratePosition, calibrationFinished }) => {
  /* Browser Dimensions */
  const { width: browserWidth, height: browserHeight } = BrowserDimensions();

  /* states */
  // TODO: Going to add page state for Calibration too, CONSENT STATE and CALIBRATION STATE
  const [calibPageState, updateCalibPageState] = useState(CalibrationPageState.AGREEMENT);
  const [hideCalibPreText, updateHideCalibPreText] = useState(false);
  const [showCalibText, updateShowCalibText] = useState(false);

  // TODO:
  const [showInstruction, updateShowInstruction] = useState(false);
  const [showCalibPoints, updateShowCalibPoints] = useState(false);

  const [agreementModalIsOpen, updateAgreementModalIsOpen] = useState(true);
  const [calibCompleteModalIsOpen, updateCalibCompleteModalIsOpen] = useState(false);
  const [currentCalibPoint, updateCurrentCalibPoint] = useState(0);
  const [calibrationPoints, updateCalibrationPoints] = useState([
    { top: browserHeight / 15, left: browserWidth / 30 },
    // { top: browserHeight / 15, left: browserWidth / 3.7 },
    // { top: browserHeight / 15, left: browserWidth / 2 },
    // { top: browserHeight / 15, left: browserWidth / 1.38 },
    // { top: browserHeight / 15, left: browserWidth / 1.05 },
    // { top: browserHeight / 2, left: browserWidth / 1.05 },
    // { top: browserHeight / 1.1, left: browserWidth / 1.05 },
    // { top: browserHeight / 1.1, left: browserWidth / 1.38 },
    // { top: browserHeight / 1.1, left: browserWidth / 2 },
    // { top: browserHeight / 1.1, left: browserWidth / 3.7 },
    // { top: browserHeight / 1.1, left: browserWidth / 30 },
    // { top: browserHeight / 2, left: browserWidth / 30 },
    // { top: browserHeight / 4, left: browserWidth / 7 },
    // { top: browserHeight / 4, left: browserWidth / 2 },
    // { top: browserHeight / 4, left: browserWidth / 1.17 },
    // { top: browserHeight / 1.37, left: browserWidth / 7 },
    // { top: browserHeight / 1.37, left: browserWidth / 2 },
    // { top: browserHeight / 1.37, left: browserWidth / 1.17 },
    // { top: browserHeight / 3, left: browserWidth / 2 },
    // { top: browserHeight / 2, left: browserWidth / 2.5 },
    // { top: browserHeight / 1.55, left: browserWidth / 2 },
    // { top: browserHeight / 2, left: browserWidth / 1.68 },
  ]);

  /* useEffect listeners */
  // check if all points have been calibrated
  useEffect(() => {
    console.log("********In useEffect********");
    console.log(`currentCalibPoint = ${currentCalibPoint}`);
    console.log(`calibrationPoints.length = ${calibrationPoints.length}`);

    // if (currentCalibPoint === calibrationPoints.length) calibrationFinished();
    if (currentCalibPoint === calibrationPoints.length) changeCalibPageState(CalibrationPageState.CALIBRATE_DONE);
  }, [currentCalibPoint]);

  // update which modal to open based on page state
  useEffect(() => {
    if (calibPageState === CalibrationPageState.AGREEMENT) {
      toggleCompletionModal(false);
      toggleAgreementModal(true);
    } else if (calibPageState === CalibrationPageState.CALIBRATE) {
      toggleCompletionModal(false);
      toggleAgreementModal(false);
      startCalibrationAnimation();
    } else if (calibPageState === CalibrationPageState.CALIBRATE_DONE) {
      toggleAgreementModal(false);
      toggleCompletionModal(true);
    }
  }, [calibPageState]);

  // allows responsive calibration points
  useEffect(() => {
    updateCalibrationPoints([
      { top: browserHeight / 15, left: browserWidth / 30 },
      // { top: browserHeight / 15, left: browserWidth / 3.7 },
      // { top: browserHeight / 15, left: browserWidth / 2 },
      // { top: browserHeight / 15, left: browserWidth / 1.38 },
      // { top: browserHeight / 15, left: browserWidth / 1.05 },
      // { top: browserHeight / 2, left: browserWidth / 1.05 },
      // { top: browserHeight / 1.1, left: browserWidth / 1.05 },
      // { top: browserHeight / 1.1, left: browserWidth / 1.38 },
      // { top: browserHeight / 1.1, left: browserWidth / 2 },
      // { top: browserHeight / 1.1, left: browserWidth / 3.7 },
      // { top: browserHeight / 1.1, left: browserWidth / 30 },
      // { top: browserHeight / 2, left: browserWidth / 30 },
      // { top: browserHeight / 4, left: browserWidth / 7 },
      // { top: browserHeight / 4, left: browserWidth / 2 },
      // { top: browserHeight / 4, left: browserWidth / 1.17 },
      // { top: browserHeight / 1.37, left: browserWidth / 7 },
      // { top: browserHeight / 1.37, left: browserWidth / 2 },
      // { top: browserHeight / 1.37, left: browserWidth / 1.17 },
      // { top: browserHeight / 3, left: browserWidth / 2 },
      // { top: browserHeight / 2, left: browserWidth / 2.5 },
      // { top: browserHeight / 1.55, left: browserWidth / 2 },
      // { top: browserHeight / 2, left: browserWidth / 1.68 },
    ]);
  }, [browserWidth, browserHeight]);

  /* Methods */
  // on mouse hover over calibration points handler
  const onMouseHover = () => {
    console.log(`ENTERED on MouseOver, current calibration is = ${currentCalibPoint}`);
    let x = calibrationPoints[currentCalibPoint].left !== undefined ? calibrationPoints[currentCalibPoint].left : calibrationPoints[currentCalibPoint].right;
    let y = calibrationPoints[currentCalibPoint].top !== undefined ? calibrationPoints[currentCalibPoint].top : calibrationPoints[currentCalibPoint].bottom;
    calibratePosition(x, y);
    updateCurrentCalibPoint((prevCnt) => prevCnt + 1);
  };

  // toggle agreement modal appearance
  const toggleAgreementModal = (newState) => {
    updateAgreementModalIsOpen(newState);
  };

  // toggle calibration completion modal appearance
  const toggleCompletionModal = (newState) => {
    updateCalibCompleteModalIsOpen(newState);
  };

  // update "calibPageState" to the [newPageState]
  const changeCalibPageState = (newPageState) => {
    updateCalibPageState(newPageState);
  };

  // user ready to do to demo
  const userReadyForDemo = () => {
    calibrationFinished();
  };

  // start calibration animation after user accepts the disclaimer
  const startCalibrationAnimation = () => {
    updateShowInstruction(true);
    setTimeout(() => {
      updateShowInstruction(false);
    }, 7000);

    setTimeout(() => {
      updateShowCalibPoints(true);
    }, 7000);
  };

  console.log(`------------------------------------------------calibPageState = ${calibPageState}`);
  console.log(`------------------------------------------------agreementModalIsOpen = ${agreementModalIsOpen}`);
  console.log(`------------------------------------------------calibCompleteModalIsOpen = ${calibCompleteModalIsOpen}`);

  return (
    <div className="calibration-container">
      <CustomModal
        isOpen={agreementModalIsOpen}
        onClick1={() => changeCalibPageState(CalibrationPageState.CALIBRATE)}
        title={agreementModal.title}
        subtitle={agreementModal.subtitle}
        label1={agreementModal.label1}
        label2={agreementModal.label2}
      />
      <CustomModal
        isOpen={calibCompleteModalIsOpen}
        onClick1={userReadyForDemo}
        title={calibCompleteModal.title}
        subtitle={calibCompleteModal.subtitle}
        label1={calibCompleteModal.label1}
        label2={calibCompleteModal.label2}
      />
      {/* <p className="calibration-text">Calibration</p> */}
      <p className={`${showInstruction ? `calibration-subtitle-show` : "calibration-subtitle-pre-hide"}`}>{instruction1}</p>
      <p className={`${showInstruction ? "calibration-subtitle-show" : "calibration-subtitle-pre-hide"}`}>{instruction2}</p>

      <div className={showCalibPoints ? "calibration-circles-show" : "calibration-circles"}>
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
