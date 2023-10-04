import { IBook } from "@/interfaces/book.interface";
import { withLayout } from "@/layout/Layout";
import Link from "next/link";
import React from "react";
import axios from "axios";
import { API } from "@/helpers/api";

interface HomeProps extends Record<string, unknown> {
  books: IBook[];
}

const Books = ({ books }: HomeProps) => {
  return (
    <ul>
      {books.map((item, index) => (
        <li key={index}>
          <Link href={`/books/${item._id}`}>{item.title}</Link>
        </li>
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
