import React from "react";
import "../assets/css/nav.css";

const HeaderNav = () => {
  return (
    <div className="nav">
      <a className="logo-link" href="/my-app/src/pages">
        Aware Technology
      </a>

      <ul className="nav__links">
        <li>
          <a href="my-app/src/components/HeaderNav#/">Product</a>
        </li>
        <li>
          <a href="my-app/src/components/HeaderNav#/">About</a>
        </li>
        <li>
          <a href="my-app/src/components/HeaderNav#/">My Class</a>
        </li>
        <li>
          <a href="my-app/src/components/HeaderNav#/">Pricing</a>
        </li>
        <li>
          <a href="my-app/src/components/HeaderNav#/">Request a Demo</a>
        </li>
      </ul>
    </div>
  );
};

export default HeaderNav;
