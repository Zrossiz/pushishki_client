import { CartItem } from '@/components/client';
import styles from './Cart.module.scss';
import { ICartProps } from './Cart.props';
import { IItemCart } from '@/types';
import { LinkButton } from '@/elements';

export const Cart = ({
  products,
  totalProductsCounter,
  totalProductsPrice,
  removeFromCart,
  addToCart,
  switchFavorite,
  localStorageFavorites
}: ICartProps) => {
  const formattedPrice: string =
    Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      currencyDisplay: 'symbol'
    })
      .format(totalProductsPrice)
      .split(',')[0] + '₽';

  return (
    <section className={styles.wrapper}>
      <div className={styles.cartList}>
        <div className={styles.titleWrapper}>
          Покупка <span>({totalProductsCounter} шт.)</span>
        </div>
        <ul>
          {products?.map((item: IItemCart, index) => {
            return (
              <CartItem
                key={index}
                product={item}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                switchFavorite={switchFavorite}
                localStorageFavorites={localStorageFavorites}
              />
            );
          })}
        </ul>
      </div>
      <div className={styles.cartPriceWrapper}>
        <div className={styles.titlePriceWrapper}>
          <div className={styles.titleWrapper}>Итого</div>
          <div className={styles.priceWrapper}>{formattedPrice}</div>
        </div>
        <div className={styles.counterWrapper}>
          <div>Товары, {totalProductsCounter} шт.</div>
          <div>{formattedPrice}</div>
        </div>
        <div className={styles.linkWrapper}>
          <LinkButton element="link" href="/order">
            Перейти к оформлению
          </LinkButton>
        </div>
      </div>
    </section>
  );
};
