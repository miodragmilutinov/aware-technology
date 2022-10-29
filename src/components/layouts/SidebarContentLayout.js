import React from "react";
import SideNav from "../SideNav";

const SidebarContentLayout = (props) => {

    return (
        <div className="dashboard-layout">
            <div className="sidebar-layout">
                <SideNav />
            </div>
            <div className="content-layout">
                {props.children}
            </div>
        </div>
    );
};

export default SidebarContentLayout;
