import { IBrand, IAge, IVoltage, IDrive } from '@/types';

export interface MobileSelectMenuListItemProps {
  item: IBrand | IAge | IVoltage | IDrive;
  selectedItems: number[];
  onChange: (arg0: number[]) => void;
}
