import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isUsernameValid, setIsUsernameValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);

    const user = {
        username: "Admin",
        password: "admin1",
    };

    const validateForm = () => {
        let isFormValid = true;
        if (username.trim().length === 0) {
            setIsUsernameValid(false);
            isFormValid = false;
        }
        if (password.trim().length === 0) {
            setIsPasswordValid(false);
            isFormValid = false;
        }

        return isFormValid;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        if (username === user.username && password === user.password) {
            navigate("/dashboard");
            console.log("User Logged In");
        }
    };

    function changeUsernameValue(value) {
        if (value.length > 0) {
            setIsUsernameValid(true);
        }

        setUsername(value);
    }

    function changePasswordValue(value) {
        if (value.length > 0) {
            setIsPasswordValid(true);
        }

        setPassword(value);
    }

    return (
        <div>
            <p className="school-logo">SchoolLogo</p>
            <div className="section">
                <div className="container">
                    <div className="content">
                        <h2 className="header-secondary">Welcome!</h2>
                        <p className="text-1">Sing in</p>
                        <form onSubmit={handleSubmit}>
                            <div className={`input-control-u ${!isUsernameValid ? "error" : ''}`} >
                                <input
                                    className="input username"
                                    type="text"
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) => changeUsernameValue(e.target.value)}
                                />
                            </div>
                            <div className={`input-control-p ${!isPasswordValid ? "error" : ''}`} >
                                <input
                                    className="input password"
                                    type="Password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => changePasswordValue(e.target.value)}
                                />
                            </div>
                            <div className="right">
                                <a className="forgot-password" href="my-app/src/pages/LoginPage.js/">
                                    Forgot password?
                                </a>
                            </div>
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
                    <a className="register" href="/RegisterPage.js">
                        Register
                    </a>
                </p>
                <h3 className="header-tertiary">Powered by aware technology</h3>
            </div>
        </div>
    );
};

export default Login;
