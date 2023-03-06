import React from "react";
import "../styles/game.css";
import Level1 from "../images/cropped.jpg";

const Game = () => {

    const getCoords = (e) => {
        let x = (e.nativeEvent.offsetX / e.target.clientWidth).toFixed(2);
        let y = (e.nativeEvent.offsetY / e.target.clientHeight).toFixed(2);
    }

    return (
        <div className="game-container">
            <div className="timer">Timer: 5:03</div>
            <div className="image-container">
                <img onClick={getCoords} src={Level1} className="game-image"></img>
            </div>
        </div>
    )
}

export default Game;