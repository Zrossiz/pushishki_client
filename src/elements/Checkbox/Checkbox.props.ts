export interface ICheckboxProps {
  name: string;
  itemId: number;
  selectedItems: number[];
  onChange: (arg0: number[]) => void;
}
