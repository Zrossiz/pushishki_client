import { HTag, Select } from '@/elements';
import { ProductVariantFormProps } from './ProductVariant.props';
import styles from './ProductVariantForm.module.scss';
import { ChangeEvent, useEffect, useState, MouseEvent } from 'react';
import { IProductVariant } from '@/types';
import { createProductVariant, getAllColors, getProductVariants, uploadFiles } from '@/api';
import { IColor } from '@/types/Color';
import { v4 as uuidv4 } from 'uuid';
import { ProductVariantInfo } from '../ProductVariantInfo/ProductVariantInfo';

export const ProductVariantForm = ({
  id,
  name,
  setOpen,
  defaultPrice,
}: ProductVariantFormProps) => {
  const [variants, setVariants] = useState<IProductVariant[]>([]);
  const [colors, setColors] = useState<IColor[]>([]);

  const [selectedColor, setSelectedColor] = useState<IColor>();
  const [price, setPrice] = useState<number>(defaultPrice);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      setSelectedFiles([...selectedFiles, ...filesArray]);
    }
  };

  useEffect(() => {
    (async () => {
      const queryVariants = await getProductVariants(id, false);
      if (Array.isArray(queryVariants)) {
        setVariants(queryVariants);
      }

      const queryColors = await getAllColors();

      if (Array.isArray(queryColors)) {
        setColors(queryColors);
      }
    })();
  }, []);

  const create = async (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    const stringImages: string[] = [];

    const updatedFiles = selectedFiles.map((file) => {
      const fileExtension = file.name.split('.').pop();
      const newName = `${uuidv4()}.${fileExtension}`;
      const newFile = new File([file], newName, { type: file.type });
      return newFile;
    });

    setSelectedFiles(updatedFiles);

    updatedFiles.forEach((item: File) => {
      stringImages.push(item.name);
    });

    if (selectedColor) {
      const productVariant = await createProductVariant(id, +selectedColor?.id, price, stringImages);
      if (selectedFiles.length >= 1) {
        await uploadFiles(updatedFiles);
      }
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.bg} onClick={() => setOpen(false)}></div>
      <div className={styles.formAndVariantsWrapper}>
        <HTag tag="h2">{name}</HTag>
        <div className={styles.columnsWrapper}>
          <form className={styles.createWrapper}>
            <div className={styles.titleWrapper}>Создать вариацию</div>
            <div className={styles.colorsWrapper}>
              <Select setActiveColor={setSelectedColor} colors={colors} activeColor={selectedColor} />
            </div>
            <div className={styles.colorsWrapper}>
              <div className={styles.title}>Укажите цену</div>
              <input type="number" value={price} onChange={(e) => setPrice(+e.target.value)} />
            </div>
            <div className={styles.filesInputWrapper}>
              <input
                type="file"
                id="file"
                name="file"
                multiple
                onChange={(e) => handleFileChange(e)}
              />
              <div className={styles.selectedWrapper}>
                <p>Выбранные файлы:</p>
                <ul>
                  {selectedFiles.map((file, index) => (
                    <li key={index}>{file.name}</li>
                  ))}
                </ul>
              </div>
            </div>
            <button disabled={selectedColor ? false : true} onClick={(e) => create(e)}>
              Опубликовать
            </button>
          </form>
          <div className={styles.variantsWrapper}>
            <div className={styles.titleWrapper}>Активные вариации</div>
            <div className={styles.listWrapper}>
              {variants.map((item: IProductVariant) => {
                return <ProductVariantInfo key={item.id} productVariant={item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
