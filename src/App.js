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
  };

  if (curState === PageState.WELCOME) return <Welcome onClickHandler={onClickHandler} />;
  else return <WebGazeLoader />;
  // return <WebGazeLoader />;
  // return <Welcome onClickHandler={onClickHandler}
  // return <Calibration />;
}

export default App;
