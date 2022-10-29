import React from "react";

import SideNav from "../components/SideNav";

import "../assets/css/students.css";

const Students = () => {
  return (
    <div>
      <SideNav />
      <section className="students">
        <p className="header">Students</p>
      </section>
    </div>
  );
};

export default Students;
