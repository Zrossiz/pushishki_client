import { ReactNode } from "react";

export interface LinkButtonProps {
    element: 'link' | 'button',
    href?: string,
    onClick?: (arg: any) => void,
    children: ReactNode,
    disabled?: boolean,
}