import { withLayout } from "@/layout/Layout";
import Link from "next/link";

function Home() {
  return (
    <>
      <h1>Главная</h1>
      <Link href="/books">Книги</Link>
    </>
  );
}

export default withLayout(Home);
