import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";

function AuthMenu() {
  return (
    <NavBar>
      <NavItem icon="fas fa-bell"></NavItem>
      <NavItem icon="fas fa-chevron-down">
        <DropDownMenu></DropDownMenu>
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

  return (
    <li className="auth-menu-item">
      <Link
        to="#"
        className={"icon-button " + props.icon}
        onClick={() => setOpen(!open)}
      ></Link>
      {open && props.children}
    </li>
  );
}

function DropDownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropDownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropDownRef.current?.firstChild.offsetHeight + 30);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    console.log(height);
    setMenuHeight(height + 30);
  }

  function DropDownItem(props) {
    return (
      <Link
        className="auth-menu-item-link"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
        to={props.link}
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
          <DropDownItem leftIcon="fas fa-bell" link="#">
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

export default AuthMenu;
