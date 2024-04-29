import { AdminLayout } from '@/layout/admin/AdminLayout';
import styles from '../../../styles/admin/Basket.module.scss'
import { useEffect, useState } from 'react';
import { IOrderWithLength } from '@/types';
import { getAllOrders } from '@/api';

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
        
      </div>
    </AdminLayout>
  );
};

export default BasketPage;
