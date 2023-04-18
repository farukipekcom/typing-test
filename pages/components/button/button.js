import styles from "./button.module.scss";
import Play from "../icons/play";
import Reset from "../icons/reset";
export const Button = ({ text, onClick }) => {
  return (
    <div className="play" onClick={onClick}>
      <div className={styles.play}>
        {text === "PLAY" ? <Play /> : <Reset />}
        <span>{text}</span>
      </div>
    </div>
  );
};
export default Button;
