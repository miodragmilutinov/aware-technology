import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const SideNav = () => {
  const [active, setActive] = useState(true);

  function handleClick() {
    setActive((active) => !active);
  }

  let toggleClassCheck = active ? "border" : "";

  return (
    <nav className="sidebar">
      <header>SchoolLogo</header>
      <ul>
        <li>
          <div className={`${toggleClassCheck}`}></div>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? "link-active" : "link")}
            onClick={handleClick}
          >
            <i id="icon" className="icon ph-squares-four"></i>Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/classes"
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            <i id="icon" className="icon ph-book"></i>Classes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/teachers"
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            <i id="icon" className="icon ph-users"></i>Teachers
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/students"
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            <i id="icon" className="icon ph-users-three"></i>Students
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/staff"
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            <i id="icon" className="icon ph-user-gear"></i>Staff
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            <i id="icon" className="icon ph-gear"></i>Settings
          </NavLink>
        </li>
        <li className="margin-top-auto">
          <img
            className="img"
            alt="profile-img"
            src={require('../assets/img/randomTeacher.jpg')}
          ></img>
          <p class="profile-name">Hana Neville</p>
        </li>
        <li>
          <a href="/login" id="logout" className="nav-link">
            <i id="icon" className="icon ph-sign-out"></i>Logout
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
