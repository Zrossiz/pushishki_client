import { IProduct } from '.';

export interface IItemCart {
  product: IProduct;
  count: number;
  color: string | undefined;
  variantId: number;
  variantImage: string;
}

export interface IApiItemCart {
  productId: number;
  color?: string;
  quantity: number;
  price: number;
}
