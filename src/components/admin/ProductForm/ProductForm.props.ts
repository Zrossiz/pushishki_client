import { IBrandWithLength, ICategoryWithLength, ICountryWithLength, IProduct } from '@/types';

export interface ProductFormProps {
  setOpen: (arg0: boolean) => void;
  brands?: IBrandWithLength;
  countries?: ICountryWithLength;
  categories?: ICategoryWithLength;
  product?: IProduct;
  update?: boolean;
}
