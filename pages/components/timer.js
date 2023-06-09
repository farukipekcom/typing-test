import { useRef, useState, useEffect } from "react";
export const Timer = ({ start, timer, setTimer, setFinished }) => {
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
    start === true ? clearTimer(getDeadTime()) : "";
    // timer === "-00:01" && setWorking(!working);
    // setStart(false);
  }, [start]);
  useEffect(() => {
    timer === "00:00" && setFinished(true);
  }, [setFinished, timer]);

  const onClickReset = () => {
    clearTimer(getDeadTime());
    setWorking(!working);
  };
  return <>{timer}</>;
};
export default Timer;
