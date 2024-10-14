import { IAge, IBrand, ICategory, ICountry, IDrive, ISubCategory, IVoltage } from '.';
import { IManufacturer } from './Manufacturer';

export interface IProductWithLength {
  length: number;
  totalPages: number;
  data: IProduct[];
}

export interface IProduct {
  id: number;
  country: ICountry;
  brand: IBrand;
  category: ICategory;
  age?: IAge;
  drive?: IDrive;
  voltage?: IVoltage;
  subCategories?: ISubCategory[];
  name: string;
  description: string;
  articul: string;
  gearbox: string;
  battery: string;
  maximumLoad: number;
  assembledModelSize: string;
  modelSizeInPackage: string;
  video: string;
  image: string;
  bestseller: boolean;
  new: boolean;
  inStock: boolean;
  defaultPrice: number;
  rating: number;
  metaTitle: string;
  metaDescription: string;
  metaKeyWords: string;
  slug: string;
  characteristics?: string;
  voltageId?: number;
  ageId?: number;
  driveId?: number;
  manufacturer: IManufacturer;
}

export interface ICreateProduct {
  countryId?: number;
  brandId?: number;
  categoryId?: number;
  name?: string;
  description?: string;
  defaultPrice?: number;
  articul?: string;
  gearbox?: string;
  battery?: string;
  maximumLoad?: number;
  assembledModelSize?: string;
  modelSizeInPackage?: string;
  video?: string;
  image?: string;
  bestseller?: boolean;
  new?: boolean;
  characteristics?: string;
  metaTitle?: string;
  metaDescription?: string;
  metaKeyWords?: string;
  inStock?: boolean;
  voltageId?: number;
  ageId?: number;
  driveId?: number;
  manufacturerId?: number;
}
