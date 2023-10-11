import React from "react";
import { withLayout } from "@/layout/Layout";
import { API } from "@/helpers/api";
import { Input, Button, Htag } from "@/elements";
import { useState } from "react";
import axios from "axios";
import { IBook } from "@/interfaces/book.interface";

function Search() {
  const [title, setTitle] = useState<string>("");
  const [books, setBooks] = useState<IBook[]>([]);

  const search = async () => {
    console.log(title);
    await axios
      .post(`${API.mainPage.getBooks}/search`, {
        title: title,
      })
      .then((res) => setBooks(res.data));
  };

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
      <div onClick={() => search()}>Искать</div>

      <div>
        <ul>{books && books.map((item, index) => <li>{item.title}</li>)}</ul>
      </div>
    </div>
  );
}

export default withLayout(Search);
