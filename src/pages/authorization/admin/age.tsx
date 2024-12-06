import { AdminLayout } from '@/layout/admin/AdminLayout';
import styles from '../../../styles/admin/Default.module.scss';
import { useEffect, useState } from 'react';
import { IAge } from '@/types';
import { checkUser, getAllAges } from '@/api';
import { AgeForm, AgeListItem } from '@/components/admin';
import { HTag, LinkButton } from '@/elements';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

const AgePage = () => {
  const [ages, setAges] = useState<IAge[]>([]);
  const [create, setCreate] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const apiAges = await getAllAges();
      if (Array.isArray(apiAges)) {
        setAges(apiAges);
      }
    })();
  }, []);

  return (
    <AdminLayout>
      <>
        {create && <AgeForm action="create" setOpen={setCreate} />}
        <div className={styles.addButtonWrapper}>
          <LinkButton element="button" onClick={() => setCreate(true)}>
            Добавить
          </LinkButton>
        </div>
        <div className={styles.listWrapper}>
          {ages.length > 0 ? (
            ages.map((item) => {
              return <AgeListItem key={item.id} age={item} />;
            })
          ) : (
            <HTag tag="h3">Ничего не найдено</HTag>
          )}
        </div>
      </>
    </AdminLayout>
  );
};

export default AgePage;

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
