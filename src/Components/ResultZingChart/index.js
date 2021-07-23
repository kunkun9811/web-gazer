import React, { useState, useEffect } from "react";
import { ResultContainer, ResultInnerContainer, ResultColumn1, ResultColumn2, ResultRow, ResultChartWrapper } from "./ResultZingChartElements";
import ZingChart from "zingchart-react";
import Chart from "react-google-charts";
import ResultPageState from "../Utils/ResultPageState";
import { getColumnChartNumPointsFixationOptions, getColumnChartDurationsOptions } from "./ResultZingChartOptions";
import { CircularProgress } from "@material-ui/core";
import ReadingLevel from "../Utils/ReadingLevel";

const ResultZingChart = ({ easyReadData, hardReadData }) => {
  /* states */
  const [displayChartType, setDisplayChartType] = useState(ResultPageState.NUM_POINTS_PER_FIXATION);

  // # of Points per Fixation vs. Time
  const [numEasyPointsPerFixation, setNumEasyPointsPerFixation] = useState(undefined);
  const [easyFixationsStartTimes, setEasyFixationsStartTimes] = useState(undefined);
  const [easyColumnData, setEasyColumnData] = useState(undefined);
  const [numHardPointsPerFixation, setNumHardPointsPerFixation] = useState(undefined);
  const [hardFixationsStartTimes, setHardFixationsStartTimes] = useState(undefined);
  const [hardColumnData, setHardColumnData] = useState(undefined);

  // Duration of each fixation
  const [easyFixationDurations, setEasyFixationDurations] = useState(undefined);
  const [hardFixationDurations, setHardFixationDurations] = useState(undefined);
  const [easyColumnDurationData, setEasyColumnDurationData] = useState(undefined);
  const [hardColumnDurationData, setHardColumnDurationData] = useState(undefined);

  // Heatmap of coordinates - TODO: Check if this is a valid way of doing it (midpoint of each fixation)
  // const [mid]

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
      setDurationPerFixation();
    }
  }, [easyReadData, hardReadData]); //easyReadData, hardReadData

  // listens to changes in "easyColumnData" and  "hardColumnData"
  useEffect(() => {
    renderChart();
  }, [numEasyPointsPerFixation, easyFixationsStartTimes, numHardPointsPerFixation, hardFixationsStartTimes, easyFixationDurations, hardFixationDurations]);

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

  const setDurationPerFixation = () => {
    if (easyReadData !== undefined) {
      const newEasyFixationDuration = easyReadData.fixations.map((fixation) => fixation.data.duration);
      setEasyFixationDurations(newEasyFixationDuration);
    }

    if (hardReadData !== undefined) {
      const newHardFixationDuration = hardReadData.fixations.map((fixation) => fixation.data.duration);
      setHardFixationDurations(newHardFixationDuration);
    }
  };

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

  const setBarChartFixationDurationData = () => {
    if (easyFixationDurations !== undefined) {
      const curData = [["Fixation", "Fixation Durations"]];
      for (let idx in easyFixationDurations) {
        const newData = [idx, easyFixationDurations[idx]];
        curData.push(newData);
      }
      setEasyColumnDurationData(curData);
    }

    if (hardFixationDurations !== undefined) {
      // TODO: Not sure why I still need to put "Fixation" here even though it doesn't display it
      const curData = [["Fixation", "Fixation Durations"]];
      for (let idx in hardFixationDurations) {
        const newData = [idx, hardFixationDurations[idx]];
        curData.push(newData);
      }
      setHardColumnDurationData(curData);
    }
  };

  // render charts based on "displayChartType"
  const renderChart = async () => {
    setBarChartData();
    setBarChartFixationDurationData();
  };

  // TODO: Change it to rows instead of columns actually
  return (
    <ResultContainer>
      <ResultInnerContainer>
        {/* # of Points Per Fixation vs Time */}
        <ResultRow>
          <ResultChartWrapper>
            {easyColumnData !== undefined ? (
              <Chart chartType="ColumnChart" data={easyColumnData} loader={<CircularProgress />} options={getColumnChartNumPointsFixationOptions(ReadingLevel.EASY)} legendToggle />
            ) : (
              "No Data"
            )}
          </ResultChartWrapper>
          <ResultChartWrapper>
            {hardColumnData !== undefined ? (
              <Chart chartType="ColumnChart" data={hardColumnData} loader={<CircularProgress />} options={getColumnChartNumPointsFixationOptions(ReadingLevel.HARD)} legendToggle />
            ) : (
              "No Data"
            )}
          </ResultChartWrapper>
        </ResultRow>

        {/* Durations of each Fixation */}
        <ResultRow>
          <ResultChartWrapper>
            {easyColumnData !== undefined ? (
              <Chart chartType="ColumnChart" data={easyColumnDurationData} loader={<CircularProgress />} options={getColumnChartDurationsOptions(ReadingLevel.EASY)} legendToggle />
            ) : (
              "No Data"
            )}
          </ResultChartWrapper>
          <ResultChartWrapper>
            {hardColumnData !== undefined ? (
              <Chart chartType="ColumnChart" data={hardColumnDurationData} loader={<CircularProgress />} options={getColumnChartDurationsOptions(ReadingLevel.HARD)} legendToggle />
            ) : (
              "No Data"
            )}
          </ResultChartWrapper>
        </ResultRow>
      </ResultInnerContainer>
    </ResultContainer>
  );
};

export default ResultZingChart;
