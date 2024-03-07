import { getAccessories, getBestsellers, getCategories } from "@/api";
import { Quiz, PageTitle, Slider, Cart } from "@/pageComponents";
import { ICartPageProps, IItemCart, IProduct } from "@/types";
import styles from '../styles/Cart.module.scss';
import { HTag, LinkButton } from "@/elements";
import { useEffect, useState } from "react";
import { Layout } from "@/layout/Layout";

const CartPage = ({ categories, accessories, bestSellers }: ICartPageProps) => {
    const [localStorageBasket, setLocalStorageBasket] = useState<IItemCart[]>([]);
    const [localStorageFavorites, setLocalStorageFavorites] = useState<IProduct[]>([]);
    const [totalProductsCounter, setTotalCounter] = useState<number>(0);
    const [totalProductsPrice, setTotalProductsPrice] = useState<number>(0);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const cart = JSON.parse(localStorage.getItem('cart') || '[]');
            setLocalStorageBasket(cart);
        }
    }, []);
    
    useEffect(() => {
        let counter = 0;
        let totalPrice = 0;
    
        for (let i = 0; i < localStorageBasket.length; i++) {
            counter += localStorageBasket[i]?.count || 0;
            totalPrice += (localStorageBasket[i]?.count || 0) * (localStorageBasket[i]?.product.defaultPrice || 0);
        }
    
        setTotalCounter(counter);
        setTotalProductsPrice(totalPrice);
    }, [localStorageBasket]);

    const addToCart = (id: number, color: string | undefined) => {
        let cart: IItemCart[] = JSON.parse(localStorage.getItem('cart') || '[]');

        for (let i = 0; i < cart.length; i++) {
            if (id === cart[i].product.id && color === cart[i].color && cart[i].color) {
                cart[i].count = cart[i].count + 1;
            }
            if (id === cart[i].product.id && color === undefined) {
                cart[i].count = cart[i].count + 1;
            }
        }

        setLocalStorageBasket(cart);

        return localStorage.setItem('cart', JSON.stringify(cart));
    };

    const removeFromCart = (id: number, color: string | undefined, deleteItem?: boolean) => {
        let cart: IItemCart[] = JSON.parse(localStorage.getItem('cart') || '[]');

        if (deleteItem) {
            for (let i = 0; i < cart.length; i++) {
                if (id === cart[i].product.id && color === cart[i].color && cart[i].color) {
                    cart.splice(i, 1);
                }
            }
        } else {
            for (let i = 0; i < cart.length; i++) {
                if (id === cart[i].product.id && color === cart[i].color && cart[i].color) {
                    cart[i].count = cart[i].count - 1
                }
                if (id === cart[i].product.id && color === undefined) {
                    cart[i].count = cart[i].count - 1;
                }
                if (cart[i].count === 0) {
                    cart.splice(i, 1);
                }
            }
        }

        setLocalStorageBasket(cart);

        return localStorage.setItem('cart', JSON.stringify(cart));
    };

    const switchFavorite = (product: IProduct) => {
        let favorites: IProduct[] = JSON.parse(localStorage.getItem('favorites') || '[]');
        let isAdded: number | boolean = false;
        
        for (let i = 0; i < favorites.length; i++) {
            if (favorites[i]?.id === product.id) {
                isAdded = i;
                break;
            } 
        }
    
        if (isAdded !== false) {
            favorites.splice(isAdded, 1);
        } else {
            console.log(product);
            favorites.push(product);
        }
    
        setLocalStorageFavorites(favorites);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
    

    return (
        <Layout title="Корзина | Пушишки">
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
                    <Cart 
                        totalProductsCounter={totalProductsCounter} 
                        products={localStorageBasket} 
                        totalProductsPrice={totalProductsPrice} 
                        removeFromCart={removeFromCart}
                        addToCart={addToCart}
                        switchFavorite={switchFavorite}
                        localStorageFavorites={localStorageFavorites}
                    /> :
                    <div className={styles.emptyCartWrapper}>
                        <div className={styles.titleWrapper}>Корзина пуста</div>
                        <LinkButton element="link" href="/categories">Перейти в категории</LinkButton>
                    </div>
                }
                <Slider title="Аксесуары" products={accessories?.data} />
                <Slider title="Лучшие предложения" products={bestSellers} />
                <Quiz categories={categories?.data} />
            </>
        </Layout>
    )
};

export default CartPage;

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