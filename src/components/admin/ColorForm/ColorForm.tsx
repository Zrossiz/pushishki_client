import { ColorFormProps } from './ColorForm.props';
import styles from './Color.module.scss';
import { useState } from 'react';
import { HTag, Input, LinkButton } from '@/elements';
import { createColor, uploadFiles } from '@/api';
import { v4 as uuidv4 } from 'uuid';

export const ColorForm = ({ setOpen }: ColorFormProps) => {
  const [color, setColor] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);

  const create = async () => {
    await createColor(title, color, image?.name);

    if (image) {
      await uploadFiles(image);
    };
  };

  const handleImageChange = (e: any) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const fileExtension = file.name.split('.').pop();
      const newName = `${uuidv4()}.${fileExtension}`;
      const renamedFile = new File([file], newName, { type: file.type });
      setImage(renamedFile);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.bg} onClick={() => setOpen(false)}></div>
      <div className={styles.formWrapper}>
        <HTag tag="h2">Создание цвета</HTag>
        <div className={styles.inputWrapper}>
          <label>Введите заголовок для цвета</label>
          <Input type="text" placeholder="Введите заголовок для цвета" value={title} onChange={setTitle} />
        </div>
        <div className={styles.inputWrapper}>
          <label>Введите цвет</label>
          <Input type="text" placeholder="Введите цвет" value={color} onChange={setColor} />
        </div>
        <div className={styles.inputWrapper}>
          <label>Изображение</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
        <LinkButton
          element="button"
          onClick={() => create()}
          disabled={color.length > 1 || (image?.name) ? false : true}
        >
          Создать
        </LinkButton>
      </div>
    </div>
  );
};
