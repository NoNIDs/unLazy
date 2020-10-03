import React, { useEffect, useState } from "react";

import { calcLevel } from "../common/utils";

import ChangeUsername from "./ChangeUsername";

function ProfileStatus(props) {
  const [level, setLevel] = useState(1);

  useEffect(() => {
    if (props.points > 0) setLevel(calcLevel(props.points));
  }, [props.points]);

  return (
    <div className="container flex-column">
      <div className="level-block block-title">
        <span className="level-value">{level}</span>Level
      </div>
      <div className="profile-status-visualisable-block">cholovichok</div>
      <div className="username-block flex-column">
        <ChangeUsername
          value={props.username}
          changeUsername={props.changeUsername}
          error={props.error}
        />
        <button className="btn" onClick={props.logout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default ProfileStatus;
