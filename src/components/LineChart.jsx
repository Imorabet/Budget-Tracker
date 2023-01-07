import React from "react";
import { Doughnut, Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
Chart.register(ArcElement, Tooltip, Legend);

//defaults.global.tooltips.enabled = false
//defaults.global.legend.position = 'bottom'

const BarChart = ({ income, expense }) => {
  const labels = ["Expenses", "Balance", "Incomes"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "# of Votes",
        data: [expense, income - expense, income],
        backgroundColor: [
          "rgba(255, 99, 132)",
          "rgba(54, 162, 235)",
          "rgba(75, 192, 192)",
        ],
        borderColor: [
         
        ],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="chart">
       <h2>Budget's graph</h2>
      <Doughnut data={data} />
    </div>
  );
};

export default BarChart;
