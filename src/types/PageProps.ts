import {
  IBrandWithLength,
  ICategory,
  ICategoryWithLength,
  ICountryWithLength,
  IProduct,
  IProductVariant,
  IProductWithLength,
  IReviewWithLength
} from '.';

export interface MainPageProps {
  bestSellers?: IProduct[];
  newProducts?: IProduct[];
  categories?: ICategoryWithLength;
}

export interface ICatalogPageProps {
  brands?: IBrandWithLength;
  countries?: ICountryWithLength;
  products?: IProductWithLength;
  curPage?: number;
  bestSellers?: IProduct[];
  category?: ICategory;
  categories?: ICategoryWithLength;
}

export interface ICategoryPageProps {
  categories?: ICategoryWithLength;
  bestSellers?: IProduct[];
}

export interface IProductCardPageProps {
  accessories?: IProductWithLength;
  bestSellers?: IProduct[];
  product?: IProduct;
  productVariants?: IProductVariant[];
  reviews?: IReviewWithLength;
}

export interface ISearchPageProps {
  categories?: ICategoryWithLength;
  bestsellers?: IProduct[];
  products?: IProductWithLength;
  curPage: number;
}

export interface IFavoritesPageProps {
  accessories?: IProductWithLength;
}

export interface ICartPageProps {
  accessories?: IProductWithLength;
  bestSellers?: IProduct[];
  categories?: ICategoryWithLength;
}
