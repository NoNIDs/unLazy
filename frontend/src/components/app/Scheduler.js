import React, { useState, useEffect } from "react";
import Context from "../../context";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getTasks, deleteTask, createTask } from "../../actions/tasks";
import { setCompleteTask } from "../../actions/statistic";

import TaskList from "../SchedulerComponents/TaskList";
import TaskButton from "../common/TaskButton";
import AddTaskPopup from "../common/AddTaskPopup";

function Scheduler(props) {
  const [popup, setPopup] = useState(false);
  const isFirstTask = props.tasks.length === 0;

  // initialize data
  useEffect(() => {
    props.getTasks();
  }, []);

  // popup methods
  function closePopup() {
    setPopup(false);
  }

  function openPopup() {
    setPopup(true);
  }

  // task methods
  function addTask(taskObj) {
    props.createTask(taskObj);
  }

  function removeTask(id) {
    props.deleteTask(id);
  }

  // function checkedTask(id) {
  //   props;
  // }

  return (
    <Context.Provider value={{ removeTask }}>
      <div className="container">
        <h1 className="page-title">Scheduler</h1>
        <TaskList tasks={props.tasks}></TaskList>
      </div>
      <TaskButton openPopup={openPopup} isFirstTask={isFirstTask}></TaskButton>
      {popup ? (
        <AddTaskPopup
          changeTaskCheck={false}
          closePopup={closePopup}
          addTask={addTask}
        ></AddTaskPopup>
      ) : (
        ""
      )}
    </Context.Provider>
  );
}

Scheduler.propTypes = {
  getTasks: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  createTask: PropTypes.func.isRequired,
  setCompleteTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
  completeTasks: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  tasks: state.tasks.tasks,
  completeTasks: state.statistic.completeTasks,
});

export default connect(mapStateToProps, {
  getTasks,
  deleteTask,
  createTask,
  setCompleteTask,
})(Scheduler);
