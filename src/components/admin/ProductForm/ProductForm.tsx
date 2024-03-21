import { useState } from 'react';
import styles from './ProductForm.module.scss';
import { ProductFormProps } from './ProductForm.props';
import Select from 'react-select';
import { HTag } from '@/elements';
import { create } from '@/api';

export const ProductForm = ({ setOpen, countries, categories, brands }: ProductFormProps) => {
  const [selectedCountry, setSelectedCountry] = useState<number>(1);
  const [selectedBrand, setSelectedBrand] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<number>(1);
  const [selectedName, setSelectedName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [articul, setArticul] = useState<string>('');
  const [gearbox, setGearbox] = useState<string>();
  const [battery, setBattery] = useState<string>();
  const [maximumLoad, setMaximumLoad] = useState<number>();
  const [assembledModelSize, setAssembledModelSize] = useState<string>();
  const [modelSizeInPackage, setModelSizeInPackage] = useState<string>();
  const [video, setVideo] = useState<string>();
  const [image, setImage] = useState<string>();
  const [bestSeller, setBestSeller] = useState<boolean>();
  const [newModel, setNewModel] = useState<boolean>();
  const [defaultPrice, setDefaultPrice] = useState<number>(0);
  const [characteristics, setCharacteristics] = useState<string>();

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

  const postProduct = () => {
    (async () => {
      await create(
        selectedCountry,
        selectedBrand,
        selectedCategory,
        selectedName,
        description,
        defaultPrice,
        articul
      );
    })();
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.bg} onClick={() => setOpen(false)}></div>
      <div className={styles.formWrapper}>
        <HTag tag='h3'>Обязательные параметры</HTag>
        <div className={styles.requiredWrapper}>
          <div className={styles.select}>
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
              />
            </div>
            <div className={styles.selectWrapper}>
              <label htmlFor="brands">Бренд</label>
              <Select
                id="brands"
                options={brandOptions}
                value={brandOptions.find((option) => option.value === selectedBrand)}
                onChange={(selectedOption) => setSelectedBrand(selectedOption?.value ?? 1)}
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
                onChange={(selectedOption) => setSelectedCategory(selectedOption?.value ?? 1)}
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
          <div className={styles.inputs}>
            <div className={styles.inputWrapper}>
              <label>Название товара</label>
              <input
                type="text"
                placeholder="Введите название товара"
                value={selectedName}
                onChange={(e) => setSelectedName(e.target.value)}
              />
            </div>
            <div className={styles.inputWrapper}>
              <label>Стоимость по умолчанию</label>
              <input
                type="text"
                placeholder="Введите стоимость товара"
                value={defaultPrice}
                onChange={(e) => setDefaultPrice(+e.target.value)}
              />
            </div>
            <div className={styles.inputWrapper}>
              <label>Артикул товара</label>
              <input
                type="text"
                placeholder="Введите артикул товара товара"
                value={articul}
                onChange={(e) => setArticul(e.target.value)}
              />
            </div>
            <div className={styles.inputWrapper}>
              <label>Описание товара</label>
              <textarea
                placeholder="Введите описание товара товара"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div onClick={() => postProduct()}>send</div>
      </div>
    </div>
  );
};
