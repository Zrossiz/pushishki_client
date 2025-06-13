import {
  checkUser,
  getAveragePrice,
  getMostSellingProducts,
  getOrdersCount,
  getOrdersSum,
} from '@/api';
import { useEffect, useState } from 'react';
import { AdminLayout } from '@/layout/admin/AdminLayout';
import { ProductsStatisticItem, StatisticItem } from '@/components/admin';
import styles from '@/styles/admin/Index.module.scss';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { IProduct } from '@/types';
import { getDateOneYearAgo } from '@/utils';

const AdminPage = () => {
  const dayOneYearAgo = getDateOneYearAgo();

  const [ordersCount, setOrdersCount] = useState<number>(0);
  const [startDateOrdersCount, setStartDateOrdersCount] = useState<Date>(dayOneYearAgo);
  const [endDateOrdersCount, setEndDateOrdersCount] = useState<Date>(new Date());

  const [ordersSum, setOrdersSum] = useState<number>(0);
  const [ordersSumStartDate, setOrdersSumStartDate] = useState<Date>(dayOneYearAgo);
  const [ordersSumEndDate, setOrdersSumEndDate] = useState<Date>(new Date());

  const [avgSum, setAvgSum] = useState<number>(0);
  const [avgSumStartDate, setAvgSumStartDate] = useState<Date>(dayOneYearAgo);
  const [avgSumEndDate, setAvgSumEndDate] = useState<Date>(new Date());

  const [bestProducts, setBestProducts] = useState<IProduct[]>([]);
  const [bestProductsStartDate, setBestProductsStartDate] = useState<Date>(dayOneYearAgo);
  const [bestProductsEndDate, setBestProductsEndDate] = useState<Date>(new Date());

  useEffect(() => {
    (async () => {
      const ordersCountApi = await getOrdersCount(startDateOrdersCount, endDateOrdersCount);
      setOrdersCount(ordersCountApi.count);
    })();
  }, [endDateOrdersCount]);

  useEffect(() => {
    (async () => {
      const avgSumApi = await getAveragePrice(avgSumStartDate, avgSumEndDate);
      setAvgSum(Math.round(avgSumApi.price));
    })();
  }, [avgSumEndDate]);

  useEffect(() => {
    (async () => {
      const ordersSumApi = await getOrdersSum(ordersSumStartDate, ordersSumEndDate);
      setOrdersSum(Math.round(ordersSumApi.sum));
    })();
  }, [ordersSumEndDate]);

  useEffect(() => {
    (async () => {
      const bestProductsApi = await getMostSellingProducts(
        bestProductsStartDate,
        bestProductsEndDate,
      );
      setBestProducts(bestProductsApi);
    })();
  }, [bestProductsEndDate]);

  return (
    <AdminLayout>
      <div className={styles.wrapper}>
        <div className={styles.countStatistic}>
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
        <div className={styles.entityStatistic}>
          <div className={styles.item}>
            <ProductsStatisticItem
              name={'Самые продаваемые'}
              products={bestProducts}
              startDate={bestProductsStartDate}
              endDate={bestProductsEndDate}
              setStartDate={setBestProductsStartDate}
              setEndDate={setBestProductsEndDate}
            />
          </div>
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
