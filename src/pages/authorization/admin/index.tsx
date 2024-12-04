import { checkUser, getAveragePrice, getOrdersCount, getOrdersSum } from '@/api';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { AdminLayout } from '@/layout/admin/AdminLayout';
import { StatisticItem } from '@/components/admin';
import styles from '../../../styles/admin/Index.module.scss';

const AdminPage = () => {
  const [ordersCount, setOrdersCount] = useState<number>(0);
  const [durationOrdersCount, setDurationOrdersCount] = useState<string>("день");

  const [ordersSum, setOrdersSum] = useState<number>(0);
  const [durationOrdersSum, setDurationOrdersSum] = useState<string>('день');

  const [avgOrdersSum, setAvgOrdersSum] = useState<number>(0);
  const [durationAvgOrdersSum, setDurationAvgOrdersSum] = useState<string>('день');

  const router = useRouter();
  useEffect(() => {
    (async () => {
      const isLogin = await checkUser();
      if (isLogin.message.startsWith('Ошибка')) {
        return router.push('/authorization/login');
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const ordersCountApi = await getOrdersCount(durationOrdersCount);
      setOrdersCount(ordersCountApi.count)
    })()
  }, [durationOrdersCount]);

  useEffect(() => {
    (async () => {
      const ordersSumApi = await getOrdersSum(durationOrdersSum);
      setOrdersSum(ordersSumApi.sum);
    })()
  }, [durationOrdersSum])

  useEffect(() => {
    (async () => {
      const ordersAvgSumApi = await getAveragePrice(durationAvgOrdersSum);
      setAvgOrdersSum(ordersAvgSumApi.price);
    })()
  }, [durationAvgOrdersSum])

  return (
    <AdminLayout>
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <StatisticItem 
            name={'Общее количество заказов шт.'} 
            value={ordersCount} 
            curValueDate={durationOrdersCount} 
            setDuration={setDurationOrdersCount}
          />
        </div>
        <div className={styles.item}>
          <StatisticItem 
            name={'Сумма продаж ₽'} 
            value={ordersSum} 
            curValueDate={durationOrdersSum} 
            setDuration={setDurationOrdersSum}
          />
        </div>
        <div className={styles.item}>
          <StatisticItem 
            name={'Средняя сумма продаж ₽'} 
            value={avgOrdersSum} 
            curValueDate={durationAvgOrdersSum} 
            setDuration={setDurationAvgOrdersSum}
          />
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminPage;
