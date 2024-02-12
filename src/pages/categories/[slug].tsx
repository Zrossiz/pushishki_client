import { getBrands, getCategoryProducts, getCountries } from "@/api";
import { withLayout } from "@/layout/Layout";
import { Catalog, PageTitle, Quiz, Slider } from "@/pageComponents";
import { ICatalogPageProps } from "@/types";
import { useState } from "react";

const CategoryPage = ({ brands, countries, products }: ICatalogPageProps) => {
    const [page, setPage] = useState<number>(1)

    return (
        <>
            <PageTitle 
                title={'Каталог'} 
                counter={`10 товаров`} 
                breadcrumbs={[
                    {
                        name: 'Главная',
                        path: '/'
                    },
                    {
                        name: 'Категории',
                        path: '/categories'
                    }
                ]}
            />
            <Catalog 
                brands={brands} 
                countries={countries} 
                products={products}
            />
            <Slider title={'Лучшие предложения'} />
            <Quiz />
        </>
    )
}

export const getServerSideProps = async (context: { params: { slug: string; }; }) => {

    const { slug } = context.params; 

    const brands = await getBrands();
    const countries = await getCountries();
    const products = await getCategoryProducts(slug);

    return {
        props: {
            brands,
            countries,
            products,
        }
    }
}

export default withLayout(CategoryPage)