import { Favorites, Form, PageTitle, Slider } from '@/pageComponents';
import styles from '../styles/client/Favorites.module.scss';
import { getAccessories } from '@/api';
import { IFavoritesPageProps, IProduct } from '@/types';
import { LinkButton } from '@/elements';
import { Layout } from '@/layout/client/Layout';
import { useEffect, useState } from 'react';

const FavoritesPage = ({ accessories }: IFavoritesPageProps) => {
  const [favorites, setFavorites] = useState<IProduct[]>([]);

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem('favorites') || '[]'));
  }, []);

  return (
    <Layout title={'Избранное | Пушишки'}>
      <>
        <PageTitle
          title={`Избранное(${favorites.length >= 1 ? favorites.length : 0})`}
          breadcrumbs={[
            {
              name: 'Главная',
              path: '/'
            }
          ]}
        />
        {favorites.length >= 1 ? (
          <Favorites products={favorites} />
        ) : (
          <section className={styles.favoritesWrapper}>
            <div className={styles.titleWrapper}>В избранном пока что ничего нет</div>
            <LinkButton element="link" href="/categories">
              Перейти в категории
            </LinkButton>
          </section>
        )}
        <Slider title="Аксессуары" products={accessories?.data} />
        <Form />
      </>
    </Layout>
  );
};

export default FavoritesPage;

export const getServerSideProps = async () => {
  const accessories = await getAccessories();

  return {
    props: {
      accessories
    }
  };
};
