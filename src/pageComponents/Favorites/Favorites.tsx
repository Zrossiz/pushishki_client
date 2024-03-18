import React from 'react';
import styles from './Favorites.module.scss';
import { IFavoritesProps } from './Favorites.props';
import { CatalogItem } from '@/components';

export const Favorites = ({ products }: IFavoritesProps) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.listWrapper}>
        {products.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <CatalogItem localStorageFavorites={products} product={item} />
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};
