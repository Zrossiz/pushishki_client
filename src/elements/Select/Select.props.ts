import { IColor } from '@/types/Color';

export interface SelectProps {
  setActiveColor: (arg0: IColor) => void;
  colors: IColor[];
  activeColor: IColor | undefined;
}
