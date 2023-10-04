import { DetailedHTMLProps, LinkHTMLAttributes, ReactNode } from "react";

export interface LinkProps
  extends DetailedHTMLProps<
    LinkHTMLAttributes<HTMLLinkElement>,
    HTMLLinkElement
  > {
  children: ReactNode;
  href: string;
}
