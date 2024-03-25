import { HTag } from '@/elements';
import { ProductVariantFormProps } from './ProductVariant.props';
import styles from './ProductVariantForm.module.scss';
import { ChangeEvent, useEffect, useState, MouseEvent } from 'react';
import { IProductVariant } from '@/types';
import { createProductVariant, deleteProductVariant, getAllColors, getProductVariants, uploadFiles } from '@/api';
import Image from 'next/image';
import { IColor } from '@/types/Color';
import cn from 'classnames';
import { v4 as uuidv4 } from 'uuid';

export const ProductVariantForm = ({
  id,
  name,
  setOpen,
  defaultPrice,
}: ProductVariantFormProps) => {
  const [variants, setVariants] = useState<IProductVariant[]>([]);
  const [colors, setColors] = useState<IColor[]>([]);

  const [selectedColor, setSelectedColor] = useState<number>(1);
  const [price, setPrice] = useState<number>(defaultPrice);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      setSelectedFiles([...selectedFiles, ...filesArray]);
    }
  };

  console.log(selectedFiles);

  useEffect(() => {
    (async () => {
      const queryVariants = await getProductVariants(id);
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

    const productVariant = await createProductVariant(id, +selectedColor, price, stringImages);
    if (selectedFiles.length >= 1) {
      await uploadFiles(updatedFiles);
    }
  };

  const deleteVariant = async (id: number) => {
    const variant: IProductVariant | { message: string } = await deleteProductVariant(id);
    const queryVariants = await getProductVariants(id);
    if (Array.isArray(queryVariants)) {
      setVariants(queryVariants);
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.bg} onClick={() => setOpen(false)}></div>
      <div className={styles.formAndVariantsWrapper}>
        <HTag tag="h2">{name}</HTag>
        <div className={styles.columnsWrapper}>
          <form className={styles.createWrapper}>
            <div className={styles.titleWrapper}>Создать вариацию</div>
            <div className={styles.colorsWrapper}>
              <div className={styles.title}>Выберите цвет</div>
              {colors.map((item) => {
                return (
                  <div
                    className={cn(styles.colorWrapper, {
                      [styles.active]: selectedColor === item.id,
                    })}
                    style={{ backgroundColor: item.color }}
                    onClick={() => setSelectedColor(item.id)}
                    key={item.id}
                  ></div>
                );
              })}
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
                return (
                  <div className={styles.itemWrapper} key={item.id}>
                    <div
                      className={styles.colorWrapper}
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <div className={styles.price}>{item.price} ₽</div>
                    <div className={styles.delete} onClick={() => deleteVariant(item.id)}>
                      <Image src="/icons/Trash.svg" width={30} height={30} alt={'Удалить'} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
