import React, { useEffect } from "react";
import { ResultContainer, ResultInnerContainer, ResultColumn1, ResultColumn2, ResultChart } from "./ResultElements";
import EmbedSDK from "@mongodb-js/charts-embed-dom";

const Result = ({ easyReadDocId, hardReadDocId }) => {
  /* Listeners*/
  useEffect(() => {
    renderChart();
  }, []);

  /* Methods */
  const renderChart = async () => {
    // MongoDB only accept ObjectId objects for "_id"
    const ObjectID = require("mongodb").ObjectId;

    console.log("**************************MONGODB**************************");
    console.log(require("mongodb"));

    // Easy Reading Chart
    if (easyReadDocId) {
      const sdk = new EmbedSDK({
        baseUrl: "https://charts.mongodb.com/charts-eye-tracker-rwshq",
      });

      const chart = sdk.createChart({
        chartId: "8e86d46e-d67b-49c3-bff2-701f4336762e",
        width: 740,
        height: 600,
        theme: "dark",
      });
      const easyChartObjectId = new ObjectID.createFromHexString(easyReadDocId);
      await chart.render(document.getElementById("easy_reading")).then((val) => {
        chart.setFilter({ _id: easyChartObjectId });
      });
    }
    // Hard Reading Chart
    if (hardReadDocId) {
      const sdk = new EmbedSDK({
        baseUrl: "https://charts.mongodb.com/charts-eye-tracker-rwshq",
      });

      const chart = sdk.createChart({
        chartId: "8c58e6d3-2bdf-4c0a-965a-24f6bfa928fe",
        width: 740,
        height: 600,
        theme: "dark",
      });
      const hardChartObjectId = new ObjectID.createFromHexString(hardReadDocId);
      await chart.render(document.getElementById("hard_reading")).then((val) => {
        chart.setFilter({ _id: hardChartObjectId });
      });
    }
  };

  return (
    <ResultContainer>
      <ResultInnerContainer>
        {/* <ResultColumn1>{easyReadDocId === undefined ? "No Data" : null}</ResultColumn1> */}
        {/* <ResultColumn2>{objectId2 === undefined ? "No Data" : null}</ResultColumn2> */}
        <ResultColumn1>{easyReadDocId ? <ResultChart id="easy_reading" /> : "No Data"}</ResultColumn1>
        <ResultColumn2>{hardReadDocId ? <ResultChart id="hard_reading" /> : "No Data"}</ResultColumn2>
      </ResultInnerContainer>
    </ResultContainer>
  );
};

export default Result;
