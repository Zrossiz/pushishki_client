import { useEffect, useState } from 'react';
import styles from './OrderInfo.module.scss';
import { OrderInfoProps } from './OrderInfo.props';
import { IBasketItem } from '@/types';
import { getBasketByOrder } from '@/api';
import { HTag } from '@/elements';

export const OrderInfo = ({ setOpen, order, date }: OrderInfoProps) => {
  const [basketInfo, setBasketInfo] = useState<IBasketItem[]>();
  useEffect(() => {
    (async () => {
      const basket = await getBasketByOrder(order.id);
      if (Array.isArray(basket)) {
        setBasketInfo(basket);
      }
    })();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.bg} onClick={() => setOpen(false)}></div>
      <div className={styles.formWrapper}>
        <div className={styles.titleWrapper}>
          <HTag tag="h2">Информация о заказе #{order.id}</HTag>
        </div>
        <div className={styles.orderInfo}>
          <div className={styles.item}>Имя: {order.name}</div>
          <div className={styles.item}>Фамилия: {order.lastname}</div>
          <div className={styles.item}>Телефон: {order.phone}</div>
          <div className={styles.item}>Стоимость: {order.price} ₽</div>
          <div className={styles.item}>Доставка: {order.address}</div>
          <div className={styles.item}>
            Дата: {date[1].split('.')[0]} {date[0]}
          </div>
        </div>
        <div className={styles.detailsWrapper}>
          <HTag tag="h3">Детали</HTag>
          {basketInfo?.map((item: IBasketItem) => {
            return (
              <div className={styles.item}>
                <div className={styles.nameWrapper}>{item.Product.name}</div>
                <div className={styles.quantityWrapper}>Количество: {item.quantity}</div>
                <div className={styles.priceWrapper}>Стоимость: {item.price} ₽</div>
                {item.color && (
                  <div
                    className={styles.colorWrapper}
                    style={{ backgroundColor: item.color }}
                  ></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
