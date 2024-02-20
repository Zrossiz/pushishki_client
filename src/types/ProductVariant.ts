export interface IProductVariant {
    id: number;
    color: string;
    description: string;
    articul: number;
    gearbox: string;
    battery: string;
    maximumLoad: number;
    assembledModelSize: string;
    modelSizeInPackage: string;
    video: string;
    inStock: boolean;
    price: number;
    images: string[];
}