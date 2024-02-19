import { IBrandWithLength, ICategoryWithLength, ICountryWithLength, IProduct, IProductWithLength } from ".";

export interface MainPageProps {
    bestSellers?: IProduct[],
    newProducts?: IProduct[],
}

export interface ICatalogPageProps {
    brands?: IBrandWithLength,
    countries?: ICountryWithLength,
    products?: IProductWithLength,
    curPage?: number,
    bestSellers?: IProduct[],
}

export interface ICategoryPageProps {
    categories?: ICategoryWithLength;
    bestSellers?: IProduct[],
}

export interface IProductCardPageProps {
    acessories?: IProductWithLength,
    bestSellers?: IProduct[],
    product?: IProduct,
}