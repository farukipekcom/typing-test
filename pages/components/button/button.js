import styles from "./button.module.scss";
export const Button = ({ text, Svg }) => {
  return (
    <div className={styles.play}>
      <Svg />
      <span>{text}</span>
    </div>
  );
};
export default Button;
