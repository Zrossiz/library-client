import { Button, Htag, Input } from "@/elements";
import { API } from "@/helpers/api";
import { withLayout } from "@/layout/Layout";
import React from "react";
import styles from "../../styles/Create.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { IBookForm } from "@/interfaces/book.interface";
import { Form } from "@/components";

const Create = () => {
  return (
    <div>
      <Htag tag="h1">Загрузить книгу</Htag>
      <div className={styles.createWrapper}>
        <Form action="publicate" />
      </div>
    </div>
  );
};

export default withLayout(Create);
