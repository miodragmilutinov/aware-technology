import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import HeaderNav from "../HeaderNav";
import Bg from "../Bg";

import "../css/login.css";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const user = {
    username: "Admin",
    password: "admin1",
  };

  const passwordControl = document.querySelector(".input-control-u");
  const usernameControl = document.querySelector(".input-control-p");
  const click = document.querySelector(".button");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === user.username && password === user.password) {
      navigate("/dashboard");
      console.log("User Logged In");
    }

    if (username === user.username) {
      click.addEventListener("click", () => {
        usernameControl.classList.add("success");
      });
    } else {
      click.addEventListener("click", () => {
        usernameControl.classList.add("error");
      });
      console.log("Please check you username");
    }

    if (password === user.password) {
      passwordControl.classList.add("success");
    } else {
      click.addEventListener("click", () => {
        passwordControl.classList.add("error");
      });
      console.log("Wrong password");
    }
  };

  return (
    <div>
      <HeaderNav />
      <div>
        <p className="school-logo">SchoolLogo</p>
        <div className="section">
          <div className="container">
            <div className="content">
              <h2 className="header-secondary">Welcome!</h2>
              <p className="text-1">Sing in</p>
              <form onSubmit={handleSubmit}>
                <div className="input-control-u">
                  <input
                    className="input username"
                    type="text"
                    placeholder="Username"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="input-control-p">
                  <input
                    className="input password"
                    type="Password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <br />
                <div className="right">
                  <a className="forgot-password" href="#/">
                    Forgot password?
                  </a>
                </div>

                <br />
                <button className="button" type="submit">
                  Continue
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="center">
          <p className="text-2">
            Don't have an account?{" "}
            <a className="register" href="/register">
              Register
            </a>
          </p>
          <h3 className="header-tertiary">Powered by aware technology</h3>
        </div>
      </div>
      <Bg />
    </div>
  );
};

export default Login;
