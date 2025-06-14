import { HTag, Input, LinkButton } from "@/elements";
import { useState } from "react";
import styles from "./CreateLicenseForm.module.scss";
import { CreateLicenseProps } from "./CreateLicenseForm.props";
import { createDriveLicense } from "@/api/FileGenerator";

export const CreateLicenseForm = ({ setOpen }: CreateLicenseProps) => {
    const [name, setName] = useState<string>("");
    const [surname, setSurname] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [birthDate, setBirthDate] = useState<string>("");
    const [file, setFile] = useState<File | null>(null);

    const handleImageChange = (e: any) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            setFile(file);
        }
    };

    const create = async () => {
        if (!file) {
            return
        }

        const resultUrl = await createDriveLicense(
            name,
            surname,
            birthDate,
            city,
            file
        )

        window.open(resultUrl, '_blank');
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.bg} onClick={() => setOpen(false)}></div>
            <div className={styles.formWrapper}>
                <HTag tag="h2">Генерация прав</HTag>
                <div className={styles.inputWrapper}>
                    <label>Имя</label>
                    <Input
                        value={name}
                        onChange={setName}
                        type="text"
                        placeholder="Введите имя"
                    />
                </div>
                <div className={styles.inputWrapper}>
                    <label>Фамилия</label>
                    <Input
                        value={surname}
                        onChange={setSurname}
                        type="text"
                        placeholder="Введите фамилию"
                    />
                </div>
                <div className={styles.inputWrapper}>
                    <label>Город</label>
                    <Input
                        value={city}
                        onChange={setCity}
                        type="text"
                        placeholder="Введите город"
                    />
                </div>
                <div className={styles.inputWrapper}>
                    <label>День рождения</label>
                    <Input
                        value={birthDate}
                        onChange={setBirthDate}
                        type="text"
                        placeholder="Введите дату рождения"
                    />
                </div>
                <div className={styles.inputWrapper}>
                    <label>Изображение</label>
                    <input type="file" accept="image/*" onChange={handleImageChange} />
                </div>
                <div className={styles.btn}>
                    <LinkButton 
                        element="button" 
                        children="Сгенерировать" 
                        onClick={create}
                    />
                </div>
            </div>
        </div>
    )
}