import React from "react";
import "../styles/header.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <h1 className="logo">Logo</h1>
            <div className="nav-bar">
                <ul>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/leaderboard">
                        <li>Leaderboard</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Header;