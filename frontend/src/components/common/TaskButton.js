import React from "react";

function TaskButton({ isFirstTask, openPopup }) {
  return (
    <div className="task-btn-container">
      {isFirstTask ? (
        <div className="task-btn-helper">
          <i className="fas fa-arrow-left"></i>
          <p className="task-btn-helper-title">Click to add first task</p>
        </div>
      ) : (
        ""
      )}
      <button className="task-btn" onClick={() => openPopup()}>
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
}

export default TaskButton;
