import React, { useContext, useState, useEffect } from "react";
import Context from "../../context";

import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "#ff4655",
    "&:hover": {
      backgroundColor: "#cc2432",
    },
  },
}));

function TaskItem(props) {
  const classes = useStyles();

  let checkedTimeout;
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    if (checked)
      checkedTimeout = setTimeout(
        () => checkedTask(task.task_id, checked),
        3000
      );
  }, [checked]);

  const task = props.task;
  const { removeTask, checkedTask, openChangePopup } = useContext(Context);

  return (
    <tr
      className={`task-item ${checked ? "task-hide-anim" : ""}`}
      onClick={() => openChangePopup(task)}
    >
      <td className="completed-btn">
        <Checkbox
          checked={checked}
          className="completed-checkbox"
          color="primary"
          inputProps={{ "aria-label": "secondary checkbox" }}
          onClick={(e) => {
            e.stopPropagation();
            clearTimeout(checkedTimeout);
            setChecked(!checked);
          }}
        />
      </td>
      <td className="task-name">
        <p className="task-name-text">{task.taskName}</p>
      </td>
      <td className="task-deadline">
        <p className="task-deadline-value">{task.deadlineDate}</p>
      </td>
      <td className="task-priority">
        <p className="task-priority-value">{task.priority}</p>
      </td>
      <td className="task-complexity">
        <p className="task-complexity-value">{task.complexity}</p>
      </td>
      <td className="task-delete-btn">
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          onClick={(e) => {
            e.stopPropagation();
            removeTask(task.task_id);
          }}
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
}

export default TaskItem;
