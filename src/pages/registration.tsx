import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import styles from "../styles/Registration.module.css";
import { Button, Htag, Input, LinkItem } from "@/elements";
import { API } from "@/helpers/api";

const Registration = () => {
  const router = useRouter();

  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<string>("");

  let token: number;

  const registration = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    axios
      .post(API.auth.registration, {
        login,
        password,
        role,
      })
      .then((res) => {
        localStorage.setItem("login", login);
        localStorage.setItem("role", role);
        token = res.data;
      });
    router.push("/");
  };

  return (
    <div className={styles.registrationPageWrapper}>
      <div className={styles.formWrapper}>
        <div className={styles.titlesWrapper}>
          <Htag tag="h1">Добро пожаловать!</Htag>
          <Htag tag="h2">Зарегистрируйтесь</Htag>
        </div>
        <div className={styles.registrationWrapper}>
          <form action="">
            <Input
              className={styles.input}
              type="text"
              placeholder="Имя пользователя"
              onChange={(e) => setLogin(e.target.value)}
            />
            <Input
              className={styles.input}
              type="password"
              placeholder="Пароль"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              className={styles.input}
              type="text"
              placeholder="Роль пользователя (USER or ADMIN)"
              onChange={(e) => setRole(e.target.value)}
            />

            <Button
              onClick={(e) => registration(e)}
              className={styles.registrationButton}
            >
              Зарегистрироваться
            </Button>
          </form>
          <div className={styles.loginWrapper}>
            <LinkItem href="/login" border={false}>
              Уже есть аккаунт?
            </LinkItem>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
