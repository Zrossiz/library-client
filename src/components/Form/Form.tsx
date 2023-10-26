import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./Form.module.css";
import { Htag, Input, Button } from "@/elements";
import { IBookForm } from "@/interfaces/book.interface";
import { useRouter } from "next/router";
import axios from "axios";
import { API } from "@/helpers/api";
import { FormProps } from "./Form.props";

export const Form = ({ action, titleColor }: FormProps) => {
  const { register } = useForm<IBookForm>();

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [authors, setAuthors] = useState<string>("");
  const [favorite, setFavorite] = useState<string>("");
  const [fileCover, setFileCover] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");

  const router = useRouter();
  const { id } = router.query;

  let selectedFile: Blob;

  const getSelectedFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    selectedFile = e.target?.files[0];
    console.log(selectedFile);
  };

  const dataBook = [title, description, authors, favorite, fileCover, fileName];

  const publicateBook = async () => {
    let formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("authors", authors);
    formData.append("favorite", favorite);
    formData.append("fileCover", fileCover);
    formData.append("fileName", fileName);
    formData.append("fileBook", selectedFile);

    await axios
      .post(API.mainPage.getBooks, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        window.location.reload();
      });
  };

  const updateBook = async () => {
    let filteredData = dataBook.filter((property, index) => {
      if (property) {
        return true;
      } else {
        return false;
      }
    });

    let formData = new FormData();

    formData.append("title", filteredData[0]);
    formData.append("description", filteredData[1]);
    formData.append("authors", filteredData[2]);
    formData.append("favorite", filteredData[3]);
    formData.append("fileCover", filteredData[4]);
    formData.append("fileName", filteredData[5]);
    formData.append("fileBook", selectedFile);

    await axios
      .put(`${API.mainPage.getBooks}/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        window.location.reload();
      });
  };

  return (
    <form encType="multipart/form-data">
      <div className={styles.formWrapper}>
        <div className={styles.inputWrapper}>
          <label htmlFor="title">
            <Htag
              color={titleColor === "black" ? titleColor : "white"}
              tag="h2"
            >
              Заголовок
            </Htag>
          </label>
          <div className={styles.input}>
            <Input
              value={title}
              placeholder="Введите заголовок"
              id="title"
              type="text"
              {...register("title", {
                onChange: (e) => setTitle(e.target.value),
              })}
            />
          </div>
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="description">
            <Htag
              color={titleColor === "black" ? titleColor : "white"}
              tag="h2"
            >
              Описание
            </Htag>
          </label>
          <div className={styles.input}>
            <Input
              placeholder="Введите описание"
              id="description"
              type="text"
              value={description}
              {...register("description", {
                onChange: (e) => setDescription(e.target.value),
              })}
            />
          </div>
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="authors">
            <Htag
              color={titleColor === "black" ? titleColor : "white"}
              tag="h2"
            >
              Авторы
            </Htag>
          </label>
          <div className={styles.input}>
            <Input
              placeholder="Введите авторов"
              id="authors"
              type="text"
              value={authors}
              {...register("authors", {
                onChange: (e) => setAuthors(e.target.value),
              })}
            />
          </div>
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="favorite">
            <Htag
              color={titleColor === "black" ? titleColor : "white"}
              tag="h2"
            >
              В любимые
            </Htag>
          </label>
          <div className={styles.input}>
            <Input
              placeholder="Добавить в любимые?"
              id="favorite"
              type="text"
              value={favorite}
              {...register("favorite", {
                onChange: (e) => setFavorite(e.target.value),
              })}
            />
          </div>
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="fileCover">
            <Htag
              color={titleColor === "black" ? titleColor : "white"}
              tag="h2"
            >
              Обложка
            </Htag>
          </label>
          <div className={styles.input}>
            <Input
              placeholder="Обложка"
              id="fileCover"
              type="text"
              value={fileCover}
              {...register("fileCover", {
                onChange: (e) => setFileCover(e.target.value),
              })}
            />
          </div>
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="fileName">
            <Htag
              color={titleColor === "black" ? titleColor : "white"}
              tag="h2"
            >
              Название файла
            </Htag>
          </label>
          <div className={styles.input}>
            <Input
              placeholder="Название файла"
              id="fileName"
              type="text"
              value={fileName}
              {...register("fileName", {
                onChange: (e) => setFileName(e.target.value),
              })}
            />
          </div>
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="fileBook">
            <Htag
              color={titleColor === "black" ? titleColor : "white"}
              tag="h2"
            >
              Загрузить книгу
            </Htag>
          </label>
          <div className={styles.input}>
            <Input
              id="fileBook"
              type="file"
              {...register("fileBook", {
                onChange: (e) => getSelectedFile(e),
              })}
            />
          </div>
        </div>
        <Button
          className={styles.sendButton}
          onClick={
            action === "publicate" ? () => publicateBook() : () => updateBook()
          }
        >
          Загрузить книгу
        </Button>
      </div>
    </form>
  );
};
