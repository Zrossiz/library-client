import { Button, Htag, Input } from "@/elements";
import { API } from "@/helpers/api";
import { withLayout } from "@/layout/Layout";
import React from "react";
import styles from "../../styles/Create.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { IBookForm } from "@/interfaces/book.interface";
import { Form } from "@/components";

const Create = () => {
  const { register, handleSubmit } = useForm<IBookForm>();

  const submit: SubmitHandler<IBookForm> = (data) => {
    console.log(data);
  };
  return (
    <div className={styles.create}>
      <Htag tag="h1">Загрузить книгу</Htag>
      <div className={styles.createWrapper}>
        <form
          action={API.mainPage.getBooks}
          encType="multipart/form-data"
          method="POST"
        >
          <Form />
        </form>
      </div>
    </div>
  );
};

export default withLayout(Create);
