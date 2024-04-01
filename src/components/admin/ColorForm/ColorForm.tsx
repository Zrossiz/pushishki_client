import { ColorFormProps } from "./ColorForm.props";
import styles from './Color.module.scss';
import { useState } from "react";
import { Input, LinkButton } from "@/elements";
import { createColor } from "@/api";

export const ColorForm = ({ setOpen }: ColorFormProps) => {
    const [color, setColor] = useState<string>('');

    const create = async () => {
        await createColor(color);
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.bg} onClick={() => setOpen(false)}></div>
            <form className={styles.formWrapper}>
                <div className={styles.inputWrapper}>
                    <label>Введите цвет</label>
                    <Input type="text" placeholder="Введите цвет" value={color} onChange={setColor} />
                </div>
                <LinkButton element="button" onClick={() => create()} disabled={color.length > 1 ? false : true}>
                    Создать
                </LinkButton>
            </form>
        </div>
    );
};