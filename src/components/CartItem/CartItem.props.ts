import { IItemCart } from "@/types";

export interface CartItemProps {
    product: IItemCart,
    addToCart: (arg0: number, arg1: string | undefined) => void;
    removeFromCart: (arg0: number, arg1: string | undefined, deleteItem?: boolean) => void;
}