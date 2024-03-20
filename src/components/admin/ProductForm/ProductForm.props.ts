import { IBrandWithLength, ICategoryWithLength, ICountryWithLength } from "@/types";

export interface ProductFormProps {
  setOpen: (arg0: boolean) => void;
  brands: IBrandWithLength;
  countries: ICountryWithLength;
  categories: ICategoryWithLength
}
