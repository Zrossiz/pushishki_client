import { HTag, LinkButton } from '@/elements';
import { AdminLayout } from '@/layout/admin/AdminLayout';
import styles from '../../../styles/admin/Default.module.scss';
import { useEffect, useState } from 'react';
import { CategoryForm, CategoryListItem } from '@/components/admin';
import { ICategory, ICategoryWithLength } from '@/types';
import { checkUser, getCategories } from '@/api';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

const CategoryPage = () => {
  const [create, setCreate] = useState<boolean>(false);
  const [categories, setCategories] = useState<ICategoryWithLength>();

  useEffect(() => {
    (async () => {
      const queryCategories = await getCategories();
      if ('data' in queryCategories) {
        setCategories(queryCategories);
      }
    })();
  }, []);

  return (
    <AdminLayout>
      <>
        {create && <CategoryForm setOpen={setCreate} />}
        <div className={styles.addButtonWrapper}>
          <LinkButton element="button" onClick={() => setCreate(true)}>
            Добавить
          </LinkButton>
        </div>
        <div className={styles.listWrapper}>
          {categories && categories?.totalPages >= 1 ? (
            categories?.data.map((item: ICategory) => {
              return <CategoryListItem key={item.id} category={item} />;
            })
          ) : (
            <HTag tag="h3">Ничего не найдено</HTag>
          )}
        </div>
      </>
    </AdminLayout>
  );
};

export default CategoryPage;

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
