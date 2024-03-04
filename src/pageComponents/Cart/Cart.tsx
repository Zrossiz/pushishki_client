import { CartItem } from '@/components';
import styles from './Cart.module.scss';
import { ICartProps } from './Cart.props';

export const Cart = ({ products }: ICartProps) => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.cartList}>
                <ul>
                    {
                        products?.map(() => {
                            return (
                                <CartItem />
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