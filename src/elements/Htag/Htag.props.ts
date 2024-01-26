import { HtmlHTMLAttributes, DetailedHTMLProps } from "react";

export interface HtagProps
    extends DetailedHTMLProps<
        HtmlHTMLAttributes<HTMLHeadingElement>,
        HTMLHeadingElement
    > {
    tag: "h1" | "h2" | "h3";
    color?: "black" | "white";
    children: string;
}