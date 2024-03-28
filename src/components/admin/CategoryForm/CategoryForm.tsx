import { HTag, Input, LinkButton } from '@/elements';
import styles from './Category.module.scss';
import { CategoryFormProps } from './Category.props';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ICategory } from '@/types';
import { createCategory, updateCategory, uploadFiles } from '@/api';

export const CategoryForm = ({ setOpen, update, category }: CategoryFormProps) => {
  const [name, setName] = useState<string>(category?.name ?? '');
  const [metaTitle, setMetaTitle] = useState<string>(category?.metaTitle ?? '');
  const [metaDescription, setMetaDescription] = useState<string>(category?.metaDescription ?? '');
  const [metaKeyWords, setMetaKeyWords] = useState<string>(category?.metaKeyWords ?? '');
  const [image, setImage] = useState<File | null>(null);

  let disabled = true;

  if (name && image) {
    disabled = false;
  }

  if (update) {
    disabled = false;
  }

  const handleImageChange = (e: any) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const fileExtension = file.name.split('.').pop();
      const newName = `${uuidv4()}.${fileExtension}`;
      const renamedFile = new File([file], newName, { type: file.type });
      setImage(renamedFile);
    }
  };

  const create = async () => {
    if (update && category) {
      await updateCategory(category?.slug, metaTitle, metaDescription, metaKeyWords);
    } else {
      if (image) {
        const category: ICategory | { message: string } = await createCategory(
          name,
          image?.name,
          metaTitle,
          metaDescription,
          metaKeyWords,
        );

        await uploadFiles(image);
      }
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.bg} onClick={() => setOpen(false)}></div>
      <form className={styles.formWrapper}>
        {!update ? (
          <div className={styles.titleWrapper}>
            <HTag tag="h2">Создать категорию</HTag>
          </div>
        ) : (
          <div className={styles.titleWrapper}>
            <HTag tag="h2">Редактирование {category?.name}</HTag>
          </div>
        )}
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
        <LinkButton element="button" onClick={() => create()} disabled={disabled}>
          Создать
        </LinkButton>
      </form>
    </div>
  );
};
