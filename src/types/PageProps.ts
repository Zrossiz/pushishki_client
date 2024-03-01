import { IBrandWithLength, ICategory, ICategoryWithLength, ICountryWithLength, IProduct, IProductVariant, IProductWithLength, IReviewWithLength } from ".";

export interface MainPageProps {
    bestSellers?: IProduct[],
    newProducts?: IProduct[],
    categories?: ICategoryWithLength
}

export interface ICatalogPageProps {
    brands?: IBrandWithLength,
    countries?: ICountryWithLength,
    products?: IProductWithLength,
    curPage?: number,
    bestSellers?: IProduct[],
    category?: ICategory,
    categories?: ICategoryWithLength
}

export interface ICategoryPageProps {
    categories?: ICategoryWithLength;
    bestSellers?: IProduct[],
}

export interface IProductCardPageProps {
    acessories?: IProductWithLength,
    bestSellers?: IProduct[],
    product?: IProduct,
    productVariants?: IProductVariant[],
    reviews?: IReviewWithLength
}

export interface ISearchPage {
    categories?: ICategoryWithLength,
    bestsellers?: IProduct[]
}