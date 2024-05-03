import { HTag, Input, LinkButton } from '@/elements';
import styles from './BrandForm.module.scss';
import { BrandFormProps } from './BrandForm.props';
import { useEffect, useState } from 'react';
import { createBrand, getCountries, updateBrand } from '@/api';
import { ICountryWithLength } from '@/types';
import Select from 'react-select';

export const BrandForm = ({ setOpen, isEdit, brand }: BrandFormProps) => {
  const [name, setName] = useState<string | undefined>(brand?.name);
  const [selectedCountry, setSelectedCountry] = useState<number>(0);
  const [countries, setCountries] = useState<ICountryWithLength>();

  const postBrand = async () => {
    if (isEdit) {
      if (brand && name) {
        await updateBrand(brand?.id, name);
      }
    } else {
      if (name) {
        await createBrand(selectedCountry, name);
      }
    }
    window.location.reload();
  };

  useEffect(() => {
    (async () => {
      const countriesApi = await getCountries();

      if ('data' in countriesApi) {
        setCountries(countriesApi);
      }
    })();
  }, []);

  const countryOptions = countries?.data.map((item) => ({
    value: item.id,
    label: item.name,
  }));

  return (
    <div className={styles.wrapper}>
      <div className={styles.bg} onClick={() => setOpen(false)}></div>
      <div className={styles.formWrapper}>
        <HTag tag="h2">{isEdit ? `Редактирование ${brand?.name}` : 'Создание'}</HTag>
        {countryOptions && (
          <div className={styles.selectWrapper}>
            <label htmlFor="countries">Страна</label>
            <Select
              id="countries"
              options={countryOptions}
              value={countryOptions.find((option) => option.value === selectedCountry)}
              onChange={(selectedOption) => setSelectedCountry(selectedOption?.value ?? 1)}
              theme={(theme) => ({
                ...theme,
                colors: {
                  ...theme.colors,
                  primary: 'green',
                },
              })}
              placeholder={'Выберите страну'}
              required
            />
          </div>
        )}
        <div className={styles.inputWrapper}>
          <label>Название бренда</label>
          <Input type={'text'} value={name} onChange={setName} />
        </div>
        <LinkButton element="button" onClick={() => postBrand()} disabled={name ? false : true}>
          {isEdit ? 'Обновить' : 'Создать'}
        </LinkButton>
      </div>
    </div>
  );
};
