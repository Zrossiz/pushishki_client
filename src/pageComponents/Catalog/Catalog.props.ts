import {
  IAge,
  IBrandWithLength,
  ICountryWithLength,
  IDrive,
  IProductWithLength,
  IVoltage,
} from '@/types';

export interface ICatalogProps {
  brands?: IBrandWithLength;
  countries?: ICountryWithLength;
  products?: IProductWithLength;
  voltage?: IVoltage[];
  age?: IAge[];
  drives?: IDrive[];
  curPage?: number;
}
