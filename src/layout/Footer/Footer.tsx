import React from "react";
import { FooterProps } from "./Footer.props";
import { LinkItem } from "@/elements";
import styles from "./Footer.module.css";

export const Footer = ({ className }: FooterProps) => {
  return (
    <footer>
      <div className={styles.footer}>
        <LinkItem
          targetBlank
          border={false}
          href={"https://github.com/Zrossiz"}
        >
          Github
        </LinkItem>
        <LinkItem
          targetBlank
          border={false}
          href={"https://hh.ru/resume/fa32335cff09deb09b0039ed1f325844536856"}
        >
          Hh.ru
        </LinkItem>
        <LinkItem targetBlank border={false} href={"https://t.me/User0Null0"}>
          Telegram
        </LinkItem>
      </div>
    </footer>
  );
};
