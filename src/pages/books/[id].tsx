import { withLayout } from "@/layout/Layout";
import React, { useState } from "react";
import axios from "axios";
import { API } from "@/helpers/api";
import { IBook } from "@/interfaces/book.interface";
import { useRouter } from "next/router";

interface BookProps extends Record<string, unknown> {
  book: IBook;
}

const Book = ({ book }: BookProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [authors, setAuthors] = useState<string>("");
  const [favorite, setFavorite] = useState<string>("");
  const [fileCover, setFileCover] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");
  const [fileBook, setFileBook] = useState<string>("");

  let updatedDataBook = [
    title,
    description,
    authors,
    favorite,
    fileCover,
    fileName,
    fileBook,
  ];

  const router = useRouter();
  const { id } = router.query;
  let selectedFile;

  const getSelectedFile = (e) => {
    selectedFile = e.target.files[0];
    console.log(selectedFile);
  };

  const removeBook = async () => {
    await axios.delete(`${API.mainPage.getBooks}/${id}`);
    console.log(true);
  };

  const updateBook = async (e) => {
    e.preventDefault();
    let filteredData = updatedDataBook.filter((property, index) => {
      if (property) {
        return true;
      } else {
        return false;
      }
    });

    let formData = new FormData();
    formData.append("fileBook", selectedFile);
    /*
    await axios.put(`${API.mainPage.getBooks}/${id}`, {
      title: filteredData[0],
      description: filteredData[1],
      authors: filteredData[2],
      favorite: filteredData[3],
      fileCover: filteredData[4],
      fileName: filteredData[5],
      fileBook: filteredData[6],
    });*/

    await axios.put(`${API.mainPage.getBooks}/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

  return (
    <>
      <ul>
        <li>{book.title}</li>
      </ul>
      <div onClick={() => removeBook()}>Удалить</div>
      <div onClick={() => setOpen(!open)}>Обновить</div>
      {open && (
        <div>
          <form action="" encType="multipart/form-data">
            <input
              type="text"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
            />
            2
            <input
              type="text"
              name="description"
              onChange={(e) => setDescription(e.target.value)}
            />
            3
            <input
              type="text"
              name="authors"
              onChange={(e) => setAuthors(e.target.value)}
            />
            4
            <input
              type="text"
              name="favorite"
              onChange={(e) => setFavorite(e.target.value)}
            />
            5
            <input
              type="text"
              name="fileCover"
              onChange={(e) => setFileCover(e.target.value)}
            />
            6
            <input
              type="text"
              name="fileName"
              onChange={(e) => setFileName(e.target.value)}
            />
            7
            <input
              type="file"
              name="fileBook"
              onChange={(e) => getSelectedFile(e)}
            />
            <button onClick={(e) => updateBook(e)}>Сохранить</button>
          </form>
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

export const getStaticProps = async ({ params }) => {
  const id = params.id;
  const { data: book } = await axios.get<IBook>(
    `${API.mainPage.getBooks}/${id}`
  );
  return {
    props: { book },
  };
};

export default withLayout(Book);
