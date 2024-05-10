import { ICountry } from "@/types";

export interface CountryFormProps {
    country?: ICountry;
    setOpen: (arg0: boolean) => void;
    isEdit: boolean;
}