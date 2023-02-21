import Countdown from "react-countdown";

const Continues = ({ timer }) => {

    let dateEnd = parseInt(localStorage.getItem('dateEnd'));
    if (!dateEnd) {
        dateEnd = Date.now() + timer;
        localStorage.setItem('dateEnd', dateEnd);
    }

    function formatter(time) {
        if (time < 10) {
            return '0' + time
        }
        return time
    }

    const Completionist = () => <span>You are good to go!</span>;

    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            localStorage.removeItem('dateEnd');
            return <Completionist />
        } else {
            hours = formatter(hours);
            minutes = formatter(minutes);
            seconds = formatter(seconds);
            // Render a countdown
            return <span>{hours}:{minutes}:{seconds}</span>;
        }
    }

    return (
        <Countdown
            date={dateEnd}
            renderer={renderer}
        />
    )
}

export default Continues;