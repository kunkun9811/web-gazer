import React, { useState } from "react";
import "./DataVisualization.css";
import "zingchart/es6";
import ZingChart from "zingchart-react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const DataVisualization = () => {
  const classes = useStyles();

  const [data, setData] = useState([10, 20, 30, 40, 50, 60, 70]);
  // zingchart bar chart data
  const [barConfig, setBarConfig] = useState({
    type: "bar",
    series: [
      {
        values: [4, 5, 3, 4, 5, 3, 5, 4, 11],
      },
    ],
  });

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1 id="data-visualization-title">Data Visualization</h1>
        </Grid>
        <Grid item xs={12} lg={3}>
          <ZingChart data={barConfig} />
        </Grid>
        <Grid item xs={12} lg={3}>
          <ZingChart data={barConfig} />
        </Grid>
        <Grid item xs={12} lg={3}>
          <ZingChart data={barConfig} />
        </Grid>
        <Grid item xs={12} lg={3}>
          <ZingChart data={barConfig} />
        </Grid>
        <Grid item xs={12} lg={3}>
          <ZingChart data={barConfig} />
        </Grid>
        <Grid item xs={12} lg={3}>
          <ZingChart data={barConfig} />
        </Grid>
        <Grid item xs={12} lg={3}>
          <ZingChart data={barConfig} />
        </Grid>
        <Grid item xs={12} lg={3}>
          <ZingChart data={barConfig} />
        </Grid>
        <Grid item xs={12} lg={3}>
          <ZingChart data={barConfig} />
        </Grid>
        <Grid item xs={12} lg={3}>
          <ZingChart data={barConfig} />
        </Grid>
        <Grid item xs={12} lg={3}>
          <ZingChart data={barConfig} />
        </Grid>
        <Grid item xs={12} lg={3}>
          <ZingChart data={barConfig} />
        </Grid>
      </Grid>
    </div>
  );
};

export default DataVisualization;
