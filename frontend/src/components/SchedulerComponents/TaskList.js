import React, { useState, useEffect } from "react";

import TaskItem from "./TaskItem";
function TaskList(props) {
  const [sortValue, setSortValue] = useState("");
  const [iconSort, setIconSort] = useState("");

  useEffect(() => {
    props.setSorted(sortValue);
  }, [sortValue]);

  function handleSortValue(value) {
    if (sortValue === `-${value}`) {
      setSortValue("");
      //without sort icon
      setIconSort("");
    } else if (sortValue !== value) {
      setSortValue(value);
      //with sort icon (ASC)
      setIconSort("fas fa-angle-up");
    } else if (sortValue === value) {
      setSortValue(`-${value}`);
      //with sort icon(DESC)
      setIconSort("fas fa-angle-down");
    }
  }

  return (
    <table className="task-list">
      <thead className="task-list-header-container">
        <tr className="task-list-header">
          <th className="completed-btn"></th>
          <th className="task-name" onClick={() => handleSortValue("taskName")}>
            Task
            {(iconSort && sortValue === "taskName") ||
            sortValue === "-taskName" ? (
              <i className={iconSort}></i>
            ) : (
              ""
            )}
          </th>
          <th
            className="task-deadline"
            onClick={() => handleSortValue("deadlineDate")}
          >
            Deadline task
            {(iconSort && sortValue === "deadlineDate") ||
            sortValue === "-deadlineDate" ? (
              <i className={iconSort}></i>
            ) : (
              ""
            )}
          </th>
          <th
            className="task-priority"
            onClick={() => handleSortValue("priority")}
          >
            Priority
            {(iconSort && sortValue === "priority") ||
            sortValue === "-priority" ? (
              <i className={iconSort}></i>
            ) : (
              ""
            )}
          </th>
          <th
            className="task-complexity"
            onClick={() => handleSortValue("complexity")}
          >
            Complexity
            {(iconSort && sortValue === "complexity") ||
            sortValue === "-complexity" ? (
              <i className={iconSort}></i>
            ) : (
              ""
            )}
          </th>
          <th className="task-delete-btn"></th>
        </tr>
      </thead>
      <tbody className="task-list-items">
        {props.tasks.map((item) => (
          <TaskItem key={item.task_id} task={item}></TaskItem>
        ))}
      </tbody>
    </table>
  );
}

export default TaskList;
