/* HAVE TO USE CLASSIC GOOGLE OPTIONS STYLE */

export const barChartOptions = {
  // TODO: perhaps not time series on x-axis and just for each consecutive fixation?
  title: "Time Series of Number of Points in Fixation",
  width: "100%",
  height: "100%",
  titleTextStyle: {
    fontSize: 20, // 12, 18 whatever you want (don't specify px)
  },
  colors: ["#e81a0c"],
  //   backgroundColor: "black",
};

export const getColumnChartNumPointsFixationOptions = (isEasy) => {
  var title = "Time Series of Number of Points in Fixation";
  title = isEasy ? `${title} (Easy)` : `${title} (Hard)`;
  const color = isEasy ? ["#7BB9FF"] : ["#e81a0c"];

  const options = {
    title: title,
    width: "100%",
    height: "100%",
    titleTextStyle: {
      fontSize: 20, // 12, 18 whatever you want (don't specify px)
    },
    hAxes: {
      0: { title: "Time" },
    },
    colors: color,
  };

  return options;
};

export const getColumnChartDurationsOptions = (isEasy) => {
  //   console.log(`isEasy = ${isEasy}`);
  var title = "Duration of Fixations";
  title = isEasy ? `${title} (Easy)` : `${title} (Hard)`;
  const color = isEasy ? ["#7BB9FF"] : ["#e81a0c"];

  const options = {
    title: title,
    width: "100%",
    height: "100%",
    titleTextStyle: {
      fontSize: 20, // 12, 18 whatever you want (don't specify px)
    },
    hAxes: {
      0: { title: "Fixation" },
    },
    colors: color,
  };

  return options;
};

export const getSaccadeVelocityOptions = (isEasy, isHorizontal) => {
  //   console.log(`isEasy = ${isEasy}`);
  var title = isHorizontal ? "Horizontal Velocities of Saccades" : "Vertical Velocities of Saccades";
  title = isEasy ? `${title} (Easy)` : `${title} (Hard)`;
  const color = isEasy ? ["#7BB9FF"] : ["#e81a0c"];

  const options = {
    title: title,
    width: "100%",
    height: "100%",
    titleTextStyle: {
      fontSize: 20, // 12, 18 whatever you want (don't specify px)
    },
    hAxes: {
      0: { title: "Saccade" },
    },
    colors: color,
  };

  return options;
};

export const getSingleValueOptions = () => {
  //   console.log(`isEasy = ${isEasy}`);
  const title = "Easy vs. Hard";

  const options = {
    title: title,
    width: "100%",
    height: "100%",
    titleTextStyle: {
      fontSize: 20, // 12, 18 whatever you want (don't specify px)
    },
    hAxes: {
      0: { title: "Category" },
    },
  };

  return options;
};
