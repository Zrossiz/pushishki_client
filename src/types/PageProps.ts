import { IBrandWithLength, ICategoryWithLength, ICountryWithLength, IProductWithLength } from ".";

export interface ICatalogPageProps {
    brands?: IBrandWithLength;
    countries?: ICountryWithLength;
    products?: IProductWithLength;
    curPage?: number;
}

export interface ICategoryPageProps {
    categories?: ICategoryWithLength;
}