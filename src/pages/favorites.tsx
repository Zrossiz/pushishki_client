import { withLayout } from "@/layout/Layout"
import { Form, PageTitle, Slider } from "@/pageComponents";
import styles from '../styles/Favorites.module.scss';
import { getAccessories } from "@/api";
import { IFavoritesPageProps } from "@/types";

const FavoritesPage = ({ acessories }: IFavoritesPageProps) => {
    return (
        <>
            <PageTitle 
                title="Поиск" 
                breadcrumbs={[
                    {
                        name: 'Главная',
                        path: '/'
                    },
                ]}
                counter="0 товаров"
            />
            <section className={styles.favoritesWrapper}></section>
            <Slider title="Аксессуары" products={acessories?.data} />
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