import { useState } from 'react';
import styles from './ProductForm.module.scss';
import { ProductFormProps } from './ProductForm.props';
import Select from 'react-select';
import { HTag } from '@/elements';
import { create, uploadFiles } from '@/api';
import { ICreateProduct } from '@/types';
import { v4 as uuidv4 } from 'uuid';

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
  const [image, setImage] = useState<File | null>(null);
  const [bestSeller, setBestSeller] = useState<boolean>(false);
  const [newModel, setNewModel] = useState<boolean>(false);
  const [defaultPrice, setDefaultPrice] = useState<number>(0);
  const [characteristics, setCharacteristics] = useState<string>();
  const [metaTitle, setMetaTitle] = useState<string>();
  const [metaDescription, setMetaDescription] = useState<string>();
  const [metaKeyWords, setMetaKeyWords] = useState<string>();

  let disabled = true;

  if (
    selectedCountry &&
    selectedBrand &&
    selectedCategory &&
    selectedName &&
    description &&
    articul &&
    defaultPrice
  ) {
    disabled = false;
  }

  const createProductData: ICreateProduct = {
    countryId: +selectedCountry,
    brandId: +selectedBrand,
    categoryId: +selectedCategory,
    name: selectedName,
    description,
    defaultPrice,
    articul,
    gearbox,
    battery,
    maximumLoad,
    assembledModelSize,
    modelSizeInPackage,
    video,
    image: image ? image.name : undefined,
    bestseller: bestSeller,
    new: newModel,
    characteristics,
    metaTitle,
    metaDescription,
    metaKeyWords,
  };

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
      await create(createProductData);
    })();
    if (image) {
      (async () => {
        await uploadFiles(image);
      })();
    }
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
      <form className={styles.formWrapper}>
        <div className={styles.requiredAndOptionWrapper}>
          <div>
            <HTag tag="h3">Обязательные параметры</HTag>
            <div className={styles.requiredWrapper}>
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
                  required
                />
              </div>
              <div className={styles.inputWrapper}>
                <label>Название товара</label>
                <input
                  type="text"
                  placeholder="Введите название товара"
                  value={selectedName}
                  onChange={(e) => setSelectedName(e.target.value)}
                  required
                />
              </div>
              <div className={styles.inputWrapper}>
                <label>Стоимость по умолчанию</label>
                <input
                  type="number"
                  placeholder="Введите стоимость товара"
                  value={defaultPrice}
                  onChange={(e) => setDefaultPrice(+e.target.value)}
                  required
                />
              </div>
              <div className={styles.inputWrapper}>
                <label>Артикул товара</label>
                <input
                  type="text"
                  placeholder="Введите артикул товара товара"
                  value={articul}
                  onChange={(e) => setArticul(e.target.value)}
                  required
                />
              </div>
              <div className={styles.inputWrapper}>
                <label>Описание товара</label>
                <textarea
                  placeholder="Введите описание товара товара"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
          <div>
            <HTag tag="h3">Необязательные параметры</HTag>
            <div className={styles.optionWrapper}>
              <div className={styles.inputWrapper}>
                <label>Редуктор</label>
                <input
                  type="text"
                  placeholder="Введите стоимость товара"
                  value={gearbox}
                  onChange={(e) => setGearbox(e.target.value)}
                />
              </div>
              <div className={styles.inputWrapper}>
                <label>Батарея</label>
                <input
                  type="text"
                  placeholder="Введите параметры батареи"
                  value={battery}
                  onChange={(e) => setBattery(e.target.value)}
                />
              </div>
              <div className={styles.inputWrapper}>
                <label>Максимальная нагрузка (кг)</label>
                <input
                  type="number"
                  placeholder="Максимальная нагрузка"
                  value={maximumLoad}
                  onChange={(e) => setMaximumLoad(+e.target.value)}
                />
              </div>
              <div className={styles.inputWrapper}>
                <label>Размер собранной модели</label>
                <input
                  type="text"
                  placeholder="Размер собранной модели"
                  value={assembledModelSize}
                  onChange={(e) => setAssembledModelSize(e.target.value)}
                />
              </div>
              <div className={styles.inputWrapper}>
                <label>Размер модели в упаковке</label>
                <input
                  type="text"
                  placeholder="Размер модели в упаковке"
                  value={modelSizeInPackage}
                  onChange={(e) => setModelSizeInPackage(e.target.value)}
                />
              </div>
              <div className={styles.inputWrapper}>
                <label>Ссылка на видео</label>
                <input
                  type="text"
                  placeholder="Ссылка на видео"
                  value={video}
                  onChange={(e) => setVideo(e.target.value)}
                />
              </div>
              <div className={styles.inputWrapper}>
                <label>Характеристики</label>
                <textarea
                  placeholder="Характеристики товара"
                  value={characteristics}
                  onChange={(e) => setCharacteristics(e.target.value)}
                />
              </div>
              <div className={styles.inputWrapper}>
                <label>Новинки</label>
                <input type="checkbox" checked={newModel} onChange={() => setNewModel(!newModel)} />
              </div>
              <div className={styles.inputWrapper}>
                <label>Бестселлеры</label>
                <input
                  type="checkbox"
                  checked={bestSeller}
                  onChange={() => setBestSeller(!bestSeller)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.lineWrapper}>
          <HTag tag="h3">СЕО</HTag>
          <div className={styles.inputWrapper}>
            <label>Заголовок страницы</label>
            <input
              type="text"
              placeholder="Введите заголовок товара"
              value={metaTitle}
              onChange={(e) => setMetaTitle(e.target.value)}
            />
          </div>
          <div className={styles.inputWrapper}>
            <label>Ключевые слова</label>
            <input
              type="text"
              placeholder="Введите ключевые слова для товара"
              value={metaKeyWords}
              onChange={(e) => setMetaKeyWords(e.target.value)}
            />
          </div>
          <div className={styles.inputWrapper}>
            <label>Описание товара</label>
            <textarea
              placeholder="Введите описание страницы"
              value={metaDescription}
              onChange={(e) => setMetaDescription(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.lineWrapper}>
          <HTag tag="h3">Другое</HTag>
          <div className={styles.inputWrapper}>
            <label>Изображение</label>
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </div>
        </div>
        <button disabled={disabled} className={styles.sendButton} onClick={() => postProduct()}>
          Отправить
        </button>
      </form>
    </div>
  );
};
