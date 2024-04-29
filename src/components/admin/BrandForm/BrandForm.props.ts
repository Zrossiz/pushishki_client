import { IBrand } from "@/types";

export interface BrandFormProps {
    setOpen: (arg0: boolean) => void;
    isEdit: boolean;
    brand?: IBrand;
}