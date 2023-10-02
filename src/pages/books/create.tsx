import { API } from "@/helpers/api";
import { withLayout } from "@/layout/Layout";
import React from "react";

const Create = () => {
  return (
    <div>
      <form
        action={API.mainPage.getBooks}
        encType="multipart/form-data"
        method="POST"
      >
        1
        <input type="text" name="title" />
        2
        <input type="text" name="description" />
        3
        <input type="text" name="authors" />
        4
        <input type="text" name="favorite" />
        5
        <input type="text" name="fileCover" />
        6
        <input type="text" name="fileName" />
        7
        <input type="file" name="fileBook" />
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default withLayout(Create);
