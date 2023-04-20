import { useRef, useState, useEffect } from "react";

export const Timer = ({
  countDownStart,
  setCountDownStart,
  timer,
  setTimer,
  done,
  setDone,
}) => {
  const [working, setWorking] = useState(false);
  const Ref = useRef(null);
  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    return {
      total,
      minutes,
      seconds,
    };
  };
  const startTimer = (e) => {
    let { total, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    } else {
    }
  };
  const clearTimer = (e) => {
    // setTimer("00:03");
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };
  const getDeadTime = () => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 3);
    return deadline;
  };
  useEffect(() => {
    countDownStart === true ? clearTimer(getDeadTime()) : "";
    timer === "-00:01" && setWorking(!working);
    // setCountDownStart(false);
  }, [countDownStart]);

  const onClickReset = () => {
    clearTimer(getDeadTime());
    setWorking(!working);
  };
  return <>{timer}</>;
};
export default Timer;
