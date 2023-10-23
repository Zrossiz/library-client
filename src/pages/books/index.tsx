import { IBook } from "@/interfaces/book.interface";
import { withLayout } from "@/layout/Layout";
import Link from "next/link";
import React from "react";
import axios from "axios";
import { API } from "@/helpers/api";
import { CardItem } from "@/components";
import styles from "../../styles/BooksIndex.module.css";

interface HomeProps extends Record<string, unknown> {
  books: IBook[];
}

const Books = ({ books }: HomeProps) => {
  return (
    <ul className={styles.listItems}>
      {books.map((item, index) => (
        <CardItem key={item._id} id={Number(item._id)} title={item.title} />
      ))}
    </ul>
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
