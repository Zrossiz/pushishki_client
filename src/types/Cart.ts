import { IProduct } from '.';

export interface IItemCart {
  product: IProduct;
  count: number;
  color: string | undefined;
  variantId: number;
}

export interface IApiItemCart {
  productId: number;
  color?: string;
  orderId: number;
  quantity: number;
  price: number;
}
