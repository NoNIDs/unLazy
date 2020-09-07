import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { enableNotify, disableNotify } from "../../actions/notify";

function AuthMenu(props) {
  const { notify } = props.notify;

  const [notifyValue, setNotifyValue] = useState(notify);

  useEffect(() => {
    if (notifyValue) enableNotify(notifyValue);
    else disableNotify(notifyValue);
    console.log(notifyValue, "suck");
  });

  function changeNotifyValue() {
    setNotifyValue(!notifyValue);
  }

  // console.log("fas " + (notifyValue ? "fa-bell" : "fa-bell-slash"));
  return (
    <NavBar>
      <NavItem
        icon={"fas " + (notifyValue ? "fa-bell" : "fa-bell-slash")}
        changeNotifyValue={changeNotifyValue}
      ></NavItem>
      <NavItem icon="fas fa-chevron-down">
        <DropDownMenu
          notifyValue={notifyValue}
          changeNotifyValue={changeNotifyValue}
        ></DropDownMenu>
      </NavItem>
    </NavBar>
  );
}

function NavBar(props) {
  return (
    <div className="auth-menu">
      <ul className="auth-menu-container">{props.children}</ul>
    </div>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);
  // const dropDownRef = useRef(null);

  // useEffect(() => {
  //   window.addEventListener("click", (e) => {
  //     if (e.target !== dropDownRef.current) {
  //       setOpen(false);
  //       console.log(dropDownRef);
  //     }
  //   });
  // }, []);

  return (
    <li className="auth-menu-item">
      <Link
        to="#"
        className={"icon-button " + props.icon}
        onClick={() => {
          setOpen(!open);
          try {
            props.changeNotifyValue();
          } catch {
            //
          }
        }}
        replace
      ></Link>
      {open && props.children}
    </li>
  );
}

function DropDownMenu(props) {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropDownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropDownRef.current?.firstChild.offsetHeight + 30);
    // console.log(dropDownRef.current);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height + 30);
  }

  function DropDownItem(props) {
    return (
      <Link
        className="auth-menu-item-link"
        onClick={() => {
          props.goToMenu && setActiveMenu(props.goToMenu);
          try {
            props.changeNotifyValue();
          } catch {
            //
          }
        }}
        to={props.link}
        replace
      >
        <i className={"icon-button " + props.leftIcon}></i>
        {props.children}
        <i className={"icon-right " + props.rightIcon}></i>
      </Link>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropDownRef}>
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        className="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropDownItem leftIcon="fas fa-user" link="profile">
            <p className="menu-item-title">My profile</p>
          </DropDownItem>
          <DropDownItem leftIcon="fas fa-cog" goToMenu="settings" link="#">
            <p className="menu-item-title">Settings</p>
          </DropDownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        timeout={500}
        className="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropDownItem goToMenu="main" leftIcon="fas fa-chevron-left" link="#">
            <p className="menu-item-title">Main menu</p>
          </DropDownItem>
          <DropDownItem
            leftIcon={
              "fas " + (props.notifyValue ? "fa-bell" : "fa-bell-slash")
            }
            link="#"
            changeNotifyValue={props.changeNotifyValue}
          >
            <p className="menu-item-title">Notifications</p>
          </DropDownItem>
          <DropDownItem link="#">
            <p className="menu-item-title">//TODO</p>
          </DropDownItem>
          <DropDownItem link="#">
            <p className="menu-item-title">//TODO</p>
          </DropDownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

AuthMenu.propTypes = {
  notify: PropTypes.object.isRequired,
  enableNotify: PropTypes.func.isRequired,
  disableNotify: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  notify: state.notify,
});

export default connect(mapStateToProps, { enableNotify, disableNotify })(
  AuthMenu
);
