import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IBook } from "@/interfaces/book.interface";

export interface CardItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  book: IBook;
}
