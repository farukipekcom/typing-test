import { useRef, useState, useEffect } from "react";
import Play from "./components/icons/play";
import Reset from "./components/icons/reset";
import { Timer } from "./components/timer";
import words from "./components/words.json";
export default function Home() {
  const [countDownStart, setCountDownStart] = useState(false);
  const [timer, setTimer] = useState();
  const ref = useRef();
  const handleClick = () => {
    // ref.current.focus();
    resetList();
    setCountDownStart(true);
  };
  const [wordList, setWordList] = useState([]);
  const [word, setWord] = useState();
  let tempList = [];
  const resetList = () => {
    for (let i = 0; i < words.length; i++) {
      tempList[i] = words[Math.floor(Math.random() * words.length)];
    }
    setWordList(tempList);
  };
  useEffect(() => {
    resetList();
  }, [setWordList]);
  const onChange = (e) => {
    e.preventDefault();
    setWord(e.target.value);
  };
  const onKeyPressed = (e) => {
    if (e.code === "Space" || e.code === "Enter") {
      if (e.target.value === wordList[0]) {
        setWord("");
        wordList.shift();
        console.log("CORRECT!");
      } else {
        console.log("WRONG!");
      }
    }
  };
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="list">
            <div className="background">
              <ul className="words">
                {wordList.map((item, id) => (
                  <li className="word" key={id}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="input">
            {timer > "00:00" && (
              <input
                autoFocus
                onKeyDown={(e) => onKeyPressed(e)}
                onChange={onChange}
                value={word === " " ? "" : word}
              />
            )}
          </div>
          <div className="time">
            <Timer
              countDownStart={countDownStart}
              setCountDownStart={setCountDownStart}
              timer={timer}
              setTimer={setTimer}
            />
          </div>
          <div className="buttons">
            <div className="play" onClick={handleClick}>
              <Play />
              <span>PLAY</span>
            </div>
            <div className="reset" onClick={resetList}>
              <Reset />
              <span>RESET</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
