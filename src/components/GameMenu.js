import React from "react";
import "../styles/gamemenu.css";
import waldoImage from "../images/waldo-image.png";
import { Link } from "react-router-dom";

const GameMenu = (props) => {
    return (
        <div className="game-menu">
            <img className="waldo-image menu"alt="Waldo" src={waldoImage}></img>
            <div className="menu-info">
                <h2>Wheres Waldo?</h2>
                <p>Try and find Waldo as fast as you can</p>
                <Link to="/play">
                    <button className="start-game-button" onClick={props.startGame} type="button">Start Game</button>
                </Link>
            </div>
        </div>
    )
}

export default GameMenu;