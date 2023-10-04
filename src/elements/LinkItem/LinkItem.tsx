import React from "react";
import Link from "next/link";
import { LinkProps } from "./LinkItem.props";
import styles from "./LinkItem.module.css";
import cn from "classnames";

export const LinkItem = ({
  href,
  targetBlank,
  border,
  children,
  className,
}: LinkProps) => {
  return (
    <Link
      href={href}
      className={cn(className, {
        [styles.bordered]: border == true,
        [styles.unbordered]: border == false,
      })}
      target={targetBlank ? "_blank" : "_parent"}
    >
      {children}
    </Link>
  );
};
