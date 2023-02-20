import Countdown from "react-countdown"
const BasicCountDown = () => {
    const dateStart = Date.now();
    const remaining = 10000;//10 seconds from date.now();

    return <Countdown date={dateStart + remaining} />
}

export default BasicCountDown;