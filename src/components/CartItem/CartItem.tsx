import { useState } from 'react';
import styles from './CartItem.module.scss';
import { CartItemProps } from './CartItem.props';
import getConfig from 'next/config';
import Image from 'next/image';

const { publicRuntimeConfig } = getConfig();
const { FILESERVER_URL } = publicRuntimeConfig;

export const CartItem = ({ product }: CartItemProps) => {

    const [hover, setHover] = useState<boolean>(false);

    const formattedPrice: string = Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        currencyDisplay: 'symbol' 
    }).format(product.product.defaultPrice);

    return (
        <li className={styles.wrapper}>
            <div className={styles.imgWrapper}>
                <img src={`${FILESERVER_URL}/upload/${product.product.image}`} alt={product.product.name} />
            </div>
            <div className={styles.titleColorWrapper}>
                <div className={styles.titleWrapper}>
                    {product.product.name}
                </div>
                <div className={styles.colorWrapper}>
                    Цвет: <span style={{ backgroundColor: product.color }} className={styles.color}></span>
                </div>
            </div>
            <div className={styles.priceCounterWrapper}>
                <div className={styles.priceWrapper}>
                    {formattedPrice}
                </div>
                <div className={styles.counterWrapper}>
                    <div className={styles.minus}>-</div>
                    <div className={styles.counter}>
                        {product.count}
                    </div>
                    <div className={styles.plus}>+</div>
                </div>
            </div>
            <div className={styles.favoriteDeleteWrapper}>
                <div className={styles.favoriteWrapper}>
                    <Image src={'/icons/HeartOutlined.svg'} height={26} width={26} alt="Добавить в избранное" />
                </div>
                <div className={styles.deleteWrapper}>
                    <Image src={'/icons/Trash.svg'} height={26} width={24} alt="Удалить" />
                </div>
            </div>
        </li>
    )
}