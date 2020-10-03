import React from "react";

import { connect } from "react-redux";

import ChartShortStatistic from "../StatisticComponents/ChartShortStatistic";

function Statistic(props) {
  return (
    <div className="container">
      <h1 className="header">Statistic your profile</h1>
      <ChartShortStatistic data={props.statistic} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  statistic: state.statistic,
});
export default connect(mapStateToProps)(Statistic);
