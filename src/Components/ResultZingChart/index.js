import React, { useState, useEffect } from "react";
import { ResultContainer, ResultInnerContainer, ResultColumn1, ResultColumn2, ResultRow, ResultChartWrapper } from "./ResultZingChartElements";
import ZingChart from "zingchart-react";
import Chart from "react-google-charts";
import ResultPageState from "../Utils/ResultPageState";
import { getColumnChartNumPointsFixationOptions, getColumnChartDurationsOptions, getSaccadeVelocityOptions, getSingleValueOptions } from "./ResultZingChartOptions";
import { CircularProgress } from "@material-ui/core";
import { ReadingLevel, OrientationState } from "../Utils/AdditionalStates";
const math = require("mathjs");

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

  /* fixations info */
  // duration of each fixation
  const [easyFixationDurations, setEasyFixationDurations] = useState(undefined);
  const [hardFixationDurations, setHardFixationDurations] = useState(undefined);
  const [easyColumnDurationData, setEasyColumnDurationData] = useState(undefined);
  const [hardColumnDurationData, setHardColumnDurationData] = useState(undefined);

  // Heatmap of coordinates - TODO: Check if this is a valid way of doing it (midpoint of each fixation) - BUBBLE CHART
  // const [mid]

  /* saccades info */
  // Horizontal Velocities
  const [easySaccadeHorizontalVelocities, setEasySaccadeHorizontalVelocities] = useState(undefined);
  const [hardSaccadeHorizontalVelocities, setHardSaccadeHorizontalVelocities] = useState(undefined);
  const [easySaccadeHorizontalVelocitiesChartData, setEasySaccadeHorizontalVelocitiesChartData] = useState(undefined);
  const [hardSaccadeHorizontalVelocitiesChartData, setHardSaccadeHorizontalVelocitiesChartData] = useState(undefined);

  // Vertical Velocities
  const [easySaccadeVerticalVelocities, setEasySaccadeVerticalVelocities] = useState(undefined);
  const [hardSaccadeVerticalVelocities, setHardSaccadeVerticalVelocities] = useState(undefined);
  const [easySaccadeVerticalVelocitiesChartData, setEasySaccadeVerticalVelocitiesChartData] = useState(undefined);
  const [hardSaccadeVerticalVelocitiesChartData, setHardSaccadeVerticalVelocitiesChartData] = useState(undefined);

  /* Single Values info */
  const [allSingleValuesChartData, setAllSingleValuesChartData] = useState(undefined);

  // fixation frequency
  const [easyFixationFrequencies, setEasyFixationFrequencies] = useState(undefined);
  const [hardFixationFrequencies, setHardFixationFrequencies] = useState(undefined);

  // average saccade length
  const [easyAvgSaccadeLength, setEasyAvgSaccadeLength] = useState(undefined);
  const [hardAvgSaccadeLength, setHardAvgSaccadeLength] = useState(undefined);

  /** Listeners **/
  /* listens to changes with "easyReadData" and "hardReadData" */
  useEffect(() => {
    console.log("=======================================easyReadData=======================================");
    console.log(easyReadData);
    console.log("=======================================hardReadData=======================================");
    console.log(hardReadData);
    if (easyReadData !== undefined || hardReadData !== undefined) {
      setStartTimes();
      setNumPointsPerFixation();
      setDurationPerFixation();
      setFixationFrequencies();
      setSaccadeHorizontalVelocities();
      setSaccadeVerticalVelocities();
      setAvgSaccadeLength();
    }
  }, []); //easyReadData, hardReadData

  /* some variables that dependent upon other  */
  // useEffect(() => {
  //   setAvgSaccadeLength
  // }, [])

  // listens to changes in "easyColumnData" and  "hardColumnData"
  useEffect(() => {
    renderChart();
  }, [
    numEasyPointsPerFixation,
    easyFixationsStartTimes,
    numHardPointsPerFixation,
    hardFixationsStartTimes,
    easyFixationDurations,
    hardFixationDurations,
    easyFixationFrequencies,
    hardFixationFrequencies,
    easySaccadeHorizontalVelocities,
    hardSaccadeHorizontalVelocities,
    easySaccadeVerticalVelocities,
    hardSaccadeVerticalVelocities,
    easyAvgSaccadeLength,
    hardAvgSaccadeLength,
  ]);

  // bar chart - Number of Points per Fixation v.s. Start Times

  /*** Methods ***/
  /** helper functions **/
  const power2 = (number) => {
    return number ** 2;
  };

  const sqrt = (number) => {
    return Math.sqrt(number);
  };

  const calcPointDistance = (x1, x2, y1, y2) => {
    return sqrt(power2(x1 - x2) + power2(y1 - y2));
  };

  /** set data **/
  /* fixation */
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

  const setFixationFrequencies = () => {
    if (easyReadData !== undefined) {
      const newNumFixations = easyReadData.fixations.length;
      const newStartTime = easyReadData.fixations[0].data.start;
      const newEndTime = easyReadData.fixations[newNumFixations - 1].data.end;
      const newEasyFixationFrequencies = newNumFixations / (newEndTime - newStartTime);
      setEasyFixationFrequencies(newEasyFixationFrequencies);
    }

    if (hardReadData !== undefined) {
      const newNumFixations = hardReadData.fixations.length;
      const newStartTime = hardReadData.fixations[0].data.start;
      const newEndTime = hardReadData.fixations[newNumFixations - 1].data.end;
      const newHardFixationFrequencies = newNumFixations / (newEndTime - newStartTime);
      setHardFixationFrequencies(newHardFixationFrequencies);
    }
  };

  /* saccade */
  // TODO: I'm taking the average for now. Not sure why there are so many velocities in each saccade
  const setSaccadeHorizontalVelocities = () => {
    if (easyReadData !== undefined) {
      const newEasySaccadeHorizontalVelocity = easyReadData.saccades.map((saccade) => math.mean(saccade.vx._data));
      setEasySaccadeHorizontalVelocities(newEasySaccadeHorizontalVelocity);
    }

    if (hardReadData !== undefined) {
      const newHardSaccadeHorizontalVelocity = hardReadData.saccades.map((saccade) => math.mean(saccade.vx._data));
      setHardSaccadeHorizontalVelocities(newHardSaccadeHorizontalVelocity);
    }
  };

  // TODO: I'm taking the average for now. Not sure why there are so many velocities in each saccade
  const setSaccadeVerticalVelocities = () => {
    if (easyReadData !== undefined) {
      const newEasySaccadeVerticalVelocity = easyReadData.saccades.map((saccade) => math.mean(saccade.vy._data));
      setEasySaccadeVerticalVelocities(newEasySaccadeVerticalVelocity);
    }

    if (hardReadData !== undefined) {
      const newHardSaccadeVerticalVelocity = hardReadData.saccades.map((saccade) => math.mean(saccade.vy._data));
      setHardSaccadeVerticalVelocities(newHardSaccadeVerticalVelocity);
    }
  };

  // TODO: make sure that the distance between two fixations are actually the SACCADE LENGTH
  const setAvgSaccadeLength = () => {
    if (easyReadData !== undefined) {
      // calc all midpoints of fixations
      const newEasyFixationsMidPoints = easyReadData.fixations.map((fixation) => {
        const midX = math.mean(fixation.data.xall);
        const midY = math.mean(fixation.data.yall);
        const midPoint = {
          x: midX,
          y: midY,
        };
        return midPoint;
      });

      console.log("----------------------------------newEasyFixationsMidPoints----------------------------------");
      console.log(newEasyFixationsMidPoints);

      // calc all saccades lengths
      const newEasySaccadesLengths = [];
      var prevMidPoint = undefined;
      for (let idx in newEasyFixationsMidPoints) {
        console.log(`idx = ${idx}`);
        console.log(typeof idx);
        console.log(`idx !== 0 => ${idx !== 0}`);

        // NOTE: Not sure why index is a string...
        if (idx !== "0") {
          const prevX = prevMidPoint.x;
          const prevY = prevMidPoint.y;
          const curX = newEasyFixationsMidPoints[idx].x;
          const curY = newEasyFixationsMidPoints[idx].y;
          const newLength = calcPointDistance(curX, prevX, curY, prevY);
          newEasySaccadesLengths.push(newLength);
        }
        prevMidPoint = newEasyFixationsMidPoints[idx];
      }

      // calc average of overall saccade length
      const newEasyAvgSaccadeLength = math.mean(newEasySaccadesLengths);
      setEasyAvgSaccadeLength(newEasyAvgSaccadeLength);
    }

    if (hardReadData !== undefined) {
      // calc all midpoints of fixations
      const newHardFixationsMidPoints = hardReadData.fixations.map((fixation) => {
        const midX = math.mean(fixation.data.xall);
        const midY = math.mean(fixation.data.yall);
        const midPoint = {
          x: midX,
          y: midY,
        };
        return midPoint;
      });

      // calc all saccades lengths
      const newHardSaccadesLengths = [];
      var prevMidPoint = undefined;
      for (let idx in newHardFixationsMidPoints) {
        // NOTE: Not sure why index is a string...
        if (idx !== "0") {
          const prevX = prevMidPoint.x;
          const prevY = prevMidPoint.y;
          const curX = newHardFixationsMidPoints[idx].x;
          const curY = newHardFixationsMidPoints[idx].y;
          const newLength = calcPointDistance(curX, prevX, curY, prevY);
          newHardSaccadesLengths.push(newLength);
        }
        prevMidPoint = newHardFixationsMidPoints[idx];
      }

      // calc average of overall saccade length
      const newHardAvgSaccadeLength = math.mean(newHardSaccadesLengths);
      setHardAvgSaccadeLength(newHardAvgSaccadeLength);
    }
  };

  /** set chart data **/
  /* fixation chart data */
  const setBarChartData = () => {
    if (numEasyPointsPerFixation !== undefined) {
      // NOTE: Not sure why I still need to put labels here even though it is not these that displays it
      const curData = [["Start Time", "Number of Points"]];
      for (let idx in numEasyPointsPerFixation) {
        const newData = [easyFixationsStartTimes[idx], numEasyPointsPerFixation[idx]];
        curData.push(newData);
      }
      setEasyColumnData(curData);
    }

    if (numHardPointsPerFixation !== undefined) {
      // NOTE: Not sure why I still need to put labels here even though it is not these that displays it
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
      const curData = [["Fixation", "Fixation Durations"]];
      for (let idx in hardFixationDurations) {
        const newData = [idx, hardFixationDurations[idx]];
        curData.push(newData);
      }
      setHardColumnDurationData(curData);
    }
  };

  /* saccade chart data */
  const setSaccadeVelocitiesHorizontalChartData = () => {
    if (easySaccadeHorizontalVelocities !== undefined) {
      const curData = [["Saccade", "Seccade Horizontal Velocity"]];
      for (let idx in easySaccadeHorizontalVelocities) {
        const newData = [idx, easySaccadeHorizontalVelocities[idx]];
        curData.push(newData);
      }
      setEasySaccadeHorizontalVelocitiesChartData(curData);
    }

    if (hardSaccadeHorizontalVelocities !== undefined) {
      const curData = [["Saccade", "Seccade Horizontal Velocity"]];
      for (let idx in hardSaccadeHorizontalVelocities) {
        const newData = [idx, hardSaccadeHorizontalVelocities[idx]];
        curData.push(newData);
      }
      setHardSaccadeHorizontalVelocitiesChartData(curData);
    }
  };

  const setSaccadeVelocitiesVerticalChartData = () => {
    if (easySaccadeVerticalVelocities !== undefined) {
      const curData = [["Saccade", "Seccade Vertical Velocity"]];
      for (let idx in easySaccadeVerticalVelocities) {
        const newData = [idx, easySaccadeVerticalVelocities[idx]];
        curData.push(newData);
      }

      setEasySaccadeVerticalVelocitiesChartData(curData);
    }

    if (hardSaccadeVerticalVelocities !== undefined) {
      const curData = [["Saccade", "Seccade Vertical Velocity"]];
      for (let idx in hardSaccadeVerticalVelocities) {
        const newData = [idx, hardSaccadeVerticalVelocities[idx]];
        curData.push(newData);
      }
      setHardSaccadeVerticalVelocitiesChartData(curData);
    }
  };

  /* single values chart data */
  // combination of different single value comparisons, e.g. duration of saccades in easy vs hard
  const setSingleValueComparisonChartData = () => {
    const allData = [["Category", "Easy", "Hard"]];
    if (easyFixationFrequencies !== undefined && hardFixationFrequencies !== undefined) {
      allData.push(["Fixation Frequency", easyFixationFrequencies, hardFixationFrequencies]);
      setAllSingleValuesChartData(allData);
    }

    // TODO: Does not work because the values have too much of a discrepancies.
    // if (easyAvgSaccadeLength !== undefined && hardAvgSaccadeLength !== undefined) {
    //   allData.push(["Saccades Avg. Length", easyAvgSaccadeLength, hardAvgSaccadeLength]);
    //   setAllSingleValuesChartData(allData);
    // }
  };

  // render charts based on data
  const renderChart = async () => {
    setBarChartData();
    setBarChartFixationDurationData();
    setSaccadeVelocitiesHorizontalChartData();
    setSaccadeVelocitiesVerticalChartData();
    setSingleValueComparisonChartData();
  };

  return (
    <ResultContainer>
      {/* {console.log("HI")} */}
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
            {easyColumnDurationData !== undefined ? (
              <Chart chartType="LineChart" data={easyColumnDurationData} loader={<CircularProgress />} options={getColumnChartDurationsOptions(ReadingLevel.EASY)} legendToggle />
            ) : (
              "No Data"
            )}
          </ResultChartWrapper>
          <ResultChartWrapper>
            {hardColumnDurationData !== undefined ? (
              <Chart chartType="LineChart" data={hardColumnDurationData} loader={<CircularProgress />} options={getColumnChartDurationsOptions(ReadingLevel.HARD)} legendToggle />
            ) : (
              "No Data"
            )}
          </ResultChartWrapper>
        </ResultRow>

        {/* Horizontal Saccade Velocities */}
        <ResultRow>
          <ResultChartWrapper>
            {easySaccadeHorizontalVelocitiesChartData !== undefined ? (
              <Chart
                chartType="LineChart"
                data={easySaccadeHorizontalVelocitiesChartData}
                loader={<CircularProgress />}
                options={getSaccadeVelocityOptions(ReadingLevel.EASY, OrientationState.HORIZONTAL)}
                legendToggle
              />
            ) : (
              "No Data"
            )}
          </ResultChartWrapper>
          <ResultChartWrapper>
            {hardSaccadeHorizontalVelocitiesChartData !== undefined ? (
              <Chart
                chartType="LineChart"
                data={hardSaccadeHorizontalVelocitiesChartData}
                loader={<CircularProgress />}
                options={getSaccadeVelocityOptions(ReadingLevel.HARD, OrientationState.HORIZONTAL)}
                legendToggle
              />
            ) : (
              "No Data"
            )}
          </ResultChartWrapper>
        </ResultRow>

        <ResultRow>
          <ResultChartWrapper>
            {easySaccadeVerticalVelocitiesChartData !== undefined ? (
              <Chart
                chartType="LineChart"
                data={easySaccadeVerticalVelocitiesChartData}
                loader={<CircularProgress />}
                options={getSaccadeVelocityOptions(ReadingLevel.EASY, OrientationState.VERTICAL)}
                legendToggle
              />
            ) : (
              "No Data"
            )}
          </ResultChartWrapper>
          <ResultChartWrapper>
            {hardSaccadeVerticalVelocitiesChartData !== undefined ? (
              <Chart
                chartType="LineChart"
                data={hardSaccadeVerticalVelocitiesChartData}
                loader={<CircularProgress />}
                options={getSaccadeVelocityOptions(ReadingLevel.HARD, OrientationState.VERTICAL)}
                legendToggle
              />
            ) : (
              "No Data"
            )}
          </ResultChartWrapper>
        </ResultRow>

        <ResultRow>
          <ResultChartWrapper>
            {allSingleValuesChartData !== undefined ? (
              <Chart chartType="ColumnChart" data={allSingleValuesChartData} loader={<CircularProgress />} options={getSingleValueOptions()} legendToggle />
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
