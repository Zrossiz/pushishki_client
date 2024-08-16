import { useState } from "react"
import styles from './AgeForm.module.scss';
import { HTag, Input, LinkButton } from "@/elements";
import { createAge, updateAge } from "@/api";
import { AgeFormProps } from "./AgeForm.props";

export const AgeForm = ({ age, action, setOpen }: AgeFormProps) => {
    const [value, setValue] = useState<string>(age?.name || "");

    const publishVoltage = async () => {
        switch (action) {
            case 'create':
                await createAgeQuery();
            case 'update':
                await updateAgeQuery();
        }
    }

    const updateAgeQuery = async () => {
        if (value && age) {
            const data = await updateAge(age.id, value)

            if ('id' in data) {
                window.location.reload();
            }
        }
    }

    const createAgeQuery = async () => {
        if (value) {
            const data = await createAge(value);

            if ('id' in data) {
                window.location.reload();
            }

        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.bg} onClick={() => setOpen(false)}></div>
            <div className={styles.formWrapper}>
                <HTag tag="h2">{age ? `Обновить ${age.name}` : 'Создать возраст'}</HTag>
                <div className={styles.inputsWrapper}>
                    <label>Значение возраста</label>
                    <Input value={value} onChange={setValue} placeholder="Возраст" type='text' />
                </div>
                <div className={styles.btnWrapper}>
                    <LinkButton element="button" onClick={publishVoltage}>Опубликовать</LinkButton>
                </div>
            </div>
        </div>
    )
}