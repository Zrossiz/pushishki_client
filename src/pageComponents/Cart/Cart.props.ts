import { IItemCart, IProduct } from "@/types";

export interface ICartProps {
    products?: IItemCart[];
    totalProductsCounter: number;
    totalProductsPrice: number;
    addToCart: (arg0: number, arg1: string | undefined) => void;
    removeFromCart: (arg0: number, arg1: string | undefined) => void;
    switchFavorite: (arg0: IProduct) => void;
    localStorageFavorites: IProduct[];
}