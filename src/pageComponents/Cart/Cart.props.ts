import { IItemCart } from "@/types";

export interface ICartProps {
    products?: IItemCart[];
    totalProductsCounter: number;
    totalProductsPrice: number;
}