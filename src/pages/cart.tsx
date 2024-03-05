import { getAccessories, getBestsellers, getCategories } from "@/api";
import { withLayout } from "@/layout/Layout";
import { Quiz, PageTitle, Slider, Cart } from "@/pageComponents";
import { ICartPageProps, IItemCart } from "@/types";
import styles from '../styles/Cart.module.scss';
import { HTag, LinkButton } from "@/elements";

const CartPage = ({ categories, accessories, bestSellers }: ICartPageProps) => {
    let localStorageBasket: IItemCart[] | undefined;
    if (typeof window !== 'undefined') {
        localStorageBasket = JSON.parse(localStorage.getItem('cart') || '[]');
    }

    let totalProductsCounter: number = 0;
    let totalProductsPrice: number = 0;

    if (localStorageBasket) {
        for (let i = 0; i < localStorageBasket?.length; i++) {
            totalProductsCounter = totalProductsCounter + localStorageBasket[i]?.count;
            totalProductsPrice = totalProductsPrice + localStorageBasket[i]?.count * localStorageBasket[i]?.product.defaultPrice;
        }
    }

    return (
        <>
            <PageTitle 
                title={`Корзина(${localStorageBasket ? totalProductsCounter : 0})`} 
                breadcrumbs={[
                    {
                        name: 'Главная',
                        path: '/'
                    },
                ]}
            />
            {
                totalProductsCounter > 0 ?
                <Cart totalProductsCounter={totalProductsCounter} products={localStorageBasket} totalProductsPrice={totalProductsPrice} /> :
                <div className={styles.emptyCartWrapper}>
                    <HTag tag="h1">Корзина пуста</HTag>
                    <LinkButton element="link" href="/categories">Перейти в категории</LinkButton>
                </div>
            }
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