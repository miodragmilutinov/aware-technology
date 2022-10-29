import React from "react";

import "../assets/css/register.css";
import HeaderContentFooterLayout from "../components/layouts/HeaderContentFooterLayout";
import Register from "../components/Register";

const RegisterPage = () => {
  return (
    <div>
      <HeaderContentFooterLayout>
        <Register />
      </HeaderContentFooterLayout>
    </div>
  );
};

export default RegisterPage;
