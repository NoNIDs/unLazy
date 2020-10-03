import React from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import { logout, changeUsername, changePassword } from "../../actions/auth";

import ChangePassword from "../ProfileComponents/ChangePassword";
import ProfileStatus from "../ProfileComponents/ProfileStatus";
import ChartShortStatistic from "../StatisticComponents/ChartShortStatistic";

function Profile(props) {
  return (
    <div className="container flex-row">
      <ChartShortStatistic data={props.statistic} />
      <ProfileStatus
        points={props.statistic.pointsLevel}
        username={props.user.username}
        logout={props.logout}
        error={props.error}
        changeUsername={props.changeUsername}
      />
      <ChangePassword changePassword={props.changePassword} />
    </div>
  );
}

Profile.propTypes = {
  statistic: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  error: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  changeUsername: PropTypes.func.isRequired,
  changePassword: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  statistic: state.statistic,
  user: state.auth.user,
  error: state.errors,
});

export default connect(mapStateToProps, {
  logout,
  changeUsername,
  changePassword,
})(Profile);
