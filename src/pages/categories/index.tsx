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
  const pluralizeCategory = (count: number): string => {
    const cases = [2, 0, 1, 1, 1, 2];
    return (
      count +
      ' ' +
      ['категория', 'категории', 'категорий'][
        count % 100 > 4 && count % 100 < 20 ? 2 : cases[Math.min(count % 10, 5)]
      ]
    );
  };

  return (
    <Layout title="Категории | Пушишки">
      <>
        <PageTitle
          counter={pluralizeCategory(categories?.length ? categories?.length : 0)}
          title={'Категории'}
          breadcrumbs={[
            {
              name: 'Главная',
              path: '/',
            },
          ]}
        />
        <section className={styles.categoriesWrapper}>
          <div className={styles.wrapper}>
            {Array.isArray(categories?.data) && categories?.data.map((item) => {
              return (
                <Link key={item.id} href={`/categories/${item.slug}`}>
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
      categories,
    },
  };
};

export default CategoriesPage;
