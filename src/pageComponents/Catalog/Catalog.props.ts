import { IBrandWithLength, ICountryWithLength, IProductWithLength } from '@/types';

export interface ICatalogProps {
  brands?: IBrandWithLength;
  countries?: ICountryWithLength;
  products?: IProductWithLength;
  curPage?: number;
}
