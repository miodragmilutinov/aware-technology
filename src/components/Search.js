import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const schoolName = "Aware";
  const msg = document.querySelector(".block");
  const click = document.querySelector(".button");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.toLowerCase() === schoolName.toLowerCase()) {
      navigate("/login");
    } else {
      click.addEventListener("click", () => {
        msg.classList.add("show");
      });
    }
  };

  return (
    <div>
        <div className="section--1">
          <div className="container">
            <div className="content">
              <h2 className="header-secondary">Welcome!</h2>
              <p className="text-1">Search for your school</p>
              <form onSubmit={handleSubmit}>
                <input
                    className="input"
                    type="text"
                    placeholder="School name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
                <small id="name-help" className="block">
                  Please enter the correct school name. Try with Aware :)
                </small>
                <br />
                <button className="button" type="submit">
                  Continue
                </button>
              </form>
            </div>
          </div>
          <div className="center">
            <p className="text--2">
              Don't have an account?{" "}
              <a className="register" href="/my-app/src/pages/RegisterPage.js">
                Register
              </a>
            </p>
            <h3 className="header--tertiary">Powered by aware technology</h3>
          </div>
        </div>
    </div>
  );
};

export default Search;
