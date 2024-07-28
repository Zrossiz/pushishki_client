import {
  IAge,
  IBrandWithLength,
  ICategory,
  ICategoryWithLength,
  ICountryWithLength,
  IProduct,
  IProductVariant,
  IProductWithLength,
  IReview,
  IReviewWithLength,
  ISubCategory,
} from '.';
import { IDrive } from './Drive';
import { IVoltage } from './Voltage';

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
  ages?: IAge[];
  voltages?: IVoltage[];
  drives?: IDrive[];
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
  reviews?: IReview[];
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

export interface IAdminProduct {
  categories: ICategoryWithLength;
  countries: ICategoryWithLength;
  brands: IBrandWithLength;
}

export interface ISubCategoryPage {
  subCategories?: ISubCategory[]
}