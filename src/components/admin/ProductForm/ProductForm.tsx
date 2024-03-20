import { useState } from 'react';
import styles from './ProductForm.module.scss';
import { ProductFormProps } from './ProductForm.props';

export const ProductForm = ({ setOpen, countries, categories, brands, }: ProductFormProps) => {
  const [selectedCountry, setSelectedCountry] = useState<number>();
  const [selectedBrand, setSelectedBrand] = useState<number>();
  const [selectedCategory, setSelectedCategory] = useState<number>()

  return (
    <div className={styles.wrapper}>
      <div className={styles.bg} onClick={() => setOpen(false)}></div>
      <div className={styles.formWrapper}>
        <label htmlFor="countries">Страна</label>
        <select
          name="countries"
          id="countries"
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(+e.target.value)}
        >
          {countries?.data.map((item) => {
            return <option value={item.id}>{item.name}</option>;
          })}
        </select>
        <label htmlFor="brands">Бренд</label>
        <select name="brands" id="brands" value={selectedBrand} onChange={e => setSelectedBrand(+e.target.value)}>
          {brands.data.map((item) => {
            return <option value={item.id}>{item.name}</option>
          })}
        </select>
        <label htmlFor="categories">Категория</label>
        <select name="categories" id="categories" value={selectedCategory} onChange={(e) => setSelectedCategory(+e.target.value)}>
          {categories.data.map((item) => {
            return <option value={item.id}>{item.name}</option>
          })}
        </select>
      </div>
    </div>
  );
};