import { withLayout } from "@/layout/Layout";
import { Catalog, PageTitle, Quiz, Slider } from "@/pageComponents";
import { IBrandWithLength, ICatalogPageProps, ICountryWithLength } from "@/types";
import axios from "axios";
import { useRouter } from "next/router";

const CategoryPage = ({ brands, countries, products }: ICatalogPageProps) => {
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

    const brands = await axios.get<IBrandWithLength>(`${process.env.API_URL}/brand`);
    const countries = await axios.get<ICountryWithLength>(`${process.env.API_URL}/country`);
    const products = await axios.get(`${process.env.API_URL}/category/${slug}/products`)

    return {
        props: {
            brands: brands?.data,
            countries: countries?.data,
            products: products?.data
        }
    }
}

export default withLayout(CategoryPage)