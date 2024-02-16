import { IBrandWithLength, ICategoryWithLength, ICountryWithLength, IProduct, IProductWithLength } from ".";

export interface MainPageProps {
    bestSellers?: IProduct[],
    newProducts?: IProduct[],
}

export interface ICatalogPageProps {
    brands?: IBrandWithLength;
    countries?: ICountryWithLength;
    products?: IProductWithLength;
    curPage?: number;
}

export interface ICategoryPageProps {
    categories?: ICategoryWithLength;
    bestSellers?: IProduct[],
}