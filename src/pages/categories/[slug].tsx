import { getBrands, getCategoryProducts, getCountries } from "@/api";
import { withLayout } from "@/layout/Layout";
import { Catalog, PageTitle, Quiz, Slider } from "@/pageComponents";
import { ICatalogPageProps } from "@/types";

const CategoryPage = ({ brands, countries, products, curPage }: ICatalogPageProps) => {

    return (
        <>
            <PageTitle 
                title={'Каталог'} 
                counter={`Более ${products && products?.totalPages * 10} товаров`} 
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
                curPage={curPage}
            />
            <Slider title={'Лучшие предложения'} />
            <Quiz />
        </>
    )
}

export const getServerSideProps = async (context: { 
    params: { slug: string; }; 
    query: { page: string; sort: string; }; 
}) => {

    const { slug } = context.params; 
    const curPage = parseInt(context.query.page) || 1;
    const sort = context.query?.sort || 'desc';

    const brands = await getBrands();
    const countries = await getCountries();
    const products = await getCategoryProducts(slug, curPage, sort);

    return {
        props: {
            brands,
            countries,
            products,
            curPage,
        }
    }
}

export default withLayout(CategoryPage)