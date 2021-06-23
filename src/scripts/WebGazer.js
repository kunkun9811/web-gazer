// import webgazer from "webgazer";

// testing npm
webgazer
  .setGazeListener((data, timestamp) => {
    console.log(data, timestamp);
  })
  .begin();
