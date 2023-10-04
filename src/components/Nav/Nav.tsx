import React from "react";
import { LinkItem } from "@/elements";
import styles from "./Nav.module.css";

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.navItem}>
          <LinkItem border={true} href="/books">
            Все книги
          </LinkItem>
        </li>
        <li className={styles.navItem}>
          <LinkItem border={true} href="books/create">
            Загрузить книгу
          </LinkItem>
        </li>
        <li className={styles.navItem}>
          <LinkItem border={true} href="#">
            Поиск
            <svg
              width="30"
              height="18"
              viewBox="0 0 20 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 8.92791C0 13.3988 3.36842 17.0232 7.57895 17.0232C9.26316 17.0232 10.8271 16.3899 12.1504 15.3261C12.1504 15.4353 12.2707 15.5368 12.2707 15.6278L18.2857 22.104C18.6466 22.5254 19.3684 22.5254 19.7293 22.104C20.0902 21.6827 20.0902 20.9986 19.7293 20.5773L13.7143 14.1011C13.594 14.0101 13.594 13.9398 13.4737 13.8878C14.4361 12.5171 15.0376 10.7967 15.0376 8.92791C15.0376 4.45568 11.6692 0.831345 7.57895 0.831345C3.36842 0.831345 0 4.45568 0 8.92791ZM2.04541 8.92787C2.04541 5.64815 4.45143 2.99004 7.57924 2.99004C10.5868 2.99004 12.9928 5.64815 12.9928 8.92787C12.9928 12.2063 10.5868 14.8644 7.57924 14.8644C4.45143 14.8644 2.04541 12.2063 2.04541 8.92787Z"
                fill="white"
              />
            </svg>
          </LinkItem>
        </li>
      </ul>
    </nav>
  );
};
