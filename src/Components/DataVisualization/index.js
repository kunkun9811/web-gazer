import React, { useState } from "react";
import "./DataVisualization.css";
import { Bar } from "react-chartjs-2";

const DataVisualization = () => {
  const [data, setData] = useState([10, 20, 30, 40, 50, 60, 70]);
  const [barConfig, setBarConfig] = useState({
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  return (
    <div className="data-visualization-container">
      <div className="bar-container">
        <Bar
          data={{
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [
              {
                label: "# of Votes",
                data: [12, 19, 3, 5, 2, 3],
                // backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(255, 159, 64, 0.2)"],
                // borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)"],
                // borderWidth: 1,
              },
            ],
          }}
          //   options={{ maintainAspectRatio: true  }}
        />
      </div>
    </div>
  );
};

export default DataVisualization;
