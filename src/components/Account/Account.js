import React from "react";
import profilePic from "../../assets/Ellipse 114@2x.png"
import camPic from "../../assets/Group 1585@2x.png"
import "./Account.css"

const Account = () => {
    return(
        <div className="Account">
            <div className="title_container">
                <p className="title">Account Settings</p>
            </div>
            <div className="details">
                <img className="user_pic" src={profilePic} alt="profile_pic"></img>
                <img className="cam_pic" src={camPic} alt="cam_pic"></img>
                <p className="user_name">Marry Doe</p>
                <p className="user_email">Marry@Gmail.Com</p>
                <p className="user_content">Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
            </div>
            <hr className="line1"></hr>
            <hr className="line2"></hr>
        </div>
    )
}

export default Account;