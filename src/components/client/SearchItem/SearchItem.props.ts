import { IProduct } from '@/types';

export interface SearchItemProps {
  product: IProduct;
  localStorageFavorites?: IProduct[];
  customHref?: string;
}
