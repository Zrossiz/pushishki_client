import { LinkButton } from '@/elements';
import styles from './CatalogItem.module.scss';
import { CatalogItemProps } from "./CatalogItem.props"
import Image from 'next/image';
import cn from 'classnames';
import { IProduct } from '@/types';
import { IPVersion } from 'net';

export const CatalogItem = ({ 
    product
}: CatalogItemProps) => {

    const formattedPrice: string = Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        currencyDisplay: 'symbol' 
    }).format(product.defaultPrice);

    const addToFavorite = (item: IProduct) => {
        let favorites: IProduct[] = JSON.parse(localStorage.getItem('favorites') || '[]');

        let isAlreadyAdded: boolean = false;

        if (favorites?.length > 0) {
            for (let i = 0; i <= favorites.length; i++) {
                if (favorites[i]?.id === item.id) {
                    isAlreadyAdded = true;
                    favorites.splice(i, 1);
                }
            }
        }

        !isAlreadyAdded && favorites?.push(item);
      
        return localStorage.setItem('favorites', JSON.stringify(favorites));
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.imgWrapper}>
                <img src={`${process.env.FILESERVER_URL}/upload/${product.image}`} alt={product.name} />
            </div>
            <div className={styles.nameWrapper}>
                {product.name}
            </div>
            <div className={styles.priceWrapper}>
                от <span>{formattedPrice}</span>
            </div>
            <div className={styles.articulWrapper}>   
                Артикул: {product.articul}
            </div>
            <div className={styles.selectAndAvalability}>
                <div className={styles.buttonWrapper}>
                    <LinkButton element='link' href={`/categories/mototehnika/${product.id}`}>
                        Выбрать
                    </LinkButton>
                    <div className={styles.favoriteWrapper} onClick={() => addToFavorite(product)}>
                        <div className={styles.imgWrapper}>
                            <Image src={'/icons/Favorite.svg'} fill alt="В избранное" />
                        </div>
                    </div>
                </div>
                <div className={styles.availibilityWrapper}>
                    {product.inStock ? 
                        <div className={cn(styles.availableCheck ,styles.available)}></div>
                        :
                        <div className={cn(styles.availableCheck ,styles.notAvailable)}></div>
                    }
                    <div className={styles.availableText}>
                        В наличии
                    </div>
                </div>
            </div>
        </div>
    )
}