import { IProduct } from '.';

export interface IItemCart {
  product: IProduct;
  count: number;
  color: string | undefined;
}
