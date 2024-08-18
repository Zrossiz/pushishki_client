import { IAge, IBrandWithLength, ICategoryWithLength, ICountryWithLength, IDrive, IProduct, ISubCategory, IVoltage } from '@/types';

export interface ProductFormProps {
  setOpen: (arg0: boolean) => void;
  brands?: IBrandWithLength;
  countries?: ICountryWithLength;
  categories?: ICategoryWithLength;
  product?: IProduct;
  update?: boolean;
  ages: IAge[];
  voltages: IVoltage[];
  subCategories: ISubCategory[];
  drives: IDrive[];
}
