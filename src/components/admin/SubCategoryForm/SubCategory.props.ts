import { ISubCategory } from '@/types';

export interface SubCategoryFormProps {
  setOpen: (arg0: boolean) => void;
  action: 'create' | 'update';
  subCategory?: ISubCategory;
}
