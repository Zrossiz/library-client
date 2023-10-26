import React, { useEffect } from "react";
import { withLayout } from "@/layout/Layout";
import { API } from "@/helpers/api";
import { Input, Button, Htag } from "@/elements";
import { useState } from "react";
import axios from "axios";
import { IBook } from "@/interfaces/book.interface";
import { CardItem } from "@/components";

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
    <div>
      <Htag tag="h1">Поиск книг</Htag>
      <Input
        type="text"
        value={title}
        required={true}
        onChange={(e) => setTitle(e.target.value)}
        name="title"
      />
      <div onClick={() => setSearchBooks(true)}>Искать</div>
      <div>
        <ul>
          {books.length > 0 &&
            books.map((item, index) => (
              <CardItem
                id={item._id}
                title={item.title}
                fileCover={item.fileCover}
              />
            ))}
        </ul>
      </div>
    </div>
  );
}

export default withLayout(Search);
