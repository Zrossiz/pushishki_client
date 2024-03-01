import { withLayout } from "@/layout/Layout";
import styles from '../styles/Search.module.scss';
import { PageTitle, Quiz, Slider } from "@/pageComponents";
import { getBestsellers, getCategories } from "@/api";
import { ISearchPage } from "@/types";

const SearchPage = ({ categories, bestsellers }: ISearchPage) => {
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
            <section className={styles.searchWrapper}>
                <div className={styles.inputWrapper}></div>
                <div className={styles.productsWrapper}></div>
                <div className={styles.paginationWrapper}></div>
            </section>
            <Slider title="Лучшие предложения" products={bestsellers} />
            <Quiz categories={categories?.data} />
        </>
    )
};

export default withLayout(SearchPage);

export const getStaticProps = async () => {

    const categorires = getCategories();
    const bestSellers = getBestsellers();

    return {
        props: {
            categorires,
            bestSellers,
        }
    }
}