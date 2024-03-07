import { Favorites, Form, PageTitle, Slider } from "@/pageComponents";
import styles from '../styles/Favorites.module.scss';
import { getAccessories } from "@/api";
import { IFavoritesPageProps } from "@/types";
import { LinkButton } from "@/elements";
import { Layout } from "@/layout/Layout";

const FavoritesPage = ({ accessories }: IFavoritesPageProps) => {
    return (
        <Layout title={'Избранное | Пушишки'}>
            <>
                <PageTitle 
                    title="Избранное" 
                    breadcrumbs={[
                        {
                            name: 'Главная',
                            path: '/'
                        },
                    ]}
                    counter="0 товаров"
                />
                <section className={styles.favoritesWrapper}>
                    <div className={styles.titleWrapper}>В избранном пока что ничего нет</div>
                    <LinkButton element="link" href="/categories">Перейти в категории</LinkButton>
                </section>
                <Favorites />
                <Slider title="Аксессуары" products={accessories?.data} />
                <Form />
            </>
        </Layout>
    )
}

export default FavoritesPage;

export const getServerSideProps = async () => {
    const accessories = await getAccessories();

    return {
        props: {
            accessories,
        }
    }
}