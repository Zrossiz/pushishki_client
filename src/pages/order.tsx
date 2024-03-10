import { Layout } from "@/layout/Layout"
import { PageTitle } from "@/pageComponents";
import styles from '../styles/Order.module.scss';
import { IItemCart } from "@/types";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import 'swiper/css';
import { useEffect, useState } from "react";
import cn from 'classnames';
import Image from "next/image";
import getConfig from "next/config";
import { LinkButton } from "@/elements";

const { publicRuntimeConfig } = getConfig();
const { FILESERVER_URL } = publicRuntimeConfig;

const SwiperButtonNext = () => {
    const swiper = useSwiper();
    return (
        <button className={cn(styles.navButton)} onClick={() => swiper.slideNext()}>
            <Image src={'/icons/SliderArrow.svg'} width={24} height={30} alt='Дальше' />
        </button>
    );
};

const SwiperButtonPrev = () => {
    const swiper = useSwiper();
    return (
        <button className={cn(styles.navButton, styles.reverse)} onClick={() => swiper.slidePrev()}>
            <Image src={'/icons/SliderArrow.svg'} width={24} height={30} alt='Назад' />
        </button>
    );
};

const OrderPage = () => {
    const [cart, setCart] = useState<IItemCart[]>([]);
    const [totalProductsCounter, setTotalCounter] = useState<number>(0);
    const [totalProductsPrice, setTotalProductsPrice] = useState<number>(0);

    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem('cart') || '[]'));
    }, []);

    useEffect(() => {
        let counter = 0;
        let totalPrice = 0;
    
        for (let i = 0; i < cart.length; i++) {
            counter += cart[i]?.count || 0;
            totalPrice += (cart[i]?.count || 0) * (cart[i]?.product.defaultPrice || 0);
        }
    
        setTotalCounter(counter);
        setTotalProductsPrice(totalPrice);
    }, [cart]);

    const formattedPrice: string = Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        currencyDisplay: 'symbol' 
    }).format(totalProductsPrice).split(',')[0] + '₽';

    return (
        <Layout title="Оформление | Пушишки">
            <>
                <PageTitle title="Оформление" breadcrumbs={[
                    {
                        name: 'Вернуться в корзину',
                        path: '/cart'
                    }
                ]} />
                {cart && cart.length >= 1 ?
                    <div className={styles.orderWrapper}>
                        <div className={styles.infoWrapper}>
                            <div className={styles.listWrapper}>
                                <div className={styles.titleWrapper}>
                                    Купить {totalProductsCounter} шт.
                                </div>
                                <div className={styles.swiperWrapper}>
                                    <Swiper 
                                        className="mySwipper"
                                        slidesPerView={3}
                                    >
                                        {cart.length > 3 &&
                                            <div className={styles.navWrapper}>
                                                <SwiperButtonPrev />
                                                <SwiperButtonNext />
                                            </div>
                                        }
                                        {
                                            cart.map((item: IItemCart, index: number) => {
                                                const formattedPrice: string = Intl.NumberFormat('ru-RU', {
                                                    style: 'currency',
                                                    currency: 'RUB',
                                                    currencyDisplay: 'symbol' 
                                                }).format(item.product?.defaultPrice || 0).split(',')[0] + '₽';
                                                return (
                                                    <SwiperSlide key={item.product.id} style={{ width: 'fit-content' }}>
                                                        <div className={styles.itemWrapper}>
                                                            <div className={styles.imgWrapper}>
                                                                <Image src={`${FILESERVER_URL}/upload/${item.product.image}`} fill alt={item.product.name} />
                                                            </div>
                                                            <div className={styles.title}>
                                                                {item.product.name}
                                                            </div>
                                                            <div className={styles.priceColorWrapper}>
                                                                <div className={styles.price}> 
                                                                    {formattedPrice}
                                                                </div>
                                                                <div className={styles.colorWrapper} style={{ backgroundColor: item.color }}></div>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                )
                                            })
                                        }
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                        <div className={styles.priceSectionWrapper}>
                            <div className={styles.titlePriceWrapper}>
                                <div className={styles.titleWrapper}>
                                    Итого
                                </div>
                                <div className={styles.priceWrapper}>
                                    {formattedPrice}
                                </div>
                            </div>
                            <div className={styles.counterWrapper}>
                                <div>Товары ({totalProductsCounter} шт.)</div>
                                <div>
                                    {formattedPrice}
                                </div>
                            </div>
                            <div className={styles.infoWrapper}>
                                Мы свяжемся с вами для уточнения <br />
                                деталей и стоимости доставки
                            </div>
                            <LinkButton element="button">Оформить заказ</LinkButton>
                        </div>
                    </div> 
                :
                    <div>Ничего не найдено</div>
                }
            </>
        </Layout>
    )
};

export default OrderPage;