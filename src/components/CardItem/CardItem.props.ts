import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface CardItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  id: string;
  title: string;
  fileCover?: string;
}
