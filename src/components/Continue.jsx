import React from "react";
import { useRef, useState } from "react";
import Countdown from "react-countdown";

const Continue = ({ timer }) => {
    const countdownRef = useRef(null);//will be used to access the methods or api
    let dateEnd = null;
    // get the setted dateEnd
    if (localStorage.getItem('remainingTime')) {
        const remainingTime = parseInt(localStorage.getItem('remainingTime'))
        dateEnd = Date.now() + remainingTime;
    } else {
        dateEnd = Date.now() + timer;
    }

    const Completionist = () => <span>You are good to go!</span>;

    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <Completionist />
        } else {
            hours = formatter(hours);
            minutes = formatter(minutes);
            seconds = formatter(seconds);
            console.log(dateEnd - Date.now());
            localStorage.setItem('remainingTime', (dateEnd - Date.now()))
            // Render a countdown
            return <span>{hours}:{minutes}:{seconds}</span>;
        }
    }

    function formatter(time) {
        if (time < 10) {
            return '0' + time
        }
        return time
    }

    return (
        <>
            <Countdown
                ref={countdownRef}
                date={dateEnd}
                autoStart={false}
                renderer={renderer}
            />
            <br></br>
            <button
                onClick={() => countdownRef.current.start()}
            >
                start
            </button>
        </>
    )
}

export default Continue;