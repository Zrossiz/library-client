import React, { ForwardedRef, forwardRef } from "react";
import { InputProps } from "./Input.props";
import cn from "classnames";
import styles from "./Input.module.css";

export const Input = forwardRef(
  (
    { className, type, name, id, placeholder, error, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    return (
      <input
        ref={ref}
        placeholder={placeholder}
        id={id}
        name={name}
        type={type}
        className={cn(styles.input)}
        {...props}
      />
    );
  }
);
