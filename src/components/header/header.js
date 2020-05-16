import React from "react";
import './header.css';
import UserProfile from "./user-profile";

const Header = () => {
    return (
        <div className="header">
            <div className="header-left-bg">
                <h1>NEWS PORTAL</h1>
            </div>
            <UserProfile />
        </div>
    )
}

export default Header;
