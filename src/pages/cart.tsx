import { getAccessories, getBestsellers, getCategories } from "@/api";
import { withLayout } from "@/layout/Layout";
import { Quiz, PageTitle, Slider, Cart } from "@/pageComponents";
import { ICartPageProps, IItemCart } from "@/types";

const CartPage = ({ categories, accessories, bestSellers }: ICartPageProps) => {
    let localStorageBasket: IItemCart[] | undefined;
    if (typeof window !== 'undefined') {
        localStorageBasket = JSON.parse(localStorage.getItem('cart') || '[]');
    }

    return (
        <>
            <PageTitle 
                title={`Корзина(${localStorageBasket ? localStorageBasket?.length : 0})`} 
                breadcrumbs={[
                    {
                        name: 'Главная',
                        path: '/'
                    },
                ]}
            />
            <Cart products={localStorageBasket} />
            <Slider title="Аксесуары" products={accessories?.data} />
            <Slider title="Лучшие предложения" products={bestSellers} />
            <Quiz categories={categories?.data} />
        </>
    )
};

export default withLayout(CartPage);

export const getServerSideProps = async () => {

    const categories = await getCategories();
    const accessories = await getAccessories();
    const bestSellers = await getBestsellers();

    return {
        props: {
            categories,
            accessories,
            bestSellers,
        }
    }
}