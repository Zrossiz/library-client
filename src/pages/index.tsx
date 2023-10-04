import { Button, Htag, Technology } from "@/elements";
import { withLayout } from "@/layout/Layout";
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <>
      <section className={styles.firstScreen}>
        <div className={styles.main}></div>
        <div className={styles.titleH1}>
          <Htag tag="h1">Самая технологичная онлайн библиотека</Htag>
        </div>
        <div className={styles.arrowDown}>
          <a className={styles.about} href="#about">
            {" "}
            <svg width="24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12.0001 21.2501C11.8101 21.2501 11.6201 21.1801 11.4701 21.0301L5.40012 14.9601C5.11012 14.6701 5.11012 14.1901 5.40012 13.9001C5.69012 13.6101 6.17012 13.6101 6.46012 13.9001L12.0001 19.4401L17.5401 13.9001C17.8301 13.6101 18.3101 13.6101 18.6001 13.9001C18.8901 14.1901 18.8901 14.6701 18.6001 14.9601L12.5301 21.0301C12.3801 21.1801 12.1901 21.2501 12.0001 21.2501Z"
                fill="#fff"
              />
              <path
                d="M12 21.08C11.59 21.08 11.25 20.74 11.25 20.33V3.5C11.25 3.09 11.59 2.75 12 2.75C12.41 2.75 12.75 3.09 12.75 3.5V20.33C12.75 20.74 12.41 21.08 12 21.08Z"
                fill="#fff"
              />
            </svg>
          </a>
        </div>
      </section>
      <section id="about" className={styles.secondScreen}>
        <Technology></Technology>
      </section>
    </>
  );
}

export default withLayout(Home);
