import { withLayout } from "@/layout/Layout"
import { Catalog, PageTitle, Quiz, Slider } from "@/pageComponents"
import { IBrandWithLength, ICatalogPageProps } from "@/types"
import axios from "axios"

const CategoryPage = ({ brands }: ICatalogPageProps) => {
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
            <Catalog brands={brands} />
            <Slider title={'Лучшие предложения'} />
            <Quiz />
        </>
    )
}

export const getServerSideProps = async () => {

    const brands = await axios.get<IBrandWithLength>(`${process.env.API_URL}/brand`);

    return {
        props: {
            brands: brands?.data
        }
    }
}

export default withLayout(CategoryPage)