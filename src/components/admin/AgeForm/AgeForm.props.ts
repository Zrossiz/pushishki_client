import { IAge } from '@/types';

export interface AgeFormProps {
  age?: IAge;
  action: 'create' | 'update';
  setOpen: (arg0: boolean) => void;
}
