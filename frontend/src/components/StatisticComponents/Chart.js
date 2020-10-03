import React from "react";

import "tui-chart/dist/tui-chart.css";
import { PieChart } from "@toast-ui/react-chart";
import TuiChart from "tui-chart";

function Chart(props) {
  //   debugger;
  //data for chart
  var data = {
    categories: ["Tasks statistic"],
    series: [
      {
        name: "Complete tasks",
        data: props.data.completeTasks,
      },
      {
        name: "Failed tasks",
        data: props.data.failedTasks,
      },
    ],
  };

  //options object config for chart
  var options = {
    chart: {
      width: 400,
      height: 400,
      //   title: {
      //     text: "Short statistic about your profile",
      //     align: "center",
      //   },
    },
    series: {
      showLegend: true,
      showLabel: true,
      labelAlign: "center",
    },
    legend: {
      visible: false,
    },
    theme: "theme",
  };

  //theme object config for chart
  var theme = {
    chart: {
      fontFamily: "NeoSans, sans-serif",
      background: "#fbf8ef",
    },
    series: {
      series: {
        colors: [
          "#83b14e",
          "#458a3f",
          "#295ba0",
          "#2a4175",
          "#289399",
          "#289399",
          "#617178",
          "#8a9a9a",
          "#516f7d",
          "#dddddd",
        ],
      },
      label: {
        color: "#0f1923",
        fontFamily: "NeoSans, sans-serif",
      },
    },
    plot: {
      background: "#fbf8ef",
    },
  };
  TuiChart.registerTheme("theme", theme);

  return <PieChart className="chart" data={data} options={options}></PieChart>;
}

export default Chart;
