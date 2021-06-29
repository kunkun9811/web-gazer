import React, { useState } from "react";
import "./App.css";
import WebGazeLoader from "./Components/WebGazer/WebGazeLoader";
import Welcome from "./Components/Welcome/Welcome";
import Calibration from "./Components/Calibration/Calibration";

// ENUMS
const pageState = {
  WELCOME: 0,
  CALIBRATION: 1,
  READY: 2,
};

Object.freeze(pageState);

function App() {
  const [curState, updateCurState] = useState(pageState.WELCOME);

  const onClickHandler = () => {
    if (curState === pageState.WELCOME) updateCurState(pageState.CALIBRATION);
    else if (curState === pageState.CALIBRATION) updateCurState(pageState.READY);
  };

  return <WebGazeLoader />;
}

export default App;
