import React from "react";
import styles from "./Button.module.css";
import { ButtonProps } from "./Button.props";
import cn from "classnames";

export const Button = ({
  children,
  disable,
  className,
  onClick,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disable}
      className={cn(styles.button, className)}
    >
      {children}
    </button>
  );
};
