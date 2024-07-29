import { getAllSubCategories, getCategory } from '@/api';
import { Layout } from '@/layout/client/Layout';
import { PageTitle } from '@/pageComponents';
import { ISubCategoryPage } from '@/types';
import styles from '../../../styles/client/SubCategory.module.scss';
import Link from 'next/link';

const VelotehnikaPage = ({ subCategories, category }: ISubCategoryPage) => {
  return (
    <Layout
      title={`${category?.metaTitle ? category?.metaTitle : 'Ничего не найдено'} | Пушишки`}
      description={category?.metaDescription}
      keyWords={category?.metaKeyWords}>
      <>
        <PageTitle
          title="Велотехника"
          breadcrumbs={[
            {
              name: 'Главная',
              path: '/',
            },
            {
              name: `Категории`,
              path: `/categories`,
            },
          ]}
        />
        <div className={styles.main}>
          {Array.isArray(subCategories) && subCategories?.length > 0 ? (
            subCategories.map((subCategory) => {
              return (
                <Link
                  href={`/categories/velotehnika/${subCategory.slug}`}
                  className={styles.itemWrapper}>
                  {subCategory.name}
                </Link>
              );
            })
          ) : (
            <div className={styles.notFound}>Ничего не найдено</div>
          )}
        </div>
      </>
    </Layout>
  );
};

export default VelotehnikaPage;

export const getServerSideProps = async (context: any) => {
  const subCategories = await getAllSubCategories('velotehnika');
  const category = await getCategory('velotehnika');

  return {
    props: {
      subCategories,
    },
  };
};
