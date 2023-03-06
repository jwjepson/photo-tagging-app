import React from "react";
import "../styles/header.css";

const Header = () => {
    return (
        <div className="header">
            <h1 className="logo">Logo</h1>
            <div className="nav-bar">
                <ul>
                    <li>Home</li>
                    <li>Leaderboard</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;