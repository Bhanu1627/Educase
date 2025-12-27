import React from "react";
import "./Login.css"
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/account");
    };

    return (
        <div className="Login">
            <p className="title">Signin to your PopX account</p>
            <p className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            <form className="login_form" onSubmit={handleSubmit}>
                <label className="email">Email address</label>
                <input type="email" placeholder="Enter email address" required></input>
                <label className="password">Password</label>
                <input type="password" placeholder="Enter password" required></input>
                <button type="submit" className="login_button">Login</button>
            </form>
        </div>
    )
}

export default Login;