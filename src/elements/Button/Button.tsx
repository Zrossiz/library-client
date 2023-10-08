import React from "react";
import styles from "./Button.module.css";
import { ButtonProps } from "./Button.props";

export const Button = ({ children, disable }: ButtonProps) => {
  return (
    <button disabled={disable} className={styles.button}>
      {children}
    </button>
  );
};
