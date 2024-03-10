import { Layout } from "@/layout/Layout"
import { PageTitle } from "@/pageComponents";
import styles from '../styles/Order.module.scss';
import { IItemCart } from "@/types";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import 'swiper/css';
import { useEffect, useState } from "react";
import cn from 'classnames';
import Image from "next/image";

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

    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem('cart') || '[]'));
    })

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
                                    Купить {cart.length} шт.
                                </div>
                                <div className={styles.swiperWrapper}>
                                    <Swiper 
                                        className="mySwipper"
                                        slidesPerView={3}
                                    >
                                        <div className={styles.navWrapper}>
                                            <SwiperButtonPrev />
                                            <SwiperButtonNext />
                                        </div>
                                        {
                                            cart.map((item: IItemCart, index: number) => {
                                                return (
                                                    <SwiperSlide>
                                                        {item.product.name}
                                                    </SwiperSlide>
                                                )
                                            })
                                        }
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                        <div className={styles.priceWrapper}></div>
                    </div> 
                :
                    <div>Ничего не найдено</div>
                }
            </>
        </Layout>
    )
};

export default OrderPage;