import {
  IAge,
  IBrandWithLength,
  ICategoryWithLength,
  ICountryWithLength,
  IDrive,
  IProduct,
  ISubCategory,
  IVoltage,
} from '@/types';
import { IManufacturer } from '@/types/Manufacturer';

export interface ProductListItemProps {
  product: IProduct;
  brands?: IBrandWithLength;
  countries?: ICountryWithLength;
  categories?: ICategoryWithLength;
  ages: IAge[];
  voltages: IVoltage[];
  subCategories: ISubCategory[];
  drives: IDrive[];
  manufacturers: IManufacturer[];
}
