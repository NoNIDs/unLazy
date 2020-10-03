import React, { useState, useEffect } from "react";

import debounce from "lodash.debounce";
import useHotkeys from "use-hotkeys";

function ChangeUsername(props) {
  const [changeStatus, setChangeStatus] = useState(false);
  const [value, setValue] = useState(props.value);
  const [pressKey, setPress] = useState(false);

  //   const handleChange = debounce((e) => {
  //     setValue(e.target.value);
  //   }, 1000);

  useEffect(() => {
    if (!props.error.status) {
      setChangeStatus(false);
      setPress(false);
    } else setValue(props.value);
  }, [props.error, pressKey]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useHotkeys(
    (key, event, handle) => {
      switch (key) {
        case "Enter":
          props.changeUsername(value);
          setPress(true);
          break;
        default:
          return setValue(value);
      }
    },
    ["Enter"],
    [value]
  );

  return (
    <div className="change-component">
      {changeStatus ? (
        <div className="value-enter">
          <input type="text" value={value} onChange={handleChange} />
          <i className="fas fa-pen"></i>
        </div>
      ) : (
        <div className="value-done">
          <span>{value}</span>
          <a className="fas fa-pen" onClick={() => setChangeStatus(true)}></a>
        </div>
      )}
    </div>
  );
}

export default ChangeUsername;
