import React, { useState } from "react";
import { HeaderProps } from "./Header.props";
import cn from "classnames";
import styles from "./Header.module.css";
import { Button } from "@/elements";
import { Nav, NavMobile } from "@/components";
import Link from "next/link";

export const Header = ({ className }: HeaderProps) => {
  const [menu, setMenu] = useState<boolean>(false);

  return (
    <header className={cn(className, styles.header)}>
      {menu && <NavMobile setMenu={setMenu} />}
      <div onClick={() => setMenu(true)} className={styles.burgerWrapper}>
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_2836_15555)">
            <path d="M24 0H0V24H24V0Z" fill="white" fill-opacity="0.01" />
            <path
              d="M3.97461 5.9751H19.9746"
              stroke="#fff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.97461 11.9751H19.9746"
              stroke="#fff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.97461 17.9751H19.9746"
              stroke="#fff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_2836_15555">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className={styles.headerWrapper}>
        <Link href="/">
          <div className={styles.logo}>
            <svg
              width="70"
              height="70"
              viewBox="0 0 103 109"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M64.3382 102.658H38.6029C15.3125 102.658 5.36152 92.2231 5.36152 67.8009V40.815C5.36152 16.3928 15.3125 5.9583 38.6029 5.9583H64.3382C87.6287 5.9583 97.5797 16.3928 97.5797 40.815V67.8009C97.5797 92.2231 87.6287 102.658 64.3382 102.658ZM38.6029 12.7048C18.8297 12.7048 11.7953 20.0809 11.7953 40.815V67.8009C11.7953 88.535 18.8297 95.9111 38.6029 95.9111H64.3382C84.1115 95.9111 91.1458 88.535 91.1458 67.8009V40.815C91.1458 20.0809 84.1115 12.7048 64.3382 12.7048H38.6029Z"
                fill="white"
              />
              <path
                d="M51.4711 85.5665C50.4417 85.5665 49.4123 85.2966 48.5545 84.8018C43.579 81.9683 34.7861 78.9098 29.253 78.1452L28.438 78.0103C24.2346 77.4706 20.889 73.5128 20.889 68.9702V34.3383C20.889 31.7746 21.9185 29.3009 23.6771 27.5918C25.4785 25.8827 27.7946 25.0282 30.2824 25.2531C36.5446 25.7928 45.6378 28.9412 50.9994 32.4493L51.4282 32.7192L51.5999 32.5842C57.0043 29.0311 66.0974 25.8378 72.4025 25.2531C72.4883 25.2531 72.7455 25.2531 72.8313 25.2531C75.0617 25.0282 77.4636 25.9277 79.2222 27.5918C81.0237 29.3009 82.0103 31.6846 82.0103 34.2932V68.8801C82.0103 73.3778 78.6646 77.3357 74.4183 77.9204L73.5177 78.0553C68.0275 78.8199 59.1916 81.8784 54.3019 84.7119C53.4869 85.3416 52.5005 85.5665 51.4711 85.5665ZM29.5533 32.0444C28.9528 32.0444 28.4379 32.2693 28.0519 32.6291C27.5801 33.0789 27.3657 33.7086 27.3657 34.3833V69.015C27.3657 70.0945 28.3094 71.219 29.2959 71.3539L30.1109 71.4888C36.3732 72.3884 45.981 75.6716 51.557 78.8649C56.7469 75.7165 66.3976 72.3434 72.7028 71.4888L73.6463 71.3539C74.6328 71.219 75.5765 70.0945 75.5765 69.015V34.4282C75.5765 33.7085 75.3192 33.1239 74.8903 32.6741C74.4185 32.2244 73.8179 32.0445 73.1316 32.0894C73.0458 32.0894 72.7886 32.0894 72.7028 32.0894C67.7273 32.5392 59.535 35.4177 55.0742 38.3861L54.6451 38.656C52.7578 39.8703 50.0986 39.8704 48.2971 38.701L47.6536 38.2962C43.15 35.3278 34.9576 32.4942 29.7677 32.0444C29.6819 32.0444 29.6391 32.0444 29.5533 32.0444Z"
                fill="white"
              />
              <path
                d="M51.4706 83.1377C49.712 83.1377 48.2537 81.6085 48.2537 79.7645V36.767C48.2537 34.923 49.712 33.3938 51.4706 33.3938C53.2292 33.3938 54.6875 34.923 54.6875 36.767V79.7645C54.6875 81.6535 53.2292 83.1377 51.4706 83.1377Z"
                fill="white"
              />
            </svg>
          </div>
        </Link>
        <div className={styles.navWrapper}>
          <Nav />
        </div>
        <Link href="/registration">
          <Button>Войти</Button>
        </Link>
      </div>
    </header>
  );
};
