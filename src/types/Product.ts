import { IBrand, ICategory, ICountry } from ".";

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
}
