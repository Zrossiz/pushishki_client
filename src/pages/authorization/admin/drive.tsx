import { AdminLayout } from '@/layout/admin/AdminLayout';
import styles from '../../../styles/admin/Default.module.scss';
import { useEffect, useState } from 'react';
import { IDrive } from '@/types';
import { checkUser, getAllDrives } from '@/api';
import { HTag, LinkButton } from '@/elements';
import { DriveForm, DriveListItem } from '@/components/admin';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

const DrivePage = () => {
  const [drives, setDrives] = useState<IDrive[]>([]);
  const [create, setCreate] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const apiDrives = await getAllDrives();
      if (Array.isArray(apiDrives)) {
        setDrives(apiDrives);
      }
    })();
  }, []);

  return (
    <AdminLayout>
      <>
        {create && <DriveForm action="create" setOpen={setCreate} />}
        <div className={styles.addButtonWrapper} onClick={() => setCreate(true)}>
          <LinkButton element="button">Добавить</LinkButton>
        </div>
        <div className={styles.listWrapper}>
          {drives.length > 0 ? (
            drives.map((item) => {
              return <DriveListItem key={item.id} drive={item} />;
            })
          ) : (
            <HTag tag="h3">Ничего не найдено</HTag>
          )}
        </div>
      </>
    </AdminLayout>
  );
};

export default DrivePage;

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
