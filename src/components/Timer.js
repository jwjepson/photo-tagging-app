import React, {useEffect, useState} from "react";
import "../styles/game.css";


const Timer = () => {
    const [time, setTime] = useState(0);
    const [timerOn, setTimerOn] = useState(true);
    useEffect(() => {
        let interval = null;
        if (timerOn) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 1) 
            }, 1000)
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [timerOn])
    return (
        <div className="timer">
            <div>{("0" + Math.floor((time / 60) % 60)).slice(-2)}:</div>
            <div>{("0" + Math.floor(time % 60)).slice(-2)}</div>
        </div>
    )
}

export default Timer;