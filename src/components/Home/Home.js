import React from "react";
import "./Home.css"
import { Link } from "react-router-dom";

const Home = () =>{
    return(
        <div className="Home">
            <p className="title">Welcome to PopX</p>
            <p className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            <button className="register_button"><Link to="/register">Create Account</Link></button>
            <button className="login_button"><Link to="/login">Already Registered? Login</Link></button>
        </div>
    )
}

export default Home;