import React, { useState, useEffect } from "react";
import Context from "../../context";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  getTasks,
  deleteTask,
  createTask,
  changeTask,
} from "../../actions/tasks";
import { setCompleteTask } from "../../actions/statistic";

import TaskList from "../SchedulerComponents/TaskList";
import TaskButton from "../common/TaskButton";
import AddTaskPopup from "../common/AddTaskPopup";

function Scheduler(props) {
  const [popup, setPopup] = useState(false);
  const isFirstTask = props.tasks.length === 0;

  const [currentTask, setCurrentTask] = useState(null);
  const [changeTaskTrigger, setChangeTaskTrigger] = useState(false);

  const [sortParams, setSortParams] = useState("");

  // initialize data
  useEffect(() => {
    props.getTasks(sortParams);
  }, [sortParams]);

  //sort by ... values
  function setSorted(sortValue) {
    setSortParams(sortValue);
  }
  // popup methods
  function closePopup() {
    setPopup(false);
    setChangeTaskTrigger(false);
    setCurrentTask(null);
  }

  function openPopup() {
    setPopup(true);
  }

  function openChangePopup(task) {
    setCurrentTask(task);
    setChangeTaskTrigger(true);
    setPopup(true);
  }

  // change value of task
  function changeTaskValues(id, task) {
    props.changeTask(id, task);
  }

  // task methods
  function addTask(taskObj) {
    props.createTask(taskObj);
  }

  function removeTask(id) {
    props.deleteTask(id);
  }

  function checkedTask(id) {
    props.setCompleteTask(props.completeTasks);
    props.deleteTask(id);
  }

  return (
    <Context.Provider
      value={{
        removeTask,
        checkedTask,
        openPopup,
        openChangePopup,
      }}
    >
      <div className="container">
        <h1 className="page-title">Scheduler</h1>
        <TaskList tasks={props.tasks} setSorted={setSorted}></TaskList>
      </div>
      <TaskButton openPopup={openPopup} isFirstTask={isFirstTask}></TaskButton>
      {popup ? (
        <AddTaskPopup
          task={currentTask}
          changeTaskCheck={changeTaskTrigger}
          closePopup={closePopup}
          addTask={addTask}
          changeTaskValues={changeTaskValues}
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
  changeTask: PropTypes.func.isRequired,
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
  changeTask,
  setCompleteTask,
})(Scheduler);
