import React, { useState, useEffect } from "react";
import { ResultContainer, ResultInnerContainer, ResultColumn1, ResultColumn2, ResultChartWrapper } from "./ResultZingChartElements";
import ZingChart from "zingchart-react";
import Chart from "react-google-charts";
import ResultPageState from "../Utils/ResultPageState";
import { barChartOptions, getBarChartOptions } from "./ResultZingChartOptions";
import { CircularProgress } from "@material-ui/core";
import { hardRead } from "../Reading/ReadingData";
import ReadingLevel from "../Utils/ReadingLevel";

const ResultZingChart = ({ easyReadData, hardReadData }) => {
  /* states */
  const [displayChartType, setDisplayChartType] = useState(ResultPageState.NUM_POINTS_PER_FIXATION);
  const [numEasyPointsPerFixation, setNumEasyPointsPerFixation] = useState(undefined);
  const [easyFixationsStartTimes, setEasyFixationsStartTimes] = useState(undefined);
  const [easyColumnData, setEasyColumnData] = useState(undefined);
  const [numHardPointsPerFixation, setNumHardPointsPerFixation] = useState(undefined);
  const [hardFixationsStartTimes, setHardFixationsStartTimes] = useState(undefined);
  const [hardColumnData, setHardColumnData] = useState(undefined);

  /* Listeners*/
  // listens to changes with "easyReadData" and "hardReadData"
  useEffect(() => {
    console.log("=======================================easyReadData=======================================");
    console.log(easyReadData);
    console.log("=======================================hardReadData=======================================");
    console.log(hardReadData);
    if (easyReadData !== undefined || hardReadData !== undefined) {
      setStartTimes();
      setNumPointsPerFixation();
    }
  }, [easyReadData, hardReadData]); //easyReadData, hardReadData

  // listens to changes in "easyColumnData" and  "hardColumnData"
  useEffect(() => {
    renderChart();
  }, [numEasyPointsPerFixation, easyFixationsStartTimes, numHardPointsPerFixation, hardFixationsStartTimes]);

  // bar chart - Number of Points per Fixation v.s. Start Times

  /* Methods */
  const setStartTimes = () => {
    if (easyReadData !== undefined) {
      const newEasyFixationsStartTimes = easyReadData.fixations.map((fixation) => fixation.data.start);
      setEasyFixationsStartTimes(newEasyFixationsStartTimes);
    }

    if (hardReadData !== undefined) {
      const newHardFixationsStartTimes = hardReadData.fixations.map((fixation) => fixation.data.start);
      setHardFixationsStartTimes(newHardFixationsStartTimes);
    }
  };

  const setNumPointsPerFixation = () => {
    if (easyReadData !== undefined) {
      const newEasyNumPointsPerFixation = easyReadData.fixations.map((fixation) => fixation.data.xall.length);
      setNumEasyPointsPerFixation(newEasyNumPointsPerFixation);
    }

    if (hardReadData !== undefined) {
      const newHardNumPointsPerFixation = hardReadData.fixations.map((fixation) => fixation.data.xall.length);
      setNumHardPointsPerFixation(newHardNumPointsPerFixation);
    }
  };

  // TODO: Not sure why it only display after I reload it HM.
  const setBarChartData = () => {
    if (numEasyPointsPerFixation !== undefined) {
      const curData = [["Start Time", "Number of Points"]];
      for (let idx in numEasyPointsPerFixation) {
        const newData = [easyFixationsStartTimes[idx], numEasyPointsPerFixation[idx]];
        curData.push(newData);
      }
      setEasyColumnData(curData);
    }

    if (numHardPointsPerFixation !== undefined) {
      const curData = [["Start Time", "Number of Points"]];
      for (let idx in numHardPointsPerFixation) {
        const newData = [hardFixationsStartTimes[idx], numHardPointsPerFixation[idx]];
        curData.push(newData);
      }
      setHardColumnData(curData);
    }
  };

  // render charts based on "displayChartType"
  const renderChart = async () => {
    setBarChartData();
  };

  // TODO: Change it to rows instead of columns actually
  return (
    <ResultContainer>
      {/* {console.log("hello")} */}
      <ResultInnerContainer>
        <ResultColumn1>
          {/* Number of points vs. Time */}
          <ResultChartWrapper>
            {easyColumnData !== undefined ? (
              <Chart chartType="ColumnChart" data={easyColumnData} loader={<CircularProgress />} options={getBarChartOptions(ReadingLevel.EASY)} legendToggle />
            ) : (
              "No Data"
            )}
          </ResultChartWrapper>
        </ResultColumn1>
        <ResultColumn2>
          {/* Number of points vs. Time */}
          <ResultChartWrapper>
            {hardColumnData !== undefined ? (
              <Chart chartType="ColumnChart" data={hardColumnData} loader={<CircularProgress />} options={getBarChartOptions(ReadingLevel.HARD)} legendToggle />
            ) : (
              "No Data"
            )}
          </ResultChartWrapper>
        </ResultColumn2>
      </ResultInnerContainer>
    </ResultContainer>
  );
};

export default ResultZingChart;
