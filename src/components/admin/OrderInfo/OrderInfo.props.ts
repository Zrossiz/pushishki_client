import { IOrder } from '@/types';

export interface OrderInfoProps {
  setOpen: (arg0: boolean) => void;
  date: string[];
  order: IOrder;
}
