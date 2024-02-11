import { LinkButton } from '@/elements';
import styles from './CatalogItem.module.scss';
import { CatalogItemProps } from "./CatalogItem.props"
import Image from 'next/image';
import cn from 'classnames';

export const CatalogItem = ({ 
    id,
    image,
    price,
    articul,
    name,
    availibility
}: CatalogItemProps) => {

    const formattedPrice: string = Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        currencyDisplay: 'symbol' 
    }).format(price);

    return (
        <div className={styles.wrapper}>
            <div className={styles.imgWrapper}>
                <img src={`${process.env.FILESERVER_URL}/upload/${image}`} alt={name} />
            </div>
            <div className={styles.nameWrapper}>
                {name}
            </div>
            <div className={styles.priceWrapper}>
                от <span>{formattedPrice}</span>
            </div>
            <div className={styles.articulWrapper}>   
                Артикул: {articul}
            </div>
            <div className={styles.selectAndAvalability}>
                <div className={styles.buttonWrapper}>
                    <LinkButton element='link' href={`/categories/mototehnika/${id}`}>
                        Выбрать
                    </LinkButton>
                    <div className={styles.favoriteWrapper}>
                        <div className={styles.imgWrapper}>
                            <Image src={'/icons/Favorite.svg'} fill alt="В избранное" />
                        </div>
                    </div>
                </div>
                <div className={styles.availibilityWrapper}>
                    {availibility ? 
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