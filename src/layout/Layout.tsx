import { FunctionComponent } from "react";

import { Noto_Sans } from "next/font/google";
import Head from "next/head";

import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

import { LayoutProps } from "./Layout.props";
import styles from "./Layout.module.css";
import cn from "classnames";

const inter = Noto_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Библиотека Express, Next</title>
      </Head>
      <div className={cn(styles.wrapper, inter.className)}>
        <Header />
        <main className={styles.main}>
          <div>{children}</div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
