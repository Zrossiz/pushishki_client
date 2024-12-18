import { AdminLayout } from '@/layout/admin/AdminLayout';
import styles from '../../../styles/admin/Default.module.scss';
import { useEffect, useState } from 'react';
import { IOrder, IOrderWithLength } from '@/types';
import { checkUser, getAllOrders } from '@/api';
import { OrderListItem, Pagination } from '@/components/admin';
import { HTag } from '@/elements';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

const BasketPage = () => {
  const [curPage, setCurPage] = useState<number>(1);
  const [orders, setOrders] = useState<IOrderWithLength>();

  useEffect(() => {
    (async () => {
      const ordersApi = await getAllOrders(curPage);
      if ('data' in ordersApi) {
        setOrders(ordersApi);
      }
    })();
  }, [curPage]);

  return (
    <AdminLayout>
      <>
        <div className={styles.listWrapper}>
          {orders && orders?.totalPages >= 1 ? (
            orders?.data.map((item: IOrder) => {
              return <OrderListItem order={item} key={item.id} />;
            })
          ) : (
            <HTag tag="h3">Ничего не найдено</HTag>
          )}
        </div>
        {orders && orders?.totalPages > 1 && (
          <div className={styles.paginationWrapper}>
            <Pagination curPage={curPage} setCurPage={setCurPage} totalPages={orders.totalPages} />
          </div>
        )}
      </>
    </AdminLayout>
  );
};

export default BasketPage;

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
