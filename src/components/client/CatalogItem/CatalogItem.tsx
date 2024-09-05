import { LinkButton } from '@/elements';
import styles from './CatalogItem.module.scss';
import { CatalogItemProps } from './CatalogItem.props';
import cn from 'classnames';
import { IProduct } from '@/types';
import { useEffect, useState } from 'react';
import getConfig from 'next/config';
import Image from 'next/image';
import { useRouter } from 'next/router';

const { publicRuntimeConfig } = getConfig();
const { FILESERVER_URL } = publicRuntimeConfig;

export const CatalogItem = ({ product, localStorageFavorites, customHref }: CatalogItemProps) => {
  const router = useRouter();

  const formattedPrice: string =
    Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      currencyDisplay: 'symbol',
    })
      .format(product.defaultPrice)
      .split(',')[0] + '₽';

  const [isAdded, setIsAdded] = useState<boolean>(false);

  useEffect(() => {
    if (localStorageFavorites) {
      for (let i = 0; i < localStorageFavorites?.length; i++) {
        if (localStorageFavorites[i]?.id === product.id) {
          setIsAdded(true);
          break;
        }
      }
    }
  }, []);

  const addToFavorite = (item: IProduct) => {
    let favorites: IProduct[] = JSON.parse(localStorage.getItem('favorites') || '[]');

    if (favorites?.length > 0) {
      for (let i = 0; i <= favorites.length; i++) {
        if (favorites[i]?.id === item.id) {
          setIsAdded(false);
          favorites.splice(i, 1);
          return localStorage.setItem('favorites', JSON.stringify(favorites));
        }
      }
    }

    !isAdded && favorites?.push(item);
    setIsAdded(true);
    return localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.imgWrapper}>
        <Image
          src={`${FILESERVER_URL}/upload/${product.image}`}
          alt={product.name}
          fill
        />
      </div>
      <div className={styles.infoWrapper}>
        <div className={styles.nameWrapper}>
          <span>{product.name}</span>
        </div>
        <div className={styles.priceWrapper}>
          от <span>{formattedPrice}</span>
        </div>
        <div className={styles.articulWrapper}>Артикул: {product.articul}</div>
        <div className={styles.selectAndAvalability}>
          <div className={styles.buttonWrapper}>
            <LinkButton
              element="link"
              href={customHref ? customHref : `${router.asPath}/${product.slug}`}
            >
              Выбрать
            </LinkButton>
            <div
              className={cn(styles.favoriteWrapper, {
                [styles.active]: isAdded,
              })}
              onClick={() => addToFavorite(product)}
            >
              <div className={styles.imgWrapper}>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 33 32"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_102_173)">
                    <path d="M23.862 1.22266C22.3586 1.24612 20.8881 1.66728 19.5988 2.4436C18.3096 3.21992 17.2473 4.32391 16.5192 5.64408C15.7911 4.32391 14.7288 3.21992 13.4396 2.4436C12.1503 1.66728 10.6798 1.24612 9.17645 1.22266C6.77996 1.32715 4.52209 2.37926 2.8961 4.14914C1.27012 5.91902 0.408201 8.26279 0.498651 10.6684C0.498651 19.7457 15.1254 30.2298 15.7475 30.6747L16.5192 31.2227L17.2909 30.6747C17.913 30.2325 32.5397 19.7457 32.5397 10.6684C32.6302 8.26279 31.7683 5.91902 30.1423 4.14914C28.5163 2.37926 26.2584 1.32715 23.862 1.22266Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_102_173">
                      <rect width="32.054" height="32" transform="translate(0.499023)" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <div className={styles.availibilityWrapper}>
            {product.inStock ? (
              <div className={cn(styles.availableCheck, styles.available)}></div>
            ) : (
              <div className={cn(styles.availableCheck, styles.notAvailable)}></div>
            )}
            <div className={styles.availableText}>В наличии</div>
          </div>
        </div>
      </div>
    </div>
  );
};
