import React from "react";
import { Link } from "react-router-dom";
import AuthMenu from "./AuthMenu";

function AuthComponent(props) {
  const authLinks = (
    <AuthMenu></AuthMenu>
    // <div className="col-md-2 d-flex justify-content-end">
    //   <div className="user-nav-container">
    //     <strong className="user-nav-username">
    //       {props.user ? `${props.user.username}` : ""}
    //     </strong>
    //     <button className="logout-btn btn" onClick={props.logout}>
    //       <i className="nav-menu-link-icon fas fa-sign-out-alt"></i>
    //       <strong className="logout-text">Logout</strong>
    //     </button>
    //   </div>
    // </div>
  );

  const guestLinks = (
    <ul className="nav-auth-menu col-md-2">
      <li className="nav-auth-item">
        <Link to="/login" className="nav-link">
          Login
        </Link>
      </li>
      <li className="nav-auth-item">
        <Link to="/register" className="nav-link">
          Register
        </Link>
      </li>
    </ul>
  );

  return (
    <div className="auth-container">
      {props.isAuth ? authLinks : guestLinks}
    </div>
  );
}

export default AuthComponent;
