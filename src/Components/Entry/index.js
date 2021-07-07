import React, { useState } from "react";
import WebGazeLoader from "../WebGazer/WebGazeLoader";
import Welcome from "../Welcome/Welcome";
import PageState from "../Utils/PageState";

export const Try = () => {
  const [curState, updateCurState] = useState(PageState.WELCOME);

  const onClickHandler = () => {
    if (curState === PageState.WELCOME) updateCurState(PageState.CALIBRATION);
  };

  if (curState === PageState.WELCOME) return <Welcome onClickHandler={onClickHandler} />;
  else return <WebGazeLoader />;

  /* For development purposes */
  // return <WebGazeLoader />;
  // return <Welcome onClickHandler={onClickHandler}
  // return <Calibration />;
};

export default Try;
