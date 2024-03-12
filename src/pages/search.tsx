import styles from '../styles/Search.module.scss';
import { PageTitle, Quiz, Slider } from "@/pageComponents";
import { findProducts, getBestsellers, getCategories } from "@/api";
import { IProduct, IProductWithLength, ISearchPageProps } from "@/types";
import { Layout } from '@/layout/Layout';
import { Search } from '@/components';
import { useState } from 'react';

const SearchPage = ({ categories, bestsellers }: ISearchPageProps) => {
    const [search, setSearch] = useState<string>('');
    const [products, setProducts] = useState<IProduct[]>([]);
    const [startSearch, setStartSearch] = useState<boolean>(false);

    const intermidateSearch = async (letter: string) => {

        if (!startSearch) {
            setStartSearch(true);
        }

        setSearch(letter);
        const products: IProductWithLength | { message: string } = await findProducts(letter);
        //@ts-ignore
        setProducts(products.data);
    };

    const getProducts = async () => {
        setStartSearch(false);
        const products: IProductWithLength | { message: string } = await findProducts(search);
        //@ts-ignore
        setProducts(products.data);
    }

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
                    <div className={styles.search}>
                        <Search 
                            products={products} 
                            search={search} 
                            setSearch={intermidateSearch} 
                            stateSearch={startSearch}
                        />
                    </div>
                    {
                        products.length >= 1 && !startSearch ?
                        <div>Товары</div> :
                        <div className={styles.notFoundWrapper}>
                            Введите артикул или название товара
                        </div>
                    }
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

export const getServerSideProps = async () => {

    const categorires = await getCategories();
    const bestsellers = await getBestsellers();

    return {
        props: {
            categorires,
            bestsellers,
        }
    }
}