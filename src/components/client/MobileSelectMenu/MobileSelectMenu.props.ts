import { IBrand, IAge, IVoltage, IDrive } from '@/types';

export interface MobileSelectMenuProps {
  selectMenuName: string;
  items: IBrand[] | IAge[] | IVoltage[] | IDrive[] | false;
  selectedItems: number[];
  onChange: (arg0: number[]) => void;
}
