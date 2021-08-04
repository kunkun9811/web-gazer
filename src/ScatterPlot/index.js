/* TODO: Need to use the RAW data (need to figure out which fixation) */
/* TODO: Using the fixation and saccades coordinates for now and see if it makes sense */
import React, { useState, useEffect } from "react";
import { Svg, SvgGroup } from "./ScatterPlotElements";
import "./ScatterPlot.css";
import { scaleLinear, extent, max } from "d3";
import AxisBottom from "./AxisBottom";
import AxisLeft from "./AxisLeft";
import Marks from "./Marks";
import BrowserDimensions from "../Components/Utils/BrowserDimensions";

/* NOTE: take array of {x,y} pair as input */
// xYCoordinates = [{x1,y1}, {x2, y2}, ...]
const ScatterPlot = ({ xYCoordinates, maxNumPointsInFixation }) => {
  /* Browser Dimensions */
  const { width: browserWidth, height: browserHeight } = BrowserDimensions();

  // console.log("===========================HERE ===========================");
  // console.log(browserWidth);
  // console.log(browserHeight);

  /* dimension of SVG window */
  const width = browserWidth;
  const height = browserHeight;

  /* margin of the plotting area (or padding of SVG window) */
  // TODO: Need to change margin to percentage of
  const margin = { top: 200, right: 50, bottom: 100, left: 50 };

  /* axis labels offset */
  const xAxisLabelOffset = 50;
  const yAxisLabelOffset = 45;

  /* states */
  const [data, setData] = useState(null);

  /* listeners */
  useEffect(() => {
    setData(xYCoordinates);
  }, []);

  // if data ready, render line chart using SVG
  if (data !== null) {
    /* dimensions of the plotting area */
    const innerHeight = height - margin.top - margin.bottom;
    const innerWidth = width - margin.left - margin.right;

    /* getter for looping through each object */
    const getXValue = (d) => d.x;
    const getYValue = (d) => d.y;

    /* Axis labels */
    // TODO: potentially set axis labels
    const xAxisLabel = "Time";
    const yAxisLabel = "Temperature";

    /* Linear Mapping from actual data to screen pixels */
    // domain from is [0, 100) because the fixation & saccade detection algorithms seemed to change raw pixels into percentages for detection purposes
    const xScale = scaleLinear()
      // .domain([0, browserWidth]) // for if input coordinates are raw pixels
      .domain([0, 100])
      .range([0, innerWidth])
      .nice();

    const yScale = scaleLinear()
      // .domain([0, browserHeight])  // for if input coordinates are raw pixels
      .domain([0, 100])
      .range([0, innerHeight])
      .nice();

    return (
      <Svg width={"100%"} height={"100%"} viewBox={`0 0 ${browserWidth} ${browserHeight}`}>
        <SvgGroup transform={`translate(${margin.left}, ${margin.top - 30})`}>
          <text>Easy Read Fixation + Saccade Trajectory</text>
        </SvgGroup>
        <SvgGroup transform={`translate(${margin.left}, ${margin.top})`}>
          <AxisBottom xScale={xScale} innerHeight={innerHeight} tickOffset={7} />
          <AxisLeft yScale={yScale} innerWidth={innerWidth} tickOffset={7} />
          <Marks data={data} xScale={xScale} getXValue={getXValue} yScale={yScale} getYValue={getYValue} maxNumPointsInFixation={maxNumPointsInFixation} />
        </SvgGroup>
      </Svg>
    );
  }

  // Loading text
  return <pre>Loading...</pre>;
};

export default ScatterPlot;
