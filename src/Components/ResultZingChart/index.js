import React, { useState, useEffect } from "react";
import { ResultContainer, ResultInnerContainer, ResultColumn1, ResultColumn2 } from "./ResultZingChartElements";
import ZingChart from "zingchart-react";
import Chart from "react-google-charts";
import ResultPageState from "../Utils/ResultPageState";
import { update } from "@tensorflow/tfjs-layers/dist/variables";

const ResultZingChart = ({ easyReadData, hardReadData }) => {
  /* states */
  const [displayDataType, setDisplayDataType] = useState(ResultPageState.NUM_POINTS_PER_FIXATION);
  const [numEasyPointsPerFixation, setEasyNumPointsPerFixation] = useState(undefined);
  const [EasyFixationsStartTimes, setEasyFixationsStartTimes] = useState(undefined);
  const [barConfig, setBarConfig] = useState(undefined);

  /* Listeners*/
  // TODO: for testing
  // useEffect(() => {
  //   setBarConfig({
  //     type: "bar",
  //     // "scale-x": {
  //     //   label: {
  //     //     text: "Start Times",
  //     //   },
  //     // },
  //     series: [
  //       {
  //         values: [4, 5, 3, 4],
  //       },
  //     ],
  //   });
  // }, []);
  // Initial run
  useEffect(() => {
    // HELLO
    console.log("=======================================easyReadData=======================================");
    console.log(easyReadData);
    console.log("=======================================hardReadData=======================================");
    console.log(hardReadData);
    if (easyReadData !== undefined || hardReadData !== undefined) {
      setStartTimes();
      setDataForNumPointsPerFixationAndTime();
      // TODO: Can't set Chart configs here, need to use useEffect and wait for dependent variables to be updated first
      // setBarChartData();
      renderChart();
    }
  }, []); //easyReadData, hardReadData

  // bar chart - Number of Points per Fixation v.s. Start Times

  /* Methods */
  const setStartTimes = () => {
    const newEasyFixationsStartTimes = easyReadData.fixations.map((fixation) => fixation.data.start);
    setEasyFixationsStartTimes(newEasyFixationsStartTimes);
  };

  const setDataForNumPointsPerFixationAndTime = () => {
    const newEasyNumPointsPerFixation = easyReadData.fixations.map((fixation) => fixation.data.xall.length);
    setEasyNumPointsPerFixation(newEasyNumPointsPerFixation);
  };

  // TODO: Not sure why it only display after I reload it HM.
  const setBarChartData = () => {
    console.log("===============================================in setBarChartData===============================================");
    const curData = [["Start Time", "Number of Points"]];

    console.log("===================================numEasyPointsPerFixation===================================");
    console.log(numEasyPointsPerFixation);

    for (let idx in numEasyPointsPerFixation) {
      console.log(`idx = ${idx}`);
      const newData = [EasyFixationsStartTimes[idx], numEasyPointsPerFixation[idx]];
      curData.push(newData);
    }

    // setBarConfig([
    //   // ["Year", "Sales", "Expenses", "Profit"],
    //   // ["2014", 1000, 400, 200],
    //   // ["2015", 1170, 460, 250],
    //   // ["2016", 660, 1120, 300],
    //   // ["2017", 1030, 540, 350],
    //   ["Start Time", "Number of Points"],
    //   ...curData,
    // ]);

    setBarConfig(curData);
  };

  const renderChart = async () => {};

  /* DEBUG */

  useEffect(() => {
    console.log("=============================BARCONFIG CHANGED=============================");
    console.log(barConfig);
    if (numEasyPointsPerFixation !== undefined && EasyFixationsStartTimes !== undefined) {
      setBarChartData();
    }
  }, [numEasyPointsPerFixation, EasyFixationsStartTimes]);

  /* END OF DEBUG */

  return (
    <ResultContainer>
      <ResultInnerContainer>
        {/* <ResultColumn1>{easyReadData !== undefined ? <Chart chartType="Bar" data={barConfig} width="100%" height="400px" legendToggle /> : "No Data"}</ResultColumn1> */}
        <ResultColumn1>{barConfig !== undefined ? <Chart chartType="Bar" data={barConfig} width="100%" height="400px" legendToggle /> : "No Data"}</ResultColumn1>
        <ResultColumn2>{hardReadData !== undefined ? <Chart chartType="Bar" data={barConfig} width="100%" height="400px" legendToggle /> : "No Data"}</ResultColumn2>
        {/* <ResultColumn2>{barConfig !== undefined ? <Chart chartType="Bar" data={barConfig} width="100%" height="400px" legendToggle /> : "No Data"}</ResultColumn2> */}
      </ResultInnerContainer>
    </ResultContainer>
  );
};

export default ResultZingChart;
