import React, { useEffect } from "react";
import { withLayout } from "@/layout/Layout";
import { API } from "@/helpers/api";
import { Input, Button, Htag } from "@/elements";
import { useState } from "react";
import axios from "axios";
import { IBook } from "@/interfaces/book.interface";
import { CardItem } from "@/components";
import styles from "../../styles/BookSearch.module.css";

function Search() {
  const [title, setTitle] = useState<string>("");
  const [books, setBooks] = useState<IBook[]>([]);
  const [searchBooks, setSearchBooks] = useState<boolean>(false);

  const search = async () => {
    console.log(title);
    console.log(true);
    await axios
      .post(`${API.mainPage.getBooks}/search`, {
        title: title,
      })
      .then((res) => {
        setBooks(res.data);
        setSearchBooks(false);
        console.log(books);
      });
  };

  if (searchBooks) {
    search();
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      setSearchBooks(true);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className={styles.searchPageWrapper}>
      <Htag className={styles.searchTitle} tag="h1">
        Введите название книги
      </Htag>
      <Input
        placeholder="Введите название книги"
        type="text"
        value={title}
        required={true}
        onChange={(e) => setTitle(e.target.value)}
        name="title"
        className={styles.searchInput}
      />
      <Button
        className={styles.searchButton}
        onClick={() => setSearchBooks(true)}
      >
        Поиск
      </Button>
      <div>
        <ul className={styles.searchResultsWrapper}>
          {books.length > 0 &&
            books.map((item, index) => <CardItem bookProps={item} />)}
        </ul>
      </div>
    </div>
  );
}

export default withLayout(Search);
