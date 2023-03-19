import { getDocs } from "firebase/firestore/lite";
import React, { useEffect, useState } from "react";
import "../styles/leaderboard.css";
import { collection } from "firebase/firestore/lite";

const LeaderBoard = (props) => {
    const [leaderBoard, setLeaderBoard] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const leaderboardCol = collection(props.db, "leaderboard");
            const leaderboardSnapshot = await getDocs(leaderboardCol);
            const leaderboard = leaderboardSnapshot.docs.map(doc => doc.data());
            console.log(leaderboard);
            setLeaderBoard(leaderboard);
        }
        getData();
    }, []);

    return (
        <div className="leaderboard-container">
            <table className="leaderboard-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Best-Time</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderBoard.map(user => (
                        <tr key={user.index}>
                            <td>{user.name}</td>
                            <td>{user.time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};

export default LeaderBoard;