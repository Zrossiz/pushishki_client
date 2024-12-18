import { ProductListItemProps } from './ProductListItem.props';
import styles from './ProductListItem.module.scss';
import Image from 'next/image';
import getConfig from 'next/config';
import { useState } from 'react';
import { DeleteItem, ProductForm, ProductReviewForm, ProductVariantForm } from '..';

const { publicRuntimeConfig } = getConfig();
const { FILESERVER_URL, CLIENT_URL } = publicRuntimeConfig;

export const ProductListItem = ({
  product,
  brands,
  countries,
  categories,
  voltages,
  ages,
  subCategories,
  drives,
  manufacturers,
}: ProductListItemProps) => {
  const [remove, setRemove] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);
  const [variant, setVariant] = useState<boolean>(false);
  const [reviews, setReviews] = useState<boolean>(false);

  return (
    <div className={styles.itemWrapper}>
      {remove && (
        <DeleteItem
          idOrSlug={product.id}
          setOpen={setRemove}
          name={product.name}
          imgName={product.image}
          entity="product"
        />
      )}
      {edit && (
        <ProductForm
          voltages={voltages}
          ages={ages}
          drives={drives}
          setOpen={setEdit}
          product={product}
          update={true}
          manufacturers={manufacturers}
          countries={countries}
          brands={brands}
          categories={categories}
        />
      )}
      {variant && (
        <ProductVariantForm
          id={product.id}
          name={product.name}
          setOpen={setVariant}
          defaultPrice={product.defaultPrice}
        />
      )}
      {reviews && <ProductReviewForm setOpen={setReviews} product={product} />}
      <div className={styles.image}>
        <Image fill alt={product.name} src={`${FILESERVER_URL}/upload/${product.image}`} />
      </div>
      <div className={styles.name}>{product.name}</div>
      <div className={styles.options}>
        <a
          href={`${CLIENT_URL}/categories/${product.category.slug}/${product.slug}`}
          target="_blank"
          className={styles.view}
        >
          <Image src={'/icons/Eye.svg'} alt={'Просмотр'} width={24} height={28} />
        </a>
        <div className={styles.reviews} onClick={() => setReviews(true)}>
          <Image src={'/icons/Review.svg'} alt={'Редактирование отзывов товара'} fill />
        </div>
        <div className={styles.formatColors} onClick={() => setVariant(true)}>
          <Image src={'/icons/Variants.svg'} alt={'Редактирование вариантов товара'} fill />
        </div>
        <div className={styles.edit} onClick={() => setEdit(true)}>
          <svg
            width="24"
            height="28"
            viewBox="0 0 49 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_283_63)">
              <path
                d="M29.3428 25.0435H45.8706C46.697 25.0435 47.3732 25.6696 47.3732 26.4348V27.8261C47.3732 28.5913 46.697 29.2174 45.8706 29.2174H29.3428"
                stroke="#6d7280"
                strokeWidth="2"
              />
              <path
                d="M21.6801 29.2174H2.29745C1.47106 29.2174 0.794922 28.5913 0.794922 27.8261V26.4348C0.794922 25.6696 1.47106 25.0435 2.29745 25.0435H21.6801"
                stroke="#6d7280"
                strokeWidth="2"
              />
              <path
                d="M16.1963 13.913H45.8713C46.6977 13.913 47.3738 14.5391 47.3738 15.3043V16.6956C47.3738 17.4609 46.6977 18.087 45.8713 18.087H16.1963"
                stroke="#6d7280"
                strokeWidth="2"
              />
              <path
                d="M8.30758 18.087H2.29745C1.47106 18.087 0.794922 17.4609 0.794922 16.6956V15.3043C0.794922 14.5391 1.47106 13.913 2.29745 13.913H8.30758"
                stroke="#6d7280"
                strokeWidth="2"
              />
              <path
                d="M39.9355 2.78261H45.8706C46.6969 2.78261 47.3731 3.40869 47.3731 4.17391V5.56522C47.3731 6.33043 46.6969 6.95652 45.8706 6.95652H39.9355"
                stroke="#6d7280"
                strokeWidth="2"
              />
              <path
                d="M32.1227 6.95652H2.29745C1.47106 6.95652 0.794922 6.33043 0.794922 5.56522V4.17391C0.794922 3.40869 1.47106 2.78261 2.29745 2.78261H32.1227"
                stroke="#6d7280"
                strokeWidth="2"
              />
              <path
                d="M25.5867 31.3043C28.0762 31.3043 30.0943 29.4356 30.0943 27.1304C30.0943 24.8252 28.0762 22.9565 25.5867 22.9565C23.0972 22.9565 21.0791 24.8252 21.0791 27.1304C21.0791 29.4356 23.0972 31.3043 25.5867 31.3043Z"
                stroke="#6d7280"
                strokeWidth="2"
              />
              <path
                d="M12.0642 20.1739C14.5537 20.1739 16.5718 18.3052 16.5718 16C16.5718 13.6948 14.5537 11.8261 12.0642 11.8261C9.57476 11.8261 7.55664 13.6948 7.55664 16C7.55664 18.3052 9.57476 20.1739 12.0642 20.1739Z"
                stroke="#6d7280"
                strokeWidth="2"
              />
              <path
                d="M36.1043 9.04347C38.5938 9.04347 40.6119 7.17475 40.6119 4.86956C40.6119 2.56437 38.5938 0.695648 36.1043 0.695648C33.6148 0.695648 31.5967 2.56437 31.5967 4.86956C31.5967 7.17475 33.6148 9.04347 36.1043 9.04347Z"
                stroke="#6d7280"
                strokeWidth="2"
              />
            </g>
            <defs>
              <clipPath id="clip0_283_63">
                <rect width="48.081" height="32" fill="black" transform="translate(0.0439453)" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className={styles.delete} onClick={() => setRemove(true)}>
          <Image src={'/icons/Trash.svg'} width={24} height={28} alt="Удалить" />
        </div>
      </div>
    </div>
  );
};
