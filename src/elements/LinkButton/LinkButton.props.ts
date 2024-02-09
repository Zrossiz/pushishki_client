import { ReactNode } from "react";

export interface LinkButtonProps {
    element: 'link' | 'button',
    href?: string,
    onClick?: () => void
    children: ReactNode,
}