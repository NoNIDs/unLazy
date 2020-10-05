import React, { useEffect, useState } from "react";

import { calcLevel } from "../common/utils";

function RatingItem(props) {
  const [position, setPosition] = useState("");
  const [currentUserStatus, setCurrentUserStatus] = useState(false);

  useEffect(() => {
    switch (props.flag) {
      case "firstPosition":
        setPosition(1);
        break;
      case "secondPosition":
        setPosition(2);
        break;

      case "thirdPosition":
        setPosition(3);
        break;
      default:
        setPosition("");
    }

    if (props.user.username === props.currentUserFlag)
      setCurrentUserStatus(true);
    else setCurrentUserStatus(false);
  }, []);

  function bgColorClass() {
    switch (position) {
      case 1:
        return "gold";
      case 2:
        return "silver";
      case 3:
        return "bronze";
      default:
        return "";
    }
  }
  return (
    <div className={`rating-item ` + bgColorClass()}>
      {position ? <span className="rating-item-top">{position}</span> : ""}
      <p
        className={`rating-item-username ${
          currentUserStatus ? " active-user" : ""
        }`}
      >
        {props.user.username}
      </p>
      <span className="rating-item-level">
        {calcLevel(props.user.pointsLevel)} level
      </span>
    </div>
  );
}

export default RatingItem;
