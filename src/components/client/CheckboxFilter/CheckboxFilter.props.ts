import { IAge, IBrand, IDrive, IVoltage } from '@/types';

export interface ICheckboxFilterProps {
  checkBoxFilterName: string;
  items?: IBrand[] | IAge[] | IVoltage[] | IDrive[] | false;
  selectedItems: number[];
  onChange: (arg0: number[]) => void;
}
