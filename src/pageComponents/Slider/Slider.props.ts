import { IProduct } from '@/types';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface SliderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  products?: IProduct[];
}
