import { AdminLayout } from '@/layout/admin/AdminLayout';
import styles from '../../../styles/admin/Default.module.scss';
import { useEffect, useState } from 'react';
import { IVoltage } from '@/types';
import { checkUser, getAllVoltages } from '@/api';
import { HTag, LinkButton } from '@/elements';
import { VoltageForm, VoltageListItem } from '@/components/admin';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

const VoltagePage = () => {
  const [voltages, setVoltages] = useState<IVoltage[]>([]);
  const [create, setCreate] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const apiVoltages = await getAllVoltages();
      if (Array.isArray(apiVoltages)) {
        setVoltages(apiVoltages);
      }
    })();
  }, []);

  return (
    <AdminLayout>
      <>
        {create && <VoltageForm action="create" setOpen={setCreate} />}
        <div className={styles.addButtonWrapper}>
          <LinkButton element="button" onClick={() => setCreate(true)}>
            Добавить
          </LinkButton>
        </div>
        <div className={styles.listWrapper}>
          {voltages.length > 0 ? (
            voltages.map((item) => {
              return <VoltageListItem key={item.id} voltage={item} />;
            })
          ) : (
            <HTag tag="h3">Ничего не найдено</HTag>
          )}
        </div>
      </>
    </AdminLayout>
  );
};

export default VoltagePage;

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