import { IBrandWithLength, ICategoryWithLength } from ".";

export interface ICatalogPageProps {
    brands?: IBrandWithLength;
}

export interface ICategoryPageProps {
    categories?: ICategoryWithLength
}