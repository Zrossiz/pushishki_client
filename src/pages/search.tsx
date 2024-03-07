import styles from '../styles/Search.module.scss';
import { PageTitle, Quiz, Slider } from "@/pageComponents";
import { getBestsellers, getCategories } from "@/api";
import { ISearchPageProps } from "@/types";
import { Layout } from '@/layout/Layout';

const SearchPage = ({ categories, bestsellers }: ISearchPageProps) => {
    return (
        <Layout title='Поиск | Пушишки'>
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
                    <div className={styles.notFoundWrapper}>
                        Введите артикул или название товара
                    </div>
                    {/* <div className={styles.inputWrapper}></div>
                    <div className={styles.productsWrapper}></div>
                    <div className={styles.paginationWrapper}></div> */}
                </section>
                <Slider title="Лучшие предложения" products={bestsellers} />
                <Quiz categories={categories?.data} />
            </>
        </Layout>
    )
};

export default SearchPage;

export const getStaticProps = async () => {

    const categorires = await getCategories();
    const bestsellers = await getBestsellers();

    return {
        props: {
            categorires,
            bestsellers,
        }
    }
}