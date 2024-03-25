import { HTag, Input } from '@/elements';
import styles from './Category.module.scss';
import { CategoryFormProps } from './Category.props';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const CategoryForm = ({ setOpen, update, id, }: CategoryFormProps) => {
    const [name, setName] = useState<string>('');
    const [metaTitle, setMetaTitle] = useState<string>('');
    const [metaDescription, setMetaDescription] = useState<string>('');
    const [metaKeyWords, setMetaKeyWords] = useState<string>('');
    const [image, setImage] = useState<File | null>(null);

    const handleImageChange = (e: any) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
          const fileExtension = file.name.split('.').pop();
          const newName = `${uuidv4()}.${fileExtension}`;
          const renamedFile = new File([file], newName, { type: file.type });
          setImage(renamedFile);
        };
      };

    return (
        <div className={styles.wrapper}>
            <div className={styles.bg} onClick={() => setOpen(false)}></div>
            <form className={styles.formWrapper}>
                {
                    !update &&
                    <div className={styles.titleWrapper}>
                        <HTag tag="h2">Создать категорию</HTag>
                    </div>
                }
                <div className={styles.inputWrapper}>
                    <label>Название</label>
                    <Input value={name} onChange={setName} type={'text'} />
                </div>
                <div className={styles.inputWrapper}>
                    <label>Мета заголовок</label>
                    <Input value={metaTitle} onChange={setMetaTitle} type={'text'} />
                </div>
                <div className={styles.inputWrapper}>
                    <label>Мета описание</label>
                    <Input value={metaDescription} onChange={setMetaDescription} type={'text'} />
                </div>
                <div className={styles.inputWrapper}>
                    <label>Мета ключевые слова</label>
                    <Input value={metaKeyWords} onChange={setMetaKeyWords} type={'text'} />
                </div>
                <div className={styles.inputWrapper}>
                    <label>Изображение</label>
                    <input type="file" accept="image/*" onChange={handleImageChange} />
                </div>
            </form>
        </div>
    );
};