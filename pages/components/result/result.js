import React from "react";
import styles from "./result.module.scss";
import Facebook from "../icons/facebook";
import Twitter from "../icons/twitter";
import Linkedin from "../icons/linkedin";
export const Result = ({ keystrokes, correctWordCount, wrongWordCount }) => {
  return (
    <div className={styles.result}>
      <div className={styles.box}>
        <div className={styles.title}>RESULT</div>
        <div className={styles.list}>
          <div className={styles.item}>
            <div className={styles.text}>Keystrokes</div>
            <div className={styles.number}>{keystrokes}</div>
          </div>
          <div className={styles.item}>
            <div className={styles.text}>Correct words</div>
            <div className={styles.number}>{correctWordCount}</div>
          </div>
          <div className={styles.item}>
            <div className={styles.text}>Wrong words</div>
            <div className={styles.number}>{wrongWordCount}</div>
          </div>
        </div>
        <div className={styles.share}>
          <div className={`${styles.shareItem} ${styles.facebook}`}>
            <Facebook />
            <span>SHARE</span>
          </div>
          <div className={`${styles.shareItem} ${styles.twitter}`}>
            <Twitter />
            <span>SHARE</span>
          </div>
          <div className={`${styles.shareItem} ${styles.linkedin}`}>
            <Linkedin />
            <span>SHARE</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Result;
