import React, { useState } from "react";

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";

import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "-8px",
  },
}));

function AddTaskPopup({ addTask, changeTaskCheck, closePopup }) {
  const classes = useStyles();

  const [taskName, setTaskName] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [deadlineDate, setDeadlineDate] = useState(new Date());
  const [priority, setPriority] = useState(1);
  const [complexity, setComplexity] = useState(1);

  function handleDateChange(date) {
    setDeadlineDate(date);
  }

  function submitHandler(e) {
    e.preventDefault();

    let deadline = deadlineDate.toLocaleDateString("en-us");
    if (deadline.charAt(0) !== "0") deadline = "0" + deadline; // correct date format for server (mm/dd/YYYY)

    addTask({
      taskName,
      taskDesc,
      deadlineDate: deadline,
      priority,
      complexity,
    });
  }

  return (
    <div className="overlay">
      <div className="popup-container">
        <div className="form-add-task-container">
          <form className="form-add-task" onSubmit={submitHandler}>
            <h1 className="form-add-task-title">Task</h1>
            <TextField
              variant="outlined"
              margin="normal"
              required
              id="taskName"
              label="Name of task"
              name="taskName"
              autoComplete="taskName"
              autoFocus
              value={taskName}
              onChange={(e) => {
                setTaskName(e.target.value);
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              id="taskDesc"
              label="Description of task"
              name="taskDesc"
              autoComplete="taskDesc"
              autoFocus
              value={taskDesc}
              onChange={(e) => {
                setTaskDesc(e.target.value);
              }}
            />
            <div className="form-add-task-subcontainer">
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Date deadline"
                  value={deadlineDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </MuiPickersUtilsProvider>
              <FormControl>
                <InputLabel id="demo-simple-select-helper-label">
                  Priority
                </InputLabel>
                <Select
                  className={classes.root}
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={9}>9</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                </Select>
              </FormControl>
              <FormControl>
                <InputLabel id="demo-simple-select-helper-label">
                  Complexity
                </InputLabel>
                <Select
                  className={classes.root}
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={complexity}
                  onChange={(e) => setComplexity(e.target.value)}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={9}>9</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="form-add-task-btn-container">
              {changeTaskCheck ? (
                <button type="submit" className="btn">
                  Change task
                </button>
              ) : (
                ""
              )}
              <button type="submit" className="btn">
                Add task
              </button>
            </div>
          </form>
        </div>
        <button className="popup-closeBtn" onClick={() => closePopup()}>
          <i className="fas fa-times"></i>
        </button>
      </div>
    </div>
  );
}

export default AddTaskPopup;
