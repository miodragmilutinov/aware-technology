import React from "react";

import SideNav from "../components/SideNav";

import "../assets/css/settings.css";

const Settings = () => {
  return (
    <div>
      <SideNav />
      <section className="settings">
        <p className="header">Settings</p>
      </section>
    </div>
  );
};

export default Settings;
