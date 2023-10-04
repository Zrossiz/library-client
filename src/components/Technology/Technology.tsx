import React from "react";
import { TechnologyProps } from "./Techonology.props";
import { LinkItem } from "../../elements";
import styles from "./Technology.module.css";

export const Technology = ({ desc, link, children }: TechnologyProps) => {
  return (
    <LinkItem targetBlank border={false} href={link} className={styles.link}>
      <div className={styles.wrapper}>
        {children}
        <div>
          <p>{desc}</p>
        </div>
      </div>
    </LinkItem>
  );
};
