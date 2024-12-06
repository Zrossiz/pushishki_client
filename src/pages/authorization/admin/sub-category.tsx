import { AdminLayout } from '@/layout/admin/AdminLayout';
import styles from '../../../styles/admin/Default.module.scss';
import { useEffect, useState } from 'react';
import { HTag, LinkButton } from '@/elements';
import { ISubCategory } from '@/types';
import { checkUser, getAllSubCategories } from '@/api';
import { SubCategoryForm, SubCategoryListItem } from '@/components/admin';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

const SubCategoryPage = () => {
  const [subCategories, setSubCategories] = useState<ISubCategory[]>([]);
  const [create, setCreate] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const apiSubCategories = await getAllSubCategories();
      if (Array.isArray(apiSubCategories)) {
        setSubCategories(apiSubCategories);
      }
    })();
  }, []);

  return (
    <AdminLayout>
      <>
        {create && <SubCategoryForm setOpen={setCreate} action="create" />}
        <div className={styles.addButtonWrapper}>
          <LinkButton element="button" onClick={() => setCreate(true)}>
            Добавить
          </LinkButton>
        </div>
        <div className={styles.listWrapper}>
          {subCategories.length > 0 ? (
            subCategories.map((item) => {
              return <SubCategoryListItem key={item.id} subCategory={item} />;
            })
          ) : (
            <HTag tag="h3">Ничего не найдено</HTag>
          )}
        </div>
      </>
    </AdminLayout>
  );
};

export default SubCategoryPage;

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
