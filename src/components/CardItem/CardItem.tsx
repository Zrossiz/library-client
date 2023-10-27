import React from "react";
import styles from "./CardItem.module.css";
import { Htag } from "@/elements";
import Link from "next/link";
import { CardItemProps } from "@/components/CardItem/CardItem.props";
import cn from "classnames";
import { API } from "@/helpers/api";
import axios from "axios";

export const CardItem = ({
  id,
  title,
  fileCover,
  className,
}: CardItemProps) => {
  const switchFavorite = () => {
    if (!localStorage.getItem("login")) {
      return alert(
        "Для добавления в избранные - нужно значала пройти регистрацию."
      );
    }

    axios
      .put(API.auth.switchFavorite, {
        login: localStorage.getItem("login"),
        bookId: id,
      })
      .then(() => console.log(true));
  };

  return (
    <li className={cn(styles.itemWrapper, className)}>
      <div className={styles.imgWrapper}>
        {fileCover != "undefined" ? (
          <img
            className={styles.imgPreview}
            src={fileCover}
            alt="Превью книги"
          />
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 11.5V7L15.5 2H5C4.44771 2 4 2.44771 4 3V21C4 21.5523 4.44771 22 5 22H11"
              stroke="#333333"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.5 15L20.5 21"
              stroke="#333333"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20.5 15L14.5 21"
              stroke="#333333"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15 2V7H20"
              stroke="#333333"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        )}
      </div>
      <div className={styles.titleWrapper}>
        <Htag tag="h3" color="black">
          {title}
        </Htag>
      </div>
      <div className={styles.linksWrapper}>
        <div
          title="Добавить в избранные"
          className={styles.favorite}
          onClick={() => switchFavorite()}
        >
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="undefined"
              d="M12 20.9996L3.847 13.2406C2.656 12.1076 2 10.5986 2 8.99158C2 7.38458 2.656 5.87558 3.847 4.74158C6.067 2.62858 9.552 2.43858 12 4.16858C14.448 2.43858 17.933 2.62858 20.153 4.74158C21.344 5.87558 22 7.38458 22 8.99158C22 10.5986 21.344 12.1076 20.153 13.2406L12 20.9996Z"
              fill="#884d00"
            />
          </svg>
        </div>
        <div className={styles.readWrapper}>
          <Link className={styles.read} href={`/books/${id}`}>
            Читать
          </Link>
        </div>
      </div>
    </li>
  );
};
