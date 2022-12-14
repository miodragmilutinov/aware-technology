import React from "react";
import {useNavigate} from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();

    return (
        <div>
            <p className="school-logo">SchoolLogo</p>
            <div className="section">
                <div className="container">
                    <div className="content">
                        <h2 className="header-secondary">Welcome!</h2>
                        <p className="text-1">Register</p>
                        <input
                            className="input username"
                            type="text"
                            placeholder="First Name"
                        />
                        <input
                            className="input username"
                            type="text"
                            placeholder="Last Name"
                        />
                        <input
                            className="input username"
                            type="email"
                            placeholder="Email"
                        />
                        <input
                            className="input password username"
                            type="password"
                            placeholder="Password"
                        />
                        <input
                            className="input password"
                            type="password"
                            placeholder="Confirm Password"
                        />

                        <br />
                        <button className="button" onClick={() => navigate("/login")}>
                            Continue
                        </button>
                    </div>
                </div>
            </div>
            <div className="center">
                <p className="text-3">
                    Already have an account?{" "}
                    <a className="register" href="/my-app/src/pages/LoginPage.js">
                        Sign in
                    </a>
                </p>
                <h3 className="header-tertiary-1">Powered by aware technology</h3>
            </div>
        </div>
    );
};

export default Register;
