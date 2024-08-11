import { Layout } from '@/layout/client/Layout';
import { getAllSubCategoriesByCategory, getCategory } from '@/api';
import { ISubCategoryPage } from '@/types';
import { PageTitle } from '@/pageComponents';
import Link from 'next/link';
import styles from '../../../../styles/client/SubCategory.module.scss';
import { useRouter } from 'next/router';

const SubCategoryPage = ({ subCategories, category }: ISubCategoryPage) => {
  const router = useRouter();
  return (
    <Layout
      title={`${category?.metaTitle ? category?.metaTitle : 'Ничего не найдено'} | Пушишки`}
      description={category?.metaDescription}
      keyWords={category?.metaKeyWords}
    >
      <>
        <PageTitle
          title={category?.name ?? 'Подкатегория'}
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
              const linkToNextPage: string = router.asPath + '/' + subCategory.slug;
              return (
                <Link href={linkToNextPage} className={styles.itemWrapper}>
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

export default SubCategoryPage;

export const getServerSideProps = async (context: any) => {
  const subCategorySlug = context.query.slug;
  const subCategories = await getAllSubCategoriesByCategory(subCategorySlug);
  const category = await getCategory(subCategorySlug);
  return {
    props: {
      subCategories,
      category,
    },
  };
};
