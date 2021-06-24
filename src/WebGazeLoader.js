import Script from "react-load-script";
import { WebGazeContext } from "./WebGazeContext";
import MainApp from "./Main";

// instruct compiler that "webgazer" was already declared From WebGazer.js
declare var webgazer;

export default function WebGazeLoader() {
  const handleScriptLoad = () => {
    webgazer
      .setGazeListener((data, elapsedTime) => {
        if (data == null) {
          return;
        }
        // console.log("**** Web Gazer Working *****");
        // console.log("**data**");
        console.log(data);
        // console.log("**elapsedTime**");
        console.log(elapsedTime);
        console.log("--------------------------------------------------------------------------------------------------------");
      })
      .begin();

    console.log(webgazer);
    webgazer.showFaceOverlay(false);
  };

  const handleScriptError = () => {
    console.log("error");
  };

  return (
    <div>
      <Script url="https://webgazer.cs.brown.edu/webgazer.js" onLoad={handleScriptLoad} onError={handleScriptError} />
      <MainApp />
    </div>
  );
}
