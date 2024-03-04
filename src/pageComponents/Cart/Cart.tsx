import { CartItem } from '@/components';
import styles from './Cart.module.scss';
import { ICartProps } from './Cart.props';
import { IItemCart } from '@/types';

export const Cart = ({ products }: ICartProps) => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.cartList}>
                <ul>
                    {
                        products?.map((item: IItemCart, index) => {
                            return (
                                <CartItem key={index} product={item} />
                            )
                        })
                    }
                </ul>
            </div>
            <div className={styles.cartPriceWrapper}>
                price
            </div>
        </section>
    )
}