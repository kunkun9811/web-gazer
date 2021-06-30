import React, { useState } from "react";
import "./App.css";
import WebGazeLoader from "./Components/WebGazer/WebGazeLoader";
import Welcome from "./Components/Welcome/Welcome";
import Calibration from "./Components/Calibration/Calibration";
import PageState from "./Components/Utils/PageState";

function App() {
  const [curState, updateCurState] = useState(PageState.WELCOME);

  const onClickHandler = () => {
    if (curState === PageState.WELCOME) updateCurState(PageState.CALIBRATION);
    // else if (curState === PageState.CALIBRATION) updateCurState(PageState.READY);
  };

  if (curState === PageState.WELCOME) return <Welcome onClickHandler={onClickHandler} />;
  // else if (curState === PageState.CALIBRATION) return <Calibration />;
  else return <WebGazeLoader />;
  // return <WebGazeLoader />;
  // return <Welcome onClickHandler={onClickHandler}
  // return <Calibration />;
}

export default App;
