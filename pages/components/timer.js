import { useRef, useState, useEffect } from "react";

export const Timer = ({ basildi, timer, setTimer }) => {
  const Ref = useRef(null);
  const [working, setWorking] = useState(false);
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
    setTimer("00:03");
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
    basildi && clearTimer(getDeadTime());
    timer === "-00:01" && setWorking(!working);
  }, [basildi]);

  const onClickReset = () => {
    clearTimer(getDeadTime());
    setWorking(!working);
  };
  return (
    <>
      {working === true
        ? "00:03"
        : working && timer === "00:00"
        ? "SURE BITTI!"
        : timer}
    </>
  );
};
export default Timer;
