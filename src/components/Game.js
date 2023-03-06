import React from "react";
import "../styles/game.css";

const Game = () => {

    const getCoords = (e) => {
        let x = e.pageX;
        let y = e.pageY;
        console.log(x, y);
    }

    return (
        <div onClick={getCoords} className="main"></div>
    )
}

export default Game;