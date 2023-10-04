import { DetailedHTMLProps, LinkHTMLAttributes, ReactNode } from "react";

export interface LinkProps
  extends DetailedHTMLProps<
    LinkHTMLAttributes<HTMLLinkElement>,
    HTMLLinkElement
  > {
  children: ReactNode;
  border: boolean;
  targetBlank?: boolean;
  href: string;
}
