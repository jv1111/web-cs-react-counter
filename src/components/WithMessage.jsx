import Countdown from "react-countdown"
const WithMessage = () => {
    const dateStart = Date.now();
    const remaining = 10000;//10 seconds from date.now();
    const Completionist = () => <span>You are good to go!</span>;

    return (
        <Countdown date={dateStart + remaining}>
            <Completionist />
        </Countdown>
    )
}

export default WithMessage;