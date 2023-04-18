import styles from "./button.module.scss";
export const Button = ({ text, Svg, onClick }) => {
  return (
    <div className="play" onClick={onClick}>
      <div className={styles.play}>
        <Svg />
        <span>{text}</span>
      </div>
    </div>
  );
};
export default Button;
