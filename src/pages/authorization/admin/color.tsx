import { AdminLayout } from '@/layout/admin/AdminLayout';
import styles from '../../../styles/admin/Default.module.scss';
import { HTag, LinkButton } from '@/elements';
import { useEffect, useState } from 'react';
import { IColor } from '@/types/Color';
import { checkUser, getAllColors } from '@/api';
import { ColorForm, ColorListItem } from '@/components/admin';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

const ColorPage = () => {
  const [create, setCreate] = useState<boolean>(false);
  const [colors, setColors] = useState<IColor[]>([]);

  useEffect(() => {
    (async () => {
      const queryColors = await getAllColors();
      if (Array.isArray(queryColors)) {
        setColors(queryColors);
      }
    })();
  }, []);

  return (
    <AdminLayout>
      <>
        {create && <ColorForm setOpen={setCreate} />}
        <div className={styles.addButtonWrapper}>
          <LinkButton element="button" onClick={() => setCreate(true)}>
            Добавить
          </LinkButton>
        </div>
        <div className={styles.listWrapper}>
          {colors.length > 0 ? (
            colors.map((item) => {
              return <ColorListItem color={item} key={item.id} />;
            })
          ) : (
            <HTag tag="h3">Ничего не найдено</HTag>
          )}
        </div>
      </>
    </AdminLayout>
  );
};

export default ColorPage;

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
