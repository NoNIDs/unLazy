import React from "react";
import TaskButton from "../common/TaskButton";

import { connect } from "react-redux";
import PropTypes from "prop-types";

function Front(props) {
  const { isAuthenticated } = props.auth;

  return (
    <div className="front-container">
      <h1 className="page-title">Welcome to UnLazy</h1>
      <div className="prj-desc">
        <div className="prj-desc-item bg-blue  block-anim">
          <i className="fas fa-clipboard features-icon"></i>
          <h5 className="features-title">Планировщик задач</h5>
        </div>
        <div className="prj-desc-item bg-blue-light block-anim">
          <i className="fas fa-chart-pie features-icon"></i>
          <h5 className="features-title">Статистика клиента</h5>
        </div>
        <div className="prj-desc-item bg-orange block-anim">
          <i className="fas fa-cog features-icon features-icon-anim"></i>
          <h4 className="features-title features-logo">UnLazy</h4>
        </div>
        <div className="prj-desc-item bg-ocean block-anim">
          <i className="fas fa-star-half-alt features-icon"></i>
          <h5 className="features-title">Система уровней и рейтинга</h5>
        </div>
        <div className="prj-desc-item bg-ocean-light block-anim">
          <i className="fas fa-book-open features-icon"></i>
          <h5 className="features-title">Полезная информация и рекомендации</h5>
        </div>
      </div>
      {isAuthenticated ? <TaskButton isFirstTask={true}></TaskButton> : ""}
    </div>
  );
}

Front.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Front);
