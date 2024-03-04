import styles from './CartItem.module.scss';
import { CartItemProps } from './CartItem.props';


export const CartItem = ({ product }: CartItemProps) => {
    return (
        <li className={styles.wrapper}>
            <div className={styles.imgWrapper}>
                <img src="" alt="" />
            </div>
            <div className={styles.titleColorWrapper}>
                <div className={styles.titleWrapper}>
                    {product.product.name}
                </div>
                <div className={styles.colorWrapper}>
                    Цвет: {product.color}
                </div>
            </div>
            <div className={styles.priceCounterWrapper}>
                <div className={styles.priceWrapper}>
                    {product.product.defaultPrice}
                </div>
                <div className={styles.counterWrapper}>
                    {product.count}
                </div>
            </div>
            <div className={styles.favoriteDeleteWrapper}>
                <div className={styles.titleWrapper}>

                </div>
                <div className={styles.deleteWrapper}>

                </div>
            </div>
        </li>
    )
}