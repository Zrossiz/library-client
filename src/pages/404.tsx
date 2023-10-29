import styles from "../styles/404.module.css";
import { Button, Htag } from "@/elements";
import Link from "next/link";

const Error404 = () => {
  return (
    <div className={styles.errorWrapper}>
      <div className={styles.wrapper}>
        <Htag tag="h1">Ой...</Htag>
        <Htag tag="h2">Кажется тут ничего нет...</Htag>
        <div className={styles.homeButtonWrapper}>
          <Link href="/">
            <Button>На главную</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error404;
