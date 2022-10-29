import React from "react";
import HeaderContentFooterLayout from "../components/layouts/HeaderContentFooterLayout";
import Login from "../components/Login";

const LoginPage = () => {

  return (
    <div>
      <HeaderContentFooterLayout>
        <Login />
      </HeaderContentFooterLayout>
    </div>
  );
};

export default LoginPage;
