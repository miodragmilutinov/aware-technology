import React from "react";
import "./css/nav.css";

const HeaderNav = () => {
  return (
    <div className="nav">
      <a className="logo-link" href="/">
        Aware Technology
      </a>

      <ul className="nav__links">
        <li>
          <a href="#/">Product</a>
        </li>
        <li>
          <a href="#/">About</a>
        </li>
        <li>
          <a href="#/">My Class</a>
        </li>
        <li>
          <a href="#/">Pricing</a>
        </li>
        <li>
          <a href="#/">Request a Demo</a>
        </li>
      </ul>
    </div>
  );
};

export default HeaderNav;
