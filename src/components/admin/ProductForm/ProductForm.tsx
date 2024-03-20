import { useState } from 'react';
import styles from './ProductForm.module.scss';
import { ProductFormProps } from './ProductForm.props';
import Select from 'react-select';

export const ProductForm = ({ setOpen, countries, categories, brands, }: ProductFormProps) => {
  const [selectedCountry, setSelectedCountry] = useState<number>();
  const [selectedBrand, setSelectedBrand] = useState<number>();
  const [selectedCategory, setSelectedCategory] = useState<number>();

  const countryOptions = countries?.data.map((item) => ({
    value: item.id,
    label: item.name
  }));

  const handleChangetCountry = (selectedOption: any) => {
    setSelectedCountry(selectedOption.value);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.bg} onClick={() => setOpen(false)}></div>
      <div className={styles.formWrapper}>
        <div className={styles.selectWrapper}>
          <label htmlFor="countries">Страна</label>
          <Select 
            id='countries'
            options={countryOptions}
            value={countryOptions.find(option => option.value === selectedCountry)}
            onChange={handleChangetCountry}
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
          <select name="brands" id="brands" value={selectedBrand} onChange={e => setSelectedBrand(+e.target.value)}>
            {brands.data.map((item) => {
              return <option value={item.id}>{item.name}</option>
            })}
          </select>
        </div>
        <div className={styles.selectWrapper}>
          <label htmlFor="categories">Категория</label>
          <select name="categories" id="categories" value={selectedCategory} onChange={(e) => setSelectedCategory(+e.target.value)}>
            {categories.data.map((item) => {
              return <option value={item.id}>{item.name}</option>
            })}
          </select>
        </div>
      </div>
    </div>
  );
};