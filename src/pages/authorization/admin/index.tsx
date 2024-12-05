import { checkUser, getAveragePrice, getOrdersCount, getOrdersSum } from '@/api';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { AdminLayout } from '@/layout/admin/AdminLayout';
import { StatisticItem } from '@/components/admin';
import styles from '../../../styles/admin/Index.module.scss';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

const AdminPage = () => {
  const [ordersCount, setOrdersCount] = useState<number>(0);
  const [startDateOrdersCount, setStartDateOrdersCount] = useState<any>(new Date());
  const [endDateOrdersCount, setEndDateOrdersCount] = useState<any>(new Date());

  const [ordersSum, setOrdersSum] = useState<number>(0);
  const [ordersSumStartDate, setOrdersSumStartDate] = useState<any>(new Date());
  const [ordersSumEndDate, setOrdersSumEndDate] = useState<any>(new Date());

  const [avgSum, setAvgSum] = useState<number>(0);
  const [avgSumStartDate, setAvgSumStartDate] = useState<any>(new Date());
  const [avgSumEndDate, setAvgSumEndDate] = useState<any>(new Date());

  useEffect(() => {
    (async () => {
      const ordersCountApi = await getOrdersCount(startDateOrdersCount, endDateOrdersCount);
      setOrdersCount(ordersCountApi.count);
    })()
  }, [endDateOrdersCount])

  useEffect(() => {
    (async () => {
      const avgSumApi = await getAveragePrice(avgSumStartDate, avgSumEndDate)
      setAvgSum(Math.round(avgSumApi.price))
    })()
  }, [avgSumEndDate])

  useEffect(() => {
    (async () => {
      const ordersSumApi = await getOrdersSum(ordersSumStartDate, ordersSumEndDate)
      setOrdersSum(Math.round(ordersSumApi.sum))
    })()
  }, [ordersSumEndDate])

  return (
    <AdminLayout>
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <StatisticItem 
            name={'Общее количество заказов шт.'} 
            value={ordersCount} 
            startDate={startDateOrdersCount}
            endDate={endDateOrdersCount}
            setStartDate={setStartDateOrdersCount}
            setEndDate={setEndDateOrdersCount}
          />
        </div>
        <div className={styles.item}>
          <StatisticItem 
            name={'Сумма продаж ₽'} 
            value={ordersSum} 
            startDate={ordersSumStartDate}
            endDate={ordersSumEndDate}
            setStartDate={setOrdersSumStartDate}
            setEndDate={setOrdersSumEndDate}
          />
        </div>
        <div className={styles.item}>
          <StatisticItem 
            name={'Средняя сумма продаж ₽'} 
            value={avgSum} 
            startDate={avgSumStartDate}
            endDate={avgSumEndDate}
            setStartDate={setAvgSumStartDate}
            setEndDate={setAvgSumEndDate}
          />
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminPage;

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    const cookies = ctx.req.headers.cookie;
    const isLogin = await checkUser(cookies);

    if (isLogin) {
      return {
        props: {
          message: 'login',
        },
      };
    } else {
      return {
        redirect: {
          destination: '/authorization/login',
          permanent: false,
        },
      };
    }
  } catch (err) {
    return {
      redirect: {
        destination: '/authorization/login',
        permanent: false,
      },
    };
  }
};