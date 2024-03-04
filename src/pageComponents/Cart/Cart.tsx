import styles from './Cart.module.scss';

export const Cart = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.cartList}>
                list
            </div>
            <div className={styles.cartPriceWrapper}>
                price
            </div>
        </section>
    )
}