import React from "react";

import "../assets/css/dashboard.css";
import SidebarContentLayout from "../components/layouts/SidebarContentLayout";

const Dashboard = () => {
  return (
    <div>
        <SidebarContentLayout>
            <section className="dashboard">
                <p className="header">Dashboard</p>
            </section>
        </SidebarContentLayout>
    </div>
  );
};

export default Dashboard;
