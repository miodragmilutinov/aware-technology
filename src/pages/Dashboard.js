import React from "react";

import SideNav from "../components/SideNav";

import "../assets/css/dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <SideNav />
      <section className="dashboard">
        <p className="header">Dashboard</p>
      </section>
    </div>
  );
};

export default Dashboard;
