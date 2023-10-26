import { IBook } from "@/interfaces/book.interface";

export interface BookItemDescProps {
  book: IBook;
  id: string | string[] | undefined;
}
