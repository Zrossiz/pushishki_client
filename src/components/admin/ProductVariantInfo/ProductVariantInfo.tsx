import getConfig from 'next/config';
import styles from './ProductVariantInfo.module.scss';
import { ProductVariantInfoProps } from './ProductVariantInfo.props';
import Image from 'next/image';
import { Input } from '@/elements';
import { useEffect, useState } from 'react';
import { deleteFile, deleteProductVariant, updateProductVariant } from '@/api';
import { IProductVariant } from '@/types';

const { publicRuntimeConfig } = getConfig();
const { FILESERVER_URL } = publicRuntimeConfig;

export const ProductVariantInfo = ({ productVariant }: ProductVariantInfoProps) => {
  const [price, setPrice] = useState<number>(productVariant.price);
  const [images, setImages] = useState<string[]>(productVariant.images);

  const deleteVariant = async (id: number) => {
    const variant: IProductVariant | { message: string } = await deleteProductVariant(id);

    window.location.reload();
  };

  const deleteImage = async (image: string) => {
    const deletedImageIndex = images.indexOf(image);
    const newImages = [...images];
    newImages.splice(deletedImageIndex, 1);
    setImages(newImages);
    await updateProductVariant(productVariant.id, newImages);
    await deleteFile(image);
  }

  useEffect(() => {
    setTimeout(async () => {
      await updateProductVariant(productVariant.id, images, +price);
    }, 1000);
  }, [price]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.infoWrapper}>
        {productVariant.color.color ? (
          <div
            className={styles.colorWrapper}
            style={{ backgroundColor: productVariant.color.color }}
          ></div>
        ) : (
          <div className={styles.colorWrapper}>
            <Image
              src={`${FILESERVER_URL}/upload/${productVariant.color.image}`}
              fill
              alt={productVariant.color.title}
            />
          </div>
        )}
        <div className={styles.priceWrapper}>
          <Input value={price} onChange={setPrice} type="text" />
          <div className={styles.iconWrapper}>₽</div>
        </div>
        <div className={styles.deleteWrapper} onClick={() => deleteVariant(productVariant.id)}>
          <Image src="/icons/Trash.svg" width={30} height={30} alt={'Удалить'} />
        </div>
      </div>
      <div className={styles.galleryWrapper}>
        {images.map((item: string) => {
          return (
            <div className={styles.img}>
              <div className={styles.delete} onClick={() => deleteImage(item)}>
                <Image src="/icons/Close.svg" width={20} height={20} alt="Удалить" />
              </div>
              <Image src={`${FILESERVER_URL}/upload/${item}`} alt={item} fill />
            </div>
          );
        })}
      </div>
    </div>
  );
};
