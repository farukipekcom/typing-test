import { useRef, useState, useEffect } from "react";

export default function Deneme() {
  const [timer, setTimer] = useState("xxx");
  function Faruk() {
    console.log("ssss");
  }
  function getTimeRemaining(e) {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    return {
      total,
      minutes,
      seconds,
    };
    function startTimer(e) {
      let { total, minutes, seconds } = getTimeRemaining(e);
      if (total >= 0) {
        setTimer(
          (minutes > 9 ? minutes : "0" + minutes) +
            ":" +
            (seconds > 9 ? seconds : "0" + seconds)
        );
      } else {
      }
    }
  }
}
