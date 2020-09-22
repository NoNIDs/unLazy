import React from "react";

import TaskItem from "./TaskItem";
function TaskList(props) {
  return (
    <table className="task-list">
      <thead className="task-list-header-container">
        <tr className="task-list-header">
          <th className="completed-btn"></th>
          <th className="task-name">Task</th>
          <th className="task-deadline">Deadline task</th>
          <th className="task-priority">Priority</th>
          <th className="task-complexity">Complexity</th>
          <th className="task-delete-btn"></th>
        </tr>
      </thead>
      <tbody className="task-list-items">
        {props.tasks.map((item, index) => (
          <TaskItem key={index} task={item}></TaskItem>
        ))}
      </tbody>
    </table>
  );
}

export default TaskList;
