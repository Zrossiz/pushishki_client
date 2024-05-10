import { useState } from 'react';
import styles from './CountryForm.module.scss';
import { CountryFormProps } from './CountryForm.props';
import { HTag, LinkButton } from '@/elements';
import { Input } from '@/elements';

export const CountryForm = ({ setOpen, isEdit, country }: CountryFormProps) => {
    const [name, setName] = useState<string>('');

    const postCountry = () => {

    };

    return (
        <div className={styles.wrapper}>
          <div className={styles.bg} onClick={() => setOpen(false)}></div>
          <div className={styles.formWrapper}>
            <HTag tag="h2">{isEdit ? `Редактирование ${country?.name}` : 'Создание'}</HTag>
            <div className={styles.inputWrapper}>
              <label>Название страны</label>
              <Input type={'text'} value={name} onChange={setName} />
            </div>
            <LinkButton element="button" onClick={() => postCountry()} disabled={name ? false : true}>
              {isEdit ? 'Обновить' : 'Создать'}
            </LinkButton>
          </div>
        </div>
      );
}