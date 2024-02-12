import { IBrandWithLength, ICategoryWithLength, ICountryWithLength, IProductWithLength } from ".";

export interface ICatalogPageProps {
    brands?: IBrandWithLength;
    countries?: ICountryWithLength;
    products?: IProductWithLength
}

export interface ICategoryPageProps {
    categories?: ICategoryWithLength;
}