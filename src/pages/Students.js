import React from "react";

import "../assets/css/students.css";
import SidebarContentLayout from "../components/layouts/SidebarContentLayout";

const Students = () => {
  return (
    <div>
        <SidebarContentLayout>
            <section className="students">
                <p className="header">Students</p>
            </section>
        </SidebarContentLayout>
    </div>
  );
};

export default Students;
