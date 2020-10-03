import React from "react";
import Chart from "./Chart";

function ChartShortStatistic(props) {
  return (
    <div className="container">
      <h3 className="block-title">Short statistic about your profile</h3>
      <Chart data={props.data} />
      <div className="short-desc-statistic">
        <p>
          Complete tasks: <span>{props.data.completeTasks}</span>
        </p>
        <p>
          Failed tasks: <span>{props.data.failedTasks}</span>
        </p>
      </div>
    </div>
  );
}

export default ChartShortStatistic;
