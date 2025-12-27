import React from "react";
import "./Register.css"
import { useNavigate } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/account");
    };

    return (
        <div className="Register">
            <p className="title">Create your PopX account</p>
            <form className="reg_form" onSubmit={handleSubmit}>
                <label className="name">Full Name<span>*</span></label>
                <input type="text" placeholder="Enter name" required></input>
                <label className="number">Phone number<span>*</span></label>
                <input type="tel" placeholder="Enter phone number" pattern="[0-9]{10}" maxLength="10" required></input>
                <label className="email">Email address<span>*</span></label>
                <input type="email" placeholder="Enter email address" required></input>
                <label className="password">Password<span>*</span></label>
                <input type="password" placeholder="Enter password" required></input>
                <label className="cname">Company name</label>
                <input type="text" placeholder="Enter company came"></input>
                <div className="agency_details">
                    <p className="agency_title">Are you an Agency?<span>*</span></p>
                    <input type="radio" className="select1" name="select" required/>
                    <label className="yes">Yes</label>
                    <input type="radio" className="select2" name="select" required/>
                    <label className="no">No</label>
                </div>
                <button type="submit" className="register_button">Create Account</button>
            </form>
        </div>
    )
}

export default Register;