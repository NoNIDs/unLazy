import React, { useContext } from "react";
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
  const task = props.task;
  const { removeTask } = useContext(Context);
  return (
    <tr className="task-item">
      <td className="completed-btn">
        <Checkbox
          className="completed-checkbox"
          color="primary"
          inputProps={{ "aria-label": "secondary checkbox" }}
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
          onClick={removeTask.bind(null, task.task_id)}
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
}

export default TaskItem;
