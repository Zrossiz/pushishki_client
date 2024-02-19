import { IProduct } from "@/types";

export interface CatalogItemProps {
    product: IProduct,
    localStorageFavorites?: IProduct[],
}