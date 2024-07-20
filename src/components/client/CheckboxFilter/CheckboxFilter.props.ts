export interface ICheckboxFilterProps {
  checkBoxFilterName: string;
  items?: any;
  selectedItems: number[];
  onChange: (arg0: number[]) => void;
}
