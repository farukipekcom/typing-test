import styles from "./result.module.scss";
import Share from "../share/share";
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
        <Share />
      </div>
    </div>
  );
};
export default Result;
