import { useState, useEffect } from "react";
import Play from "./components/icons/play";
import Reset from "./components/icons/reset";
import { Timer } from "./components/timer";
import words from "./components/words.json";
export default function Home() {
  const [basla, setBasla] = useState(false);
  const [timer, setTimer] = useState();
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="list">
            <div className="background">
              <ul className="words">
                {words.map((item, id) => (
                  <li className="word" key={id}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="input">
            <input
              autoFocus
              tabIndex="1"
              disabled={timer === "00:00" ? true : false}
            />
          </div>
          <div className="time">
            <Timer basildi={basla} timer={timer} setTimer={setTimer} />
          </div>
          <div className="buttons">
            <div className="play" onClick={() => setBasla(true)}>
              <Play />
              <span>PLAY</span>
            </div>
            <div className="reset">
              <Reset />
              <span>RESET</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
