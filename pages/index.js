import { useRef, useState, useEffect } from "react";
import { Timer } from "./components/timer";
import words from "./components/words.json";
import Result from "./components/result/result";
import { Button } from "./components/button/button";
export default function Home() {
  const [countDownStart, setCountDownStart] = useState(false);
  const [keystrokes, setKeystrokes] = useState(0);
  const [correctWordCount, setCorrectWordCount] = useState(0);
  const [wrongWordCount, setWrongWordCount] = useState(0);
  const [done, setDone] = useState(false);
  const [working, setWorking] = useState(false);
  const [timer, setTimer] = useState(false);
  const ref = useRef();
  const handleClick = () => {
    // ref.current.focus();
    resetList();
    setCountDownStart(true);
    setDone(false);
    setKeystrokes(0);
    setCorrectWordCount(0);
    setWrongWordCount(0);
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
    setKeystrokes(keystrokes + 1);
    setWord(e.target.value);
  };
  const onKeyPressed = (e) => {
    if (e.code === "Space" || e.code === "Enter") {
      if (e.target.value === wordList[0]) {
        setWord("");
        wordList.shift();
        console.log("CORRECT!");
        setCorrectWordCount(correctWordCount + 1);
      } else {
        console.log("WRONG!");
        wordList.shift();
        setWord("");
        setWrongWordCount(wrongWordCount + 1);
      }
    }
  };
  useEffect(() => {
    timer === "00:00" && setDone(!done);
  }, [timer]);
  console.log(timer);
  return (
    <>
      <div className="main">
        <div className="container">
          {!done && (
            <>
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
                  done={done}
                  setDone={setDone}
                />
              </div>
            </>
          )}
          {done && (
            <Result
              keystrokes={keystrokes}
              correctWordCount={correctWordCount}
              wrongWordCount={wrongWordCount}
            />
          )}
          <div className="buttons">
            <Button text={"PLAY"} onClick={handleClick} />
            <Button text={"RESET"} onClick={resetList} />
          </div>
        </div>
      </div>
    </>
  );
}
