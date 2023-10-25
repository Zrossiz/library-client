import { IBook } from "@/interfaces/book.interface";
import { withLayout } from "@/layout/Layout";
import Link from "next/link";
import React from "react";
import axios from "axios";
import { API } from "@/helpers/api";
import { CardItem } from "@/components";
import styles from "../../styles/BooksIndex.module.css";
import cn from "classnames";

interface HomeProps extends Record<string, unknown> {
  books: IBook[];
}

const Books = ({ books }: HomeProps) => {
  return (
    <>
      <ul className={styles.listWrapper}>
        {books.map((item, index) => {
          return (
            <CardItem
              key={item._id}
              id={item._id}
              title={item.title}
              fileCover={item.fileCover}
            />
          );
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
