import { useState } from 'react';
import styles from './ProductForm.module.scss';
import { ProductFormProps } from './ProductForm.props';
import Select from 'react-select';

export const ProductForm = ({ setOpen, countries, categories, brands }: ProductFormProps) => {
  const [selectedCountry, setSelectedCountry] = useState<number>();
  const [selectedBrand, setSelectedBrand] = useState<number>();
  const [selectedCategory, setSelectedCategory] = useState<number>();

  const countryOptions = countries?.data.map((item) => ({
    value: item.id,
    label: item.name,
  }));

  const brandOptions = brands?.data.map((item) => ({
    value: item.id,
    label: item.name,
  }));

  const categoryOptions = categories?.data.map((item) => ({
    value: item.id,
    label: item.name,
  }));

  return (
    <div className={styles.wrapper}>
      <div className={styles.bg} onClick={() => setOpen(false)}></div>
      <div className={styles.formWrapper}>
        <div className={styles.selectWrapper}>
          <label htmlFor="countries">Страна</label>
          <Select
            id="countries"
            options={countryOptions}
            value={countryOptions.find((option) => option.value === selectedCountry)}
            onChange={(selectedOption) => setSelectedCountry(selectedOption?.value)}
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                primary: 'green',
              },
            })}
            placeholder={'Выберите страну'}
          />
        </div>
        <div className={styles.selectWrapper}>
          <label htmlFor="brands">Бренд</label>
          <Select
            id="brands"
            options={brandOptions}
            value={brandOptions.find((option) => option.value === selectedBrand)}
            onChange={(selectedOption) => setSelectedBrand(selectedOption?.value)}
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                primary: 'green',
              },
            })}
            placeholder={'Выберите бренд'}
          />
        </div>
        <div className={styles.selectWrapper}>
          <label htmlFor="categories">Категория</label>
          <Select
            id="categories"
            options={categoryOptions}
            value={categoryOptions.find((option) => option.value === selectedCategory)}
            onChange={(selectedOption) => setSelectedCategory(selectedOption?.value)}
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                primary: 'green',
              },
            })}
            placeholder={'Выберите категорию'}
          />
        </div>
      </div>
    </div>
  );
};
