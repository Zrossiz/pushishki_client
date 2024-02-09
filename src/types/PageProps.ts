import { IBrandWithLength, ICategoryWithLength, ICountryWithLength } from ".";

export interface ICatalogPageProps {
    brands?: IBrandWithLength;
    countries?: ICountryWithLength;
}

export interface ICategoryPageProps {
    categories?: ICategoryWithLength;
}