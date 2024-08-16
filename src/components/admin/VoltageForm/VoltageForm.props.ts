import { IVoltage } from "@/types";

export interface VoltageFormProps {
    voltage?: IVoltage;
    action: 'create' | 'update';
    setOpen: (arg0: boolean) => void;
}