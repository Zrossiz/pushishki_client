import { IManufacturer } from '@/types/Manufacturer';

export interface IManufacturerFormProps {
  item?: IManufacturer;
  isEdit: boolean;
  setOpen: (arg0: boolean) => void;
}
