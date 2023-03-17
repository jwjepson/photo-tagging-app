import React from "react";
import "../styles/leaderboard.css";

const LeaderBoard = () => {
    return (
        <div className="leaderboard-container">
            <table className="leaderboard-table">
                <tr>
                    <th>Name</th>
                    <th>Best-Time</th>
                </tr>
                <tr>
                    <td>Test User</td>
                    <td>Test Score</td>
                </tr>
            </table>
        </div>
    )
};

export default LeaderBoard;