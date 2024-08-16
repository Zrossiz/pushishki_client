export interface InputProps {
  placeholder?: string;
  type: 'text' | 'phone' | 'password' | 'number';
  value?: any;
  onChange?: (arg0: any) => void;
  defaultValue?: any;
}
