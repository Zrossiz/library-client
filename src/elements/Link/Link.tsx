import React from "react";
import Link from "next/link";
import { LinkProps } from "./Link.props";
import styles from "./Link.module.css";

export const LinkItem = ({ href, children }: LinkProps) => {
  return (
    <Link href={href} className={styles.link}>
      {children}
    </Link>
  );
};
