import { HTag, Input, LinkButton } from '@/elements';
import styles from './BrandForm.module.scss';
import { BrandFormProps } from './BrandForm.props';
import { useState } from 'react';
import { updateBrand } from '@/api';

export const BrandForm = ({ setOpen, isEdit, brand }: BrandFormProps) => {
  const [name, setName] = useState<string | undefined>(brand?.name);
  const updateApiBrand = async () => {
    if (brand && name) {
      await updateBrand(brand?.id, name);
      window.location.reload();
    };
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.bg} onClick={() => setOpen(false)}></div>
      <div className={styles.formWrapper}>
        <HTag tag="h2">{isEdit ? `Редактирование ${brand?.name}` : 'Создание'}</HTag>
        <div className={styles.inputWrapper}>
          <label>Название бренда</label>
          <Input type={'text'} value={name} onChange={setName} />
        </div>
        <LinkButton element="button" onClick={() => updateApiBrand()}>Обновить</LinkButton>
      </div>
    </div>
  );
};
