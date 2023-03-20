import { getDocs } from "firebase/firestore/lite";
import React, { useEffect, useState } from "react";
import "../styles/leaderboard.css";
import { collection, query, orderBy } from "firebase/firestore/lite";

const LeaderBoard = (props) => {
    const [leaderBoard, setLeaderBoard] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const leaderboardCol = collection(props.db, "leaderboard");
            const q = query(leaderboardCol, orderBy("time"));
            const leaderboardSnapshot = await getDocs(q);
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
                        <th>Place</th>
                        <th>Name</th>
                        <th>Best-Time</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderBoard.map((user, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>
                            {("0" + Math.floor((user.time / 60) % 60)).slice(-2) + ":" + ("0" + Math.floor(user.time % 60)).slice(-2)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};

export default LeaderBoard;