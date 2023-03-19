import React, { useEffect, useState } from "react";
import "../styles/game.css";
import Level1 from "../images/cropped.jpg";
import { click } from "@testing-library/user-event/dist/click";
import Timer from "./Timer";
import EndGame from "./EndGame";

const Game = (props) => {
    const [stopGame, setStopGame] = useState(false);
    const [time, setTime] = useState(0);

    const handleClick = (e) => {
        let x = (e.nativeEvent.offsetX / e.target.clientWidth).toFixed(2);
        let y = (e.nativeEvent.offsetY / e.target.clientHeight).toFixed(2);
        let selectedCoords = `${x}, ${y}`;
        checkAnswer(selectedCoords);
    }

    const checkAnswer = async (selectedCoords) => {
        let data = await props.getData();
        const coords = data[0]["x-coord"];
        
        if (coords.includes(selectedCoords)) {
            setStopGame(true);
        } else {
            console.log("No");
        }
    }

    return (
        <>
        <div className="game-container">
            <Timer time={time} setTime={setTime} stopGame={stopGame}/>
            <div className="image-container">
                <img onClick={handleClick} alt="Game"src={Level1} className="game-image"></img>
            </div>
        </div>
        {stopGame && (
            <EndGame time={time}/>
        )}
        </>
    )
}

export default Game;