import React, { useState } from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import AddTaskPopup from "../common/AddTaskPopup";
import TaskButton from "../common/TaskButton";

import { createTask } from "../../actions/tasks";

function Front(props) {
  const { isAuthenticated } = props.auth;
  const [popup, setPopup] = useState(false);
  const isFirstTask = props.tasks.length === 0;

  function closePopup() {
    setPopup(false);
  }
  function openPopup() {
    setPopup(true);
  }

  function addTask(taskObj) {
    props.createTask(taskObj);
  }

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
      {isAuthenticated ? (
        <TaskButton
          openPopup={openPopup}
          isFirstTask={isFirstTask}
        ></TaskButton>
      ) : (
        ""
      )}
      {popup ? (
        <AddTaskPopup
          changeTaskCheck={false}
          closePopup={closePopup}
          addTask={addTask}
        ></AddTaskPopup>
      ) : (
        ""
      )}
    </div>
  );
}

Front.propTypes = {
  auth: PropTypes.object.isRequired,
  tasks: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  tasks: state.tasks.tasks,
});

export default connect(mapStateToProps, { createTask })(Front);
