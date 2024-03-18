import { PageTitle, Quiz, Slider } from '@/pageComponents';
import styles from '../../styles/client/Categories.module.scss';
import { ICategoryPageProps } from '@/types';
import Link from 'next/link';
import { getBestsellers, getCategories } from '@/api';
import getConfig from 'next/config';
import { Layout } from '@/layout/client/Layout';
import Image from 'next/image';

const { publicRuntimeConfig } = getConfig();
const { FILESERVER_URL } = publicRuntimeConfig;

const CategoriesPage = ({ categories, bestSellers }: ICategoryPageProps) => {
  return (
    <Layout title="Категории | Пушишки">
      <>
        <PageTitle
          counter={`${categories?.length} категорий`}
          title={'Категории'}
          breadcrumbs={[
            {
              name: 'Главная',
              path: '/'
            }
          ]}
        />
        <section className={styles.categoriesWrapper}>
          <div className={styles.wrapper}>
            {categories?.data.map((item, index) => {
              return (
                <Link key={item.id} href={`/categories/${item.slug}?page=1`}>
                  <div className={styles.titleWrapper}>{item.name}</div>
                  <div className={styles.imgWrapper}>
                    <Image src={`${FILESERVER_URL}/upload/${item.image}`} alt={item.name} fill />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
        <Slider title="Лучшие предложения" products={bestSellers} />
        <Quiz />
      </>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const categories = await getCategories();
  const bestSellers = await getBestsellers();

  return {
    props: {
      bestSellers,
      categories
    }
  };
};

export default CategoriesPage;
