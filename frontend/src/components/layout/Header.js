import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

import Menu from "./Menu";
import AuthComponent from "./AuthComponent";

function Header(props) {
  const { isAuthenticated, user } = props.auth;

  return (
    <div className="nav-container">
      <Menu isAuth={isAuthenticated} logout={props.logout} />
      <AuthComponent
        isAuth={isAuthenticated}
        logout={props.logout}
        user={user}
      />
    </div>
  );
}

Header.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);
