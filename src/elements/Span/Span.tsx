import { SpanProps } from "@/elements/Span/Span.props";
import styles from "./Span.module.css";
import cn from "classnames";

export const Span = ({ align, children }: SpanProps) => {
  return (
    <span
      className={cn(styles.span, {
        [styles.center]: align === "center",
      })}
    >
      {children}
    </span>
  );
};
