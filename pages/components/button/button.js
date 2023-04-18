import styles from "./button.module.scss";
import React from "react";
import ButtonBackground from "../icons/button.svg";

export const Button = ({ text, onClick }) => {
  return (
    <div onClick={onClick}>
      <div className={styles.button}>
        <ButtonBackground />
        <span>{text}</span>
      </div>
    </div>
  );
};
export default Button;
