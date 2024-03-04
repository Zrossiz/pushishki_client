import { withLayout } from "@/layout/Layout"
import { Form, PageTitle, Slider } from "@/pageComponents";
import styles from '../styles/Favorites.module.scss';
import { getAccessories } from "@/api";
import { IFavoritesPageProps } from "@/types";
import { LinkButton } from "@/elements";

const FavoritesPage = ({ accessories }: IFavoritesPageProps) => {
    return (
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
            <Slider title="Аксессуары" products={accessories?.data} />
            <Form />
        </>
    )
}

export default withLayout(FavoritesPage);

export const getServerSideProps = async () => {
    const accessories = await getAccessories();

    return {
        props: {
            accessories,
        }
    }
}