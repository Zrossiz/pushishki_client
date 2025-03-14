import { useEffect, useState } from 'react';
import styles from './ProductForm.module.scss';
import { ProductFormProps } from './ProductForm.props';
import Select from 'react-select';
import { HTag } from '@/elements';
import {
  create,
  createSubCategoriesRelationForProduct,
  getSubCategoriesByCategory,
  updateProduct,
  uploadFiles,
} from '@/api';
import { ICreateProduct, IProductSubCategory, ISubCategory } from '@/types';
import { v4 as uuidv4 } from 'uuid';
import 'react-quill/dist/quill.snow.css';

export const ProductForm = ({
  setOpen,
  countries,
  categories,
  brands,
  update,
  product,
  ages,
  voltages,
  drives,
  manufacturers,
}: ProductFormProps) => {
  const ReactQuill = typeof window === 'object' ? require('react-quill') : () => false;
  const [selectedCountry, setSelectedCountry] = useState<number>(product?.country.id ?? 1);
  const [selectedBrand, setSelectedBrand] = useState<number>(product?.brand.id ?? 1);
  const [selectedCategory, setSelectedCategory] = useState<number>(product?.category.id ?? 1);
  const [selectedName, setSelectedName] = useState<string>(product?.name ?? '');
  const [description, setDescription] = useState<string>(product?.description ?? '');
  const [articul, setArticul] = useState<string>(product?.articul ?? '');
  const [gearbox, setGearbox] = useState<string>(product?.gearbox ?? '');
  const [battery, setBattery] = useState<string>(product?.battery ?? '');
  const [maximumLoad, setMaximumLoad] = useState<number>(product?.maximumLoad ?? 0);
  const [assembledModelSize, setAssembledModelSize] = useState<string>(
    product?.assembledModelSize ?? '',
  );
  const [modelSizeInPackage, setModelSizeInPackage] = useState<string>(
    product?.modelSizeInPackage ?? '',
  );
  const [video, setVideo] = useState<string>(product?.video ?? '');
  const [image, setImage] = useState<File | null>(null);
  const [bestSeller, setBestSeller] = useState<boolean>(product?.bestseller ?? false);
  const [newModel, setNewModel] = useState<boolean>(product?.new ?? false);
  const [defaultPrice, setDefaultPrice] = useState<number>(product?.defaultPrice ?? 0);
  const [characteristics, setCharacteristics] = useState<string>(product?.characteristics ?? '');
  const [metaTitle, setMetaTitle] = useState<string>(product?.metaTitle ?? '');
  const [metaDescription, setMetaDescription] = useState<string>(product?.metaDescription ?? '');
  const [metaKeyWords, setMetaKeyWords] = useState<string>(product?.metaKeyWords ?? '');
  const [voltage, setVoltage] = useState<number>(product?.voltageId ?? 0);
  const [drive, setDrive] = useState<number>(product?.driveId ?? 0);
  const [subCategoriesProduct, setSubCategoriesProduct] = useState<number[]>([]);
  const [inStock, setInStock] = useState<boolean>(product?.inStock ?? true);
  const [age, setAge] = useState<number>(product?.ageId ?? 0);
  const [manufacturerId, setManufacturerId] = useState<number>(product?.manufacturer?.id ?? 0);
  const [subCategories, setSubCategories] = useState<ISubCategory[]>();
  const [subCategoriesOptions, setSubCategoriesOptions] = useState<
    { value: number; label: string }[]
  >([]);

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

  if (update) {
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
    inStock,
  };

  if (drive) {
    createProductData.driveId = drive;
  }

  if (age) {
    createProductData.ageId = age;
  }

  if (voltage) {
    createProductData.voltageId = voltage;
  }

  if (manufacturerId) {
    createProductData.manufacturerId = manufacturerId;
  }

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

  const drivesOptions = drives.map((item) => ({
    value: item.id,
    label: item.name,
  }));

  const agesOptions = ages.map((item) => ({
    value: item.id,
    label: item.name,
  }));

  const voltagesOptions = voltages.map((item) => ({
    value: item.id,
    label: item.name,
  }));

  const manufacturerOptions = manufacturers.map((item) => ({
    value: item.id,
    label: item.name,
  }));

  const postProduct = async (e: any) => {
    e.preventDefault();
    if (update) {
      await updateProduct(createProductData, product?.id);
    } else {
      await create(createProductData);
    }
    if (image) {
      await uploadFiles(image, true);
    }

    if (product) {
      await createSubCategoriesRelationForProduct(product?.id, subCategoriesProduct);
    }
    window.location.reload();
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

  useEffect(() => {
    // Обновляем подкатегории при изменении категории
    const fetchSubCategories = async () => {
      const result = await getSubCategoriesByCategory(selectedCategory);
      if (Array.isArray(result)) {
        setSubCategories(result);
      }
    };

    fetchSubCategories();
  }, [selectedCategory]);

  useEffect(() => {
    // Обновляем опции для подкатегорий при изменении списка подкатегорий
    const options = subCategories?.map((item) => ({
      value: item.id,
      label: item.name,
    }));
    if (options) {
      setSubCategoriesOptions(options);
    }

    // Если есть продукт и его подкатегории, синхронизируем выбранные
    if (product?.SubCategoryProduct) {
      const selectedIds = product.SubCategoryProduct.map((sub) => sub.subCategoryId);
      setSubCategoriesProduct(selectedIds);
    }
  }, [subCategories, product]);

  const calculateSubCategories = (subCategoriesProduct: IProductSubCategory[]): number[] | null => {
    const newSubCategoriesProduct: number[] = [];

    if (subCategories) {
      for (let i = 0; i < subCategoriesProduct.length; i++) {
        for (let j = 0; j < subCategories.length; j++) {
          if (subCategoriesProduct[i].subCategoryId === subCategories[j].id) {
            if (!newSubCategoriesProduct.includes(subCategoriesProduct[i].id)) {
              newSubCategoriesProduct.push(subCategoriesProduct[i].subCategoryId);
            }
          }
        }
      }

      return newSubCategoriesProduct;
    }

    return null;
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.bg} onClick={() => setOpen(false)}></div>
      <form className={styles.formWrapper}>
        {update && (
          <div style={{ marginBottom: '20px' }}>
            <HTag tag={'h2'}>Редактирование {product?.name}</HTag>
          </div>
        )}
        <div className={styles.requiredAndOptionWrapper}>
          <div className={styles.required}>
            <HTag tag="h3">Обязательные параметры</HTag>
            <div className={styles.requiredWrapper}>
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
              {brandOptions && (
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
              )}
              {categoryOptions && (
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
                    placeholder={'Выберите категории'}
                  />
                </div>
              )}
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
                  type="number"
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
                <ReactQuill theme="snow" value={description} onChange={setDescription} />
              </div>
            </div>
          </div>
          <div className={styles.option}>
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
                <ReactQuill theme="snow" value={characteristics} onChange={setCharacteristics} />
              </div>
              {agesOptions && (
                <div className={styles.selectWrapper}>
                  <label htmlFor="ages">Возраст</label>
                  <Select
                    id="ages"
                    options={agesOptions}
                    value={agesOptions.find((option) => option.value === age)}
                    onChange={(selectedOption) => setAge(selectedOption?.value ?? 1)}
                    theme={(theme) => ({
                      ...theme,
                      colors: {
                        ...theme.colors,
                        primary: 'green',
                      },
                    })}
                    placeholder={'Выберите возраст'}
                  />
                </div>
              )}
              {voltagesOptions && (
                <div className={styles.selectWrapper}>
                  <label htmlFor="voltages">Вольтаж</label>
                  <Select
                    id="voltages"
                    options={voltagesOptions}
                    value={voltagesOptions.find((option) => option.value === voltage)}
                    onChange={(selectedOption) => setVoltage(selectedOption?.value ?? 1)}
                    theme={(theme) => ({
                      ...theme,
                      colors: {
                        ...theme.colors,
                        primary: 'green',
                      },
                    })}
                    placeholder={'Выберите вольтаж'}
                  />
                </div>
              )}
              {manufacturerOptions && (
                <div className={styles.selectWrapper}>
                  <label htmlFor="manufacturer">Производитель</label>
                  <Select
                    id="manufacturers"
                    options={manufacturerOptions}
                    value={manufacturerOptions.find((option) => option.value === manufacturerId)}
                    onChange={(selectedOption) => setManufacturerId(selectedOption?.value ?? 1)}
                    theme={(theme) => ({
                      ...theme,
                      colors: {
                        ...theme.colors,
                        primary: 'green',
                      },
                    })}
                    placeholder={'Выберите производителя'}
                  />
                </div>
              )}
              {drivesOptions && (
                <div className={styles.selectWrapper}>
                  <label htmlFor="drives">Привод</label>
                  <Select
                    id="drives"
                    options={drivesOptions}
                    value={drivesOptions.find((option) => option.value === drive)}
                    onChange={(selectedOption) => setDrive(selectedOption?.value ?? 1)}
                    theme={(theme) => ({
                      ...theme,
                      colors: {
                        ...theme.colors,
                        primary: 'green',
                      },
                    })}
                    placeholder={'Выберите привод'}
                  />
                </div>
              )}
              {subCategoriesOptions && (
                <div className={styles.selectWrapper}>
                  <label htmlFor="sub-categories">Подкатегория</label>
                  <Select
                    id="sub-categories"
                    options={subCategoriesOptions}
                    value={subCategoriesOptions.filter((option) =>
                      subCategoriesProduct.includes(option.value),
                    )}
                    onChange={(selectedOptions) => {
                      const selectedValues = selectedOptions
                        ? selectedOptions.map((option) => option.value)
                        : [];
                      setSubCategoriesProduct(selectedValues);
                    }}
                    theme={(theme) => ({
                      ...theme,
                      colors: {
                        ...theme.colors,
                        primary: 'green',
                      },
                    })}
                    placeholder="Выберите подкатегорию"
                    isMulti // активация множественного выбора
                  />
                </div>
              )}
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
              <div className={styles.inputWrapper}>
                <label>В наличии</label>
                <input type="checkbox" checked={inStock} onChange={() => setInStock(!inStock)} />
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
        <button disabled={disabled} className={styles.sendButton} onClick={(e) => postProduct(e)}>
          Опубликовать
        </button>
      </form>
    </div>
  );
};
