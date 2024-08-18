import { IDrive } from "@/types";

export interface DriveFormProps {
    drive?: IDrive;
    action: 'create' | 'update';
    setOpen: (arg0: boolean) => void;
}