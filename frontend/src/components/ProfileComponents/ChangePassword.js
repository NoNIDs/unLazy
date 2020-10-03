import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";

function ChangePassword(props) {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    props.changePassword(oldPassword, newPassword);

    //clean
    setOldPassword("");
    setNewPassword("");
  }
  return (
    <div className="container">
      <h3 className="block-title">Change your password</h3>
      <form className="change-password-form flex" onSubmit={handleSubmit}>
        <div className="change-password-form-input-block flex">
          <TextField
            variant="outlined"
            margin="normal"
            required
            id="oldPassword"
            label="Enter your current password"
            name="oldPassword"
            autoComplete="password"
            autoFocus
            type="password"
            value={oldPassword}
            onChange={(e) => {
              setOldPassword(e.target.value);
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            id="newPassword"
            label="Enter your new password"
            name="newPassword"
            type="password"
            value={newPassword}
            onChange={(e) => {
              setNewPassword(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn">
          Change password
        </button>
      </form>
    </div>
  );
}

export default ChangePassword;
