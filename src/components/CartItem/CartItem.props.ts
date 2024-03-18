import { IItemCart, IProduct } from '@/types';

export interface CartItemProps {
  product: IItemCart;
  addToCart: (arg0: number, arg1: string | undefined) => void;
  removeFromCart: (arg0: number, arg1: string | undefined, deleteItem?: boolean) => void;
  switchFavorite: (arg0: IProduct) => void;
  localStorageFavorites: IProduct[];
}
