/* eslint-disable */
import { useEffect } from "react";
import webgazer from "webgazer";
import "./App.css";

function App() {
  // WebGazer url
  // const wgUrl = "https://webgazer.cs.brown.edu/webgazer.js?";

  // useEffect(() => {
  //   const script_wg = document.createElement("script");
  //   const script_util = document.createElement("script");

  //   script_wg.src = wgUrl;
  //   script_wg.defer = true;

  //   script_util.src = "./scripts/script.js";
  //   script_util.defer = true;

  //   document.body.appendChild(script_wg);
  //   document.body.appendChild(script_util);

  //   return () => {
  //     document.body.removeChild(script_wg);
  //     document.body.removeChild(script_util);
  //   };
  // }, []);

  // const wgUrl = "./scripts/WebGazer.js";

  // useEffect(() => {
  //   const script_wg = document.createElement("script");

  //   script_wg.src = wgUrl;
  //   script_wg.defer = true;

  //   document.body.appendChild(script_wg);

  //   return () => {
  //     document.body.removeChild(script_wg);
  //   };
  // }, []);

  console.log("HELLO");

  // testing npm
  // webgazer
  //   .setGazeListener((data, timestamp) => {
  //     console.log(data);
  //     console.log("Hello");
  //   })
  //   .begin();

  // webgazer.showFaceFeedbackBox(true);
  console.log(webgazer);

  useEffect(() => {
    webgazer
      .setGazeListener(function (data, elapsedTime) {
        if (data == null) {
          return;
        }
        var xprediction = data.x; //these x coordinates are relative to the viewport
        var yprediction = data.y; //these y coordinates are relative to the viewport
        console.log(elapsedTime); //elapsed time is based on time since begin was called
      })
      .begin();

    webgazer.showVideo(true).showPredictionPoints(true);
  }, []);

  return null;
}

export default App;
