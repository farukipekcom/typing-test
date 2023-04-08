import { useRef, useState, useEffect } from "react";
import Play from "./components/icons/play";
import Reset from "./components/icons/reset";
import Facebook from "./components/icons/facebook";
import Twitter from "./components/icons/twitter";
import Linkedin from "./components/icons/linkedin";
import { Timer } from "./components/timer";
import words from "./components/words.json";
export default function Home() {
  const [countDownStart, setCountDownStart] = useState(false);
  const [done, setDone] = useState(false);
  const [working, setWorking] = useState(false);
  const [timer, setTimer] = useState(false);
  const ref = useRef();
  const handleClick = () => {
    // ref.current.focus();
    resetList();
    setCountDownStart(true);
    setDone(false);
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
            <div className="summary">
              <div className="summary-box">
                <div className="summary-box-title">RESULT</div>
                <div className="summary-box-list">
                  <div className="summary-box-list-item">
                    <div className="summary-box-list-item-text">Keystrokes</div>
                    <div className="summary-box-list-item-number">281</div>
                  </div>
                  <div className="summary-box-list-item">
                    <div className="summary-box-list-item-text">Accuracy</div>
                    <div className="summary-box-list-item-number">86.52%</div>
                  </div>
                  <div className="summary-box-list-item">
                    <div className="summary-box-list-item-text">
                      Correct words
                    </div>
                    <div className="summary-box-list-item-number">47</div>
                  </div>
                  <div className="summary-box-list-item">
                    <div className="summary-box-list-item-text">
                      Wrong words
                    </div>
                    <div className="summary-box-list-item-number">7</div>
                  </div>
                </div>
                <div className="summary-box-share">
                  <div className="summary-box-share-item facebook">
                    <Facebook />
                    <span>SHARE</span>
                  </div>
                  <div className="summary-box-share-item twitter">
                    <Twitter />
                    <span>SHARE</span>
                  </div>
                  <div className="summary-box-share-item linkedin">
                    <Linkedin />
                    <span>SHARE</span>
                  </div>
                </div>
              </div>
            </div>
          )}
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
