import { IBook } from "@/interfaces/book.interface";
import { withLayout } from "@/layout/Layout";
import React, { useEffect } from "react";
import axios from "axios";
import { API } from "@/helpers/api";
import { CardItem } from "@/components";
import styles from "../../styles/BooksIndex.module.css";

interface HomeProps extends Record<string, unknown> {
  books: IBook[];
}

const Books = ({ books }: HomeProps) => {
  const getFavorites = async () => {
    localStorage.setItem("login", "admin");
    const login = localStorage.getItem("login");
    /*     if (localStorage.getItem("login")) {
      await axios
        .get(API.auth.switchFavorite, { login: localStorage.getItem("login") })
        .then((res) => {
          console.log(res.data);
        });
    } */
  };

  return (
    <>
      <ul className={styles.listWrapper}>
        {books.map((item, index) => {
          return <CardItem key={item._id} bookProps={item} />;
        })}
      </ul>
    </>
  );
};

export const getStaticProps = async () => {
  const { data: books } = await axios.get<HomeProps>(API.mainPage.getBooks);

  if (!books) {
    return;
  }

  return {
    props: { books },
    revalidate: 30,
  };
};

export default withLayout(Books);
