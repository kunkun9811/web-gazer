import Script from "react-load-script";
import { WebGazeContext } from "./WebGazeContext";
// import webgazer from "webgazer.js";
import MainApp from "./Main";

// instruct compiler that "webgazer" was already declared From WebGazer.js [consider using Typescript instead of Javascript?]
declare var webgazer;

const urlGet = "http://localhost:5000/";
const urlProcess = "http://localhost:5000/process";

export default function WebGazeLoader() {
  const sessionData = [];
  const handleScriptLoad = () => {
    webgazer
      .setGazeListener((data, elapsedTime) => {
        if (data == null) {
          return;
        }
        // console.log("**** Web Gazer Working *****");
        // console.log("**data**");
        // console.log(data);
        // console.log("**elapsedTime**");
        // console.log(elapsedTime);
        // console.log("--------------------------------------------------------------------------------------------------------");

        sessionData.push({ data: data.all[0], elapsedTime: elapsedTime });
      })
      .begin();

    console.log(webgazer);
    webgazer.showFaceOverlay(false).showVideoPreview(false);
  };

  const handleScriptError = () => {
    console.log("error");
  };

  const processSessionData = async () => {
    console.log("Sending data to backend...");
    console.log("Processing data to backend...");
    console.log(`sessionData size = ${sessionData.length}`);
    // check what data looks like
    console.log(sessionData);
    // (TESTING) send to backend [GET]
    // await fetch(urlGet).then((response) => console.log(response));
    // send data to backend for processing
    await fetch(urlProcess, {
      method: "POST",
      body: JSON.stringify(sessionData),
    }).then((response) => {
      console.log(`Successfully connected with {POST} endpoint => response:`);
      console.log(response.body);
    });
    // remove sent data
    sessionData.splice(0, sessionData.length);
    console.log(`sessionData size = ${sessionData.length}`);
  };

  setInterval(processSessionData, 10000);

  return (
    <div>
      <Script url="https://webgazer.cs.brown.edu/webgazer.js" onLoad={handleScriptLoad} onError={handleScriptError} />
      <MainApp />
    </div>
  );
}
