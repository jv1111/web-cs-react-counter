import React, { useState } from 'react';
import Countdown from 'react-countdown';
import { useRef } from 'react';

const WithCompleteCondition = () => {

    const countdownRef = useRef(null);//will be used to access the methods or api
    const [key, setKey] = useState(1);//will be used to reset

    const Completionist = () => <span>You are good to go!</span>;

    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <Completionist />
        } else {
            hours = formatter(hours);
            minutes = formatter(minutes);
            seconds = formatter(seconds);
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
                date={Date.now() + 65000}
                key={key}
                autoStart={false}
                renderer={renderer}
            />
            <br></br>
            <button
                onClick={() => countdownRef.current.start()}
            >
                start
            </button>

            <button
                onClick={() => setKey(prev => prev + 1)}
            >
                reset
            </button>
        </>

    )
}

export default WithCompleteCondition;