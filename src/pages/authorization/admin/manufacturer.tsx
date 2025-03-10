import { checkUser, getAllManufacturers } from '@/api';
import { HTag, LinkButton } from '@/elements';
import { AdminLayout } from '@/layout/admin/AdminLayout';
import { IManufacturer } from '@/types/Manufacturer';
import { useEffect, useState } from 'react';
import styles from '../../../styles/admin/Default.module.scss';
import { ManufacturerForm, ManufacturerListItem } from '@/components/admin';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

const ManufacturerPage = () => {
  const [manufacturers, setManufacturers] = useState<IManufacturer[]>([]);
  const [create, setCreate] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const apiManufacturers = await getAllManufacturers();
      if (Array.isArray(apiManufacturers)) {
        setManufacturers(apiManufacturers);
      }
    })();
  }, []);

  return (
    <AdminLayout>
      <>
        {create && <ManufacturerForm isEdit={false} setOpen={setCreate} />}
        <div className={styles.addButtonWrapper}>
          <LinkButton element="button" onClick={() => setCreate(true)}>
            Добавить
          </LinkButton>
        </div>
        <div className={styles.listWrapper}>
          {manufacturers.length > 0 ? (
            manufacturers.map((manufacturer) => {
              return <ManufacturerListItem key={manufacturer.id} item={manufacturer} />;
            })
          ) : (
            <HTag tag="h3">Ничего не найдено</HTag>
          )}
        </div>
      </>
    </AdminLayout>
  );
};

export default ManufacturerPage;

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
