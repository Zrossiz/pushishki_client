import Image from 'next/image';
import styles from './Navigation.module.scss';
import Link from 'next/link';

export const Navigation = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.favoriteWrapper}>
                <Link href={'/favorite'}>
                    <Image src="/icons/Favorite.svg" width={32} height={32} alt="Избранные" />
                </Link>
            </div>
            <div>
                <Link className={styles.basketWrapper} href="/basket">
                    <Image src="/icons/Basket.svg" width={32} height={32} alt="Корзина" />
                    <span className={styles.text}>Корзина</span>
                </Link>
            </div>
        </div>
    )
}