import { withLayout } from "@/layout/Layout"
import { Catalog, PageTitle, Quiz, Slider } from "@/pageComponents"
import { IBrandWithLength, ICatalogPageProps, ICountryWithLength } from "@/types"
import axios from "axios"

const CategoryPage = ({ brands, countries }: ICatalogPageProps) => {
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
            <Catalog brands={brands} countries={countries} />
            <Slider title={'Лучшие предложения'} />
            <Quiz />
        </>
    )
}

export const getServerSideProps = async () => {

    const brands = await axios.get<IBrandWithLength>(`${process.env.API_URL}/brand`);
    const countries = await axios.get<ICountryWithLength>(`${process.env.API_URL}/country`);

    return {
        props: {
            brands: brands?.data,
            countries: countries?.data
        }
    }
}

export default withLayout(CategoryPage)