import React, { useEffect } from "react";

import { connect } from "react-redux";

import { getUsers } from "../../actions/rating";

import RatingItem from "../RatingComponents/RatingItem";

function Rating(props) {
  useEffect(() => {
    props.getUsers(5); //limit views users
  }, []);
  return (
    <div className="container">
      <div className="rating-header">
        <div className="rating-header-icon-container">
          <i className="fas fa-crown rating-header-icon"></i>
        </div>
        <h1 className="header rating-header-title">Rating</h1>
      </div>
      <div className="rating-list-container">
        {props.users.map((user, index) => {
          if (index === 0)
            return (
              <RatingItem
                key={user.id}
                user={user}
                flag={"firstPosition"}
                currentUserFlag={props.currentUsername}
              />
            );
          if (index === 1)
            return (
              <RatingItem
                key={user.id}
                user={user}
                flag={"secondPosition"}
                currentUserFlag={props.currentUsername}
              />
            );
          if (index === 2)
            return (
              <RatingItem
                key={user.id}
                user={user}
                flag={"thirdPosition"}
                currentUserFlag={props.currentUsername}
              />
            );
          return (
            <RatingItem
              key={user.id}
              user={user}
              currentUserFlag={props.currentUsername}
            />
          );
        })}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentUsername: state.auth.user.username,
  users: state.rating.users,
});

export default connect(mapStateToProps, { getUsers })(Rating);
