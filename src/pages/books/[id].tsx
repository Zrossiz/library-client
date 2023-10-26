import { withLayout } from "@/layout/Layout";
import React, { useState } from "react";
import axios from "axios";
import { API } from "@/helpers/api";
import { IBook } from "@/interfaces/book.interface";
import { BookItemDesc, Form, UpdateBookPopUp } from "@/components";
import { useRouter } from "next/router";
import { Button } from "@/elements";
import styles from "../../styles/BookId.module.css";

interface BookProps extends Record<string, unknown> {
  book: IBook;
}

const Book = ({ book }: BookProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const router = useRouter();
  const { id } = router.query;

  const removeBook = async () => {
    await axios.delete(`${API.mainPage.getBooks}/${id}`);
    router.push("/books");
    console.log(true);
  };

  const downloadBook = async () => {
    await axios.get(`${API.mainPage.getBooks}/${id}/download`).then(() => {
      console.log(true);
    });
  };

  return (
    <div className={styles.bookPageWrapper}>
      <div className={styles.mainWrapper}>
        <div className={styles.imgWrapper}>
          {book.fileCover != "undefined" ? (
            <img src={book.fileCover} alt="" />
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
        <div className={styles.descWrapper}>
          <BookItemDesc id={id} book={book} />
          <div className={styles.buttonsWrapper}>
            <Button onClick={() => removeBook()}>Удалить</Button>
            <Button onClick={() => setOpen(!open)}>Обновить</Button>
          </div>
        </div>
      </div>
      {open && (
        <UpdateBookPopUp setOpen={setOpen} />
        // <div>
        //   <Form action="update" />
        // </div>
      )}
    </div>
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
