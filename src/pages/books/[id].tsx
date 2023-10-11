import { withLayout } from "@/layout/Layout";
import React, { useState } from "react";
import axios from "axios";
import { API } from "@/helpers/api";
import { IBook } from "@/interfaces/book.interface";
import { Form } from "@/components";
import { useRouter } from "next/router";

interface BookProps extends Record<string, unknown> {
  book: IBook;
}

const Book = ({ book }: BookProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const router = useRouter();
  const { id } = router.query;

  const removeBook = async () => {
    await axios.delete(`${API.mainPage.getBooks}/${id}`);
    console.log(true);
  };

  return (
    <>
      <ul>
        <li>{book.title}</li>
        <li>{book.viewCount}</li>
      </ul>
      <div onClick={() => removeBook()}>Удалить</div>
      <div onClick={() => setOpen(!open)}>Обновить</div>
      {open && (
        <div>
          <Form action="update" />
        </div>
      )}
    </>
  );
};

export const getStaticPaths = async () => {
  const { data: books } = await axios.get(API.mainPage.getBooks);

  const paths = books.map((item: IBook) => ({
    params: { id: item._id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: { params: { id: any } }) => {
  const id = context.params.id;
  const { data: book } = await axios.get<IBook>(
    `${API.mainPage.getBooks}/${id}`
  );
  return {
    props: { book },
    revalidate: 30,
  };
};

export default withLayout(Book);
