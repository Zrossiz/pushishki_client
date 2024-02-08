import { withLayout } from "@/layout/Layout"
import { Catalog, PageTitle, Quiz, Slider } from "@/pageComponents"

const CategoryPage = () => {
    return (
        <>
            <PageTitle 
                title={'Покупка электромобиля'} 
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
            <Catalog />
            <Slider title={'Лучшие предложения'} />
            <Quiz />
        </>
    )
}

export default withLayout(CategoryPage)