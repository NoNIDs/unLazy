import React from "react";
import { Link, useLocation } from "react-router-dom";

function Menu(props) {
  let location = useLocation();
  location = location.pathname;
  console.log(location);
  return (
    <nav className="nav-menu">
      <ul className="nav-menu-list">
        <li className="nav-menu-logo-container">
          <div className="nav-menu-logo">
            <i className="fab fa-buffer"></i>
          </div>
          <h3 className="nav-menu-link-title nav-menu-brandName">UnLazy</h3>
        </li>
        <li className="nav-menu-item">
          <Link
            id="home"
            className={`nav-menu-link ${location === "/" ? "active" : ""}`}
            to="/"
          >
            <i className="nav-menu-link-icon fas fa-home"></i>
            <span className="nav-menu-link-title">Home</span>
          </Link>
        </li>
        <li className="nav-menu-item">
          <Link
            id="profile"
            className={`nav-menu-link ${
              location === "/profile" ? "active" : ""
            }`}
            to="/profile"
          >
            <i className="nav-menu-link-icon fas fa-user-circle"></i>
            <span className="nav-menu-link-title">Profile</span>
          </Link>
        </li>
        <li className="nav-menu-item">
          <Link
            id="scheduler"
            className={`nav-menu-link ${
              location === "/scheduler" ? "active" : ""
            }`}
            to="/scheduler"
          >
            <i className="nav-menu-link-icon fas fa-calendar-check"></i>
            <span className="nav-menu-link-title">Scheduler</span>
          </Link>
        </li>
        <li className="nav-menu-item">
          <Link
            id="rating"
            className={`nav-menu-link ${
              location === "/rating" ? "active" : ""
            }`}
            to="/rating"
          >
            <i className="nav-menu-link-icon fas fa-crown"></i>
            <span className="nav-menu-link-title">Rating</span>
          </Link>
        </li>
        <li className="nav-menu-item">
          <Link
            id="statistic"
            className={`nav-menu-link ${
              location === "/statistic" ? "active" : ""
            }`}
            to="/statistic"
          >
            <i className="nav-menu-link-icon fas fa-chart-pie"></i>
            <span className="nav-menu-link-title">Statistic</span>
          </Link>
        </li>
        <li className="nav-menu-item">
          <Link
            id="articles"
            className={`nav-menu-link ${
              location === "/articles" ? "active" : ""
            }`}
            to="/articles"
          >
            <i className="nav-menu-link-icon fas fa-book"></i>
            <span className="nav-menu-link-title">Articles</span>
          </Link>
        </li>
        <li className="nav-menu-item">
          <Link
            id="logout"
            className="nav-menu-link"
            to="/"
            onClick={props.logout}
          >
            <i className="nav-menu-link-icon fas fa-sign-out-alt"></i>
            <span className="nav-menu-link-title">Logout</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
