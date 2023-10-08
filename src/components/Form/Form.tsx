import React from "react";
import { useForm } from "react-hook-form";
import styles from "./Form.module.css";
import { Htag, Input, Button } from "@/elements";
import { IBookForm } from "@/interfaces/book.interface";

export const Form = () => {
  const { register } = useForm<IBookForm>();
  return (
    <div className={styles.createForm}>
      <div className={styles.InputWrapper}>
        <label htmlFor="title">
          <Htag tag="h2">Заголовок</Htag>
        </label>
        <div className={styles.Input}>
          <Input
            placeholder="Введите заголовок"
            id="title"
            type="text"
            {...register("title")}
          />
        </div>
      </div>
      <div className={styles.InputWrapper}>
        <label htmlFor="description">
          <Htag tag="h2">Описание</Htag>
        </label>
        <div className={styles.Input}>
          <Input
            placeholder="Введите описание"
            id="description"
            type="text"
            {...register("description")}
          />
        </div>
      </div>
      <div className={styles.InputWrapper}>
        <label htmlFor="authors">
          <Htag tag="h2">Авторы</Htag>
        </label>
        <div className={styles.Input}>
          <Input
            placeholder="Введите авторов"
            id="authors"
            type="text"
            {...register("authors")}
          />
        </div>
      </div>
      <div className={styles.InputWrapper}>
        <label htmlFor="favorite">
          <Htag tag="h2">Добавить в любимые</Htag>
        </label>
        <div className={styles.Input}>
          <Input
            placeholder="Добавить в любимые?"
            id="favorite"
            type="text"
            {...register("favorite")}
          />
        </div>
      </div>
      <div className={styles.InputWrapper}>
        <label htmlFor="fileCover">
          <Htag tag="h2">Обложка</Htag>
        </label>
        <div className={styles.Input}>
          <Input
            placeholder="Обложка"
            id="fileCover"
            type="text"
            {...register("fileCover")}
          />
        </div>
      </div>
      <div className={styles.InputWrapper}>
        <label htmlFor="fileName">
          <Htag tag="h2">Название файла</Htag>
        </label>
        <div className={styles.Input}>
          <Input
            placeholder="Название файла"
            id="fileName"
            type="text"
            {...register("fileName")}
          />
        </div>
      </div>
      <div className={styles.InputWrapper}>
        <label htmlFor="fileBook">
          <Htag tag="h2">Книга</Htag>
        </label>
        <div className={styles.Input}>
          <Input id="fileBook" type="file" {...register("fileBook")} />
        </div>
      </div>
      <div className={styles.sendButton}>
        <Button type="submit">Загрузить</Button>
      </div>
    </div>
  );
};
