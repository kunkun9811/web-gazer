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

export const getBarChartOptions = (isEasy) => {
  //   console.log(`isEasy = ${isEasy}`);
  const title = isEasy ? "Time Series of Number of Points in Fixation (Easy)" : "Time Series of Number of Points in Fixation (Hard)";
  const color = isEasy ? ["#7BB9FF"] : ["#e81a0c"];

  const options = {
    title: title,
    width: "100%",
    height: "100%",
    titleTextStyle: {
      fontSize: 20, // 12, 18 whatever you want (don't specify px)
    },
    colors: color,
  };

  return options;
};
