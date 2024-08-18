import { useState } from "react"
import { DriveFormProps } from "./DriveForm.props"
import styles from './DriveForm.module.scss';
import { HTag, Input, LinkButton } from "@/elements";
import { createDrive, updateDrive } from "@/api";

export const DriveForm = ({ drive, action, setOpen }: DriveFormProps) => {
    const [value, setValue] = useState<string>(drive?.name || "");

    const publishDrive = async () => {
        switch (action) {
            case 'create':
                await createDriveQuery();
            case 'update':
                await updateDriveQuery();
        }
    }

    const updateDriveQuery = async () => {
        if (value && drive) {
            const data = await updateDrive(drive.id, value);

            if ('id' in data) {
                window.location.reload();
            }
        }
    }

    const createDriveQuery = async () => {
        if (value) {
            const data = await createDrive(value);

            if ('id' in data) {
                window.location.reload();
            }

        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.bg} onClick={() => setOpen(false)}></div>
            <div className={styles.formWrapper}>
                <HTag tag="h2">{drive ? `Обновить ${drive.name}` : 'Создать привод'}</HTag>
                <div className={styles.inputsWrapper}>
                    <label>Значение привода</label>
                    <Input value={value} onChange={setValue} placeholder="Привод" type='text' />
                </div>
                <div className={styles.btnWrapper}>
                    <LinkButton element="button" onClick={publishDrive}>Опубликовать</LinkButton>
                </div>
            </div>
        </div>
    )
}