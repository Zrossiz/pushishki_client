import { AdminLayout } from '@/layout/admin/AdminLayout';
import styles from '../../../styles/admin/Basket.module.scss'
import { useEffect, useState } from 'react';
import { IOrder, IOrderWithLength } from '@/types';
import { getAllOrders } from '@/api';
import { OrderListItem } from '@/components/admin';

const BasketPage = () => {

  const [orders, setOrders] = useState<IOrderWithLength>();

  useEffect(() => {
    (async() => {
      const ordersApi = await getAllOrders(1);
      if ('data' in ordersApi) {
        setOrders(ordersApi);
      };
    })()
  }, []);


  return (
    <AdminLayout>
      <div className={styles.listWrapper}>
        {orders?.data.map((item: IOrder) => {
          return (
            <OrderListItem order={item} />
          );
        })}
      </div>
    </AdminLayout>
  );
};

export default BasketPage;
