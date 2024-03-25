import { ICategory } from "@/types";

export interface CategoryFormProps {
  category?: ICategory;
  update?: boolean;
  setOpen: (arg0: boolean) => void;
}
