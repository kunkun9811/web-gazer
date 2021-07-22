import React, { useEffect } from "react";
import { ResultContainer, ResultInnerContainer, ResultColumn1, ResultColumn2, ResultChart } from "./ResultZingChartElements";
import EmbedSDK from "@mongodb-js/charts-embed-dom";

const ResultZingChart = ({ easyReadData, hardReadData }) => {
  /* Listeners*/
  useEffect(() => {
    renderChart();
  }, []);

  /* Methods */
  const renderChart = async () => {};

  return (
    <ResultContainer>
      <ResultInnerContainer>
        <ResultColumn1>{easyReadData ? <ResultChart id="easy_reading" /> : "No Data"}</ResultColumn1>
        <ResultColumn2>{hardReadData ? <ResultChart id="hard_reading" /> : "No Data"}</ResultColumn2>
      </ResultInnerContainer>
    </ResultContainer>
  );
};

export default ResultZingChart;
