import React from "react";

function TaskButton(props) {
  return (
    <div className="task-btn-container">
      {props.isFirstTask ? (
        <div className="task-btn-helper">
          <i className="fas fa-arrow-left"></i>
          <p className="task-btn-helper-title">Click to add first task</p>
        </div>
      ) : (
        ""
      )}
      <button className="task-btn">
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
}

export default TaskButton;
