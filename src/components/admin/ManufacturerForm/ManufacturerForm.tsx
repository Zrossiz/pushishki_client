import { HTag, Input, LinkButton } from '@/elements';
import styles from './ManufacturerForm.module.scss';
import { IManufacturerFormProps } from './ManufacturerForm.props';
import { useState } from 'react';
import { createManufacturer, updateManufacturer } from '@/api';

export const ManufacturerForm = ({ item, isEdit, setOpen }: IManufacturerFormProps) => {
  const [name, setName] = useState<string>(item?.name ?? '');

  const postManufacturer = async () => {
    if (isEdit && item) {
      await updateManufacturer(item.id, name);
    } else {
      await createManufacturer(name);
    }
    window.location.reload();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.bg} onClick={() => setOpen(false)}></div>
      <div className={styles.formWrapper}>
        <HTag tag="h2">{isEdit ? `Редактирование ${item?.name}` : 'Создание'}</HTag>
        <div className={styles.inputWrapper}>
          <label>Название производителя</label>
          <Input type={'text'} value={name} onChange={setName} />
        </div>

        <LinkButton
          element="button"
          onClick={() => postManufacturer()}
          disabled={name ? false : true}
        >
          {isEdit ? 'Обновить' : 'Создать'}
        </LinkButton>
      </div>
    </div>
  );
};
