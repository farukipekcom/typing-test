import { useRef, useState, useEffect } from "react";
import { Timer } from "./components/timer";
import words from "./components/words.json";
import Result from "./components/result/result";
import { Button } from "./components/button/button";
export default function Home() {
  const duration = "00:03";
  const [start, setStart] = useState(false);
  const [keyStrokes, setKeyStrokes] = useState(0);
  const [correctWordCount, setCorrectWordCount] = useState(0);
  const [wrongWordCount, setWrongWordCount] = useState(0);
  const [timer, setTimer] = useState(duration);
  const [finished, setFinished] = useState(false);
  const [word, setWord] = useState("");
  const [wordList, setWordList] = useState([]);
  const ref = useRef();
  let tempList = [];
  const shuffleList = () => {
    for (let i in words) {
      tempList[i] = words[Math.floor(Math.random() * words.length)];
    }
    setWordList(tempList);
  };
  const handleClick = () => {
    setStart(true);
    setKeyStrokes(0);
    setCorrectWordCount(0);
    setWrongWordCount(0);
    setTimer(duration);
    finished === false && ref.current.focus();
    setFinished(false);
    finished && shuffleList();
    setWord("");
  };
  const onChange = (e) => {
    e.preventDefault();
    setKeyStrokes(keyStrokes + 1);
    setWord(e.target.value);
  };
  const onKeyPressed = (e) => {
    setStart(true);
    if (e.code === "Space" || e.code === "Enter") {
      if (
        String(e.target.value).toLocaleLowerCase().replace(/\s/g, "") ===
        wordList[0]
      ) {
        // if word is true
        setCorrectWordCount(correctWordCount + 1);
      } else {
        // if word is false
        setWrongWordCount(wrongWordCount + 1);
      }
      wordList.shift();
      setWord("");
    }
  };
  useEffect(() => {
    shuffleList();
  }, []);

  return (
    <>
      <div className="main">
        <div className="container">
          {!finished && (
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
                <input
                  ref={ref}
                  autoFocus
                  onKeyDown={(e) => onKeyPressed(e)}
                  onChange={onChange}
                  value={word}
                  placeholder={
                    start === false
                      ? "Press the play button and start typing the words"
                      : ""
                  }
                />
              </div>
              <div className="time">
                <Timer
                  start={start}
                  timer={timer}
                  setTimer={setTimer}
                  setFinished={setFinished}
                />
              </div>
            </>
          )}
          {finished && (
            <Result
              keyStrokes={keyStrokes}
              correctWordCount={correctWordCount}
              wrongWordCount={wrongWordCount}
            />
          )}
          {start === false || finished === true ? (
            <div className="buttons">
              <Button text={"START"} onClick={handleClick} />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
