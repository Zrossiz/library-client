import { withLayout } from "@/layout/Layout";
import Link from "next/link";
import Image from "next/image";

function Home() {
  return (
    <>
      <h1>Главная</h1>
      <div className="main"></div>
      <Link href="/books">Книги</Link>
      <br />
      <Link href="/books/create">Создать книгу</Link>
    </>
  );
}

export default withLayout(Home);
