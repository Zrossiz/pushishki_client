import { ISubCategory } from './SubCategory';

export interface ICategory {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
  metaTitle: string;
  metaDescription: string;
  metaKeyWords: string;
  SubCategory: ISubCategory[];
}

export interface ICategoryWithLength {
  length: number;
  totalPages: number;
  data: ICategory[];
}
