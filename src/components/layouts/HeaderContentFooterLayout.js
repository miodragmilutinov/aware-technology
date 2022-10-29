import React from "react";

import HeaderNav from "../HeaderNav";

const HeaderContentFooterLayout = (props) => {

    return (
        <div className='background-image'>
            <HeaderNav />
            {props.children}
        </div>
    );
};

export default HeaderContentFooterLayout;
