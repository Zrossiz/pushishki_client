import { IBrandWithLength, ICategoryWithLength, ICountryWithLength, IProduct } from '@/types';

export interface ProductListItemProps {
  product: IProduct;
  brands?: IBrandWithLength;
  countries?: ICountryWithLength;
  categories?: ICategoryWithLength;
}
