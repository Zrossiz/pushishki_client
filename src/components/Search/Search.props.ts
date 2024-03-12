import { IProduct } from "@/types";

export interface SearchProps {
    search: string;
    setSearch: (arg0: string) => void;
    products: IProduct[];
}