import getConfig from 'next/config';
import styles from './Search.module.scss';
import { SearchProps } from './Search.props';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';


const { publicRuntimeConfig } = getConfig();
const { FILESERVER_URL, CLIENT_URL } = publicRuntimeConfig;

export const Search = ({ search, setSearch, products, stateSearch, getProducts }: SearchProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inputWrapper}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Название товара"
        />
        <div className={styles.btnWrapper}>
          <button onClick={() => getProducts()}>
            <Image width={20} height={20} src={'/icons/Loop.svg'} alt="Поиск" />
          </button>
        </div>
      </div>
      {stateSearch && (
        <div className={styles.popupWrapper}>
          {products && products?.length >= 1 ? (
            products?.slice(0, 4).map((item, index) => {
              let itemHref = `${CLIENT_URL}/categories/${item.category.slug}/`;
              if (item.subCategoryId) {
                itemHref += `sub-category/${item.subCategory?.slug}/${item.slug}`
              } else {
                itemHref += String(item.slug)
              }
              return (
                <Link
                  href={itemHref}
                  key={item.id}
                  className={styles.itemWrapper}
                >
                  <div className={styles.photo}>
                    <Image fill alt={item.name} src={`${FILESERVER_URL}/upload/${item.image}`} />
                  </div>
                  <div className={styles.name}>{item.name}</div>
                  <div className={styles.price}>{item.defaultPrice}₽</div>
                </Link>
              );
            })
          ) : (
            <div className={styles.itemWrapper}>Ничего не найдено</div>
          )}
        </div>
      )}
    </div>
  );
};
