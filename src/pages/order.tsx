import { Layout } from "@/layout/clientLayout/Layout"
import { PageTitle } from "@/pageComponents";
import styles from '../styles/Order.module.scss';
import { IItemCart } from "@/types";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import 'swiper/css';
import { useEffect, useState } from "react";
import cn from 'classnames';
import Image from "next/image";
import getConfig from "next/config";
import { Input, LinkButton } from "@/elements";
import axios from "axios";
import { InfoPopup } from "@/components";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { postOrder } from "@/api";

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
    const [success, setSuccess] = useState<boolean>(false);
    
    const [delivery, setDelivery] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const router = useRouter();

    const checkout = async () => {
        const responseOrder = await postOrder(
            name,
            lastName,
            address,
            phone,
            delivery,
            totalProductsPrice
        );
        setSuccess(true);
        setDelivery('');
        setName('');
        setLastName('');
        setAddress('');
        setPhone('');
        localStorage.setItem('cart', '[]');
        setTimeout(() => setSuccess(false), 2000)
        setTimeout(() => {
            router.push('/')
        }, 2400);
    }

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
                        <AnimatePresence>
                            {success && 
                                <InfoPopup title="Заказ успешно оформлен" description="Мы скоро свяжемся с вами!" order={true} />
                            }
                        </AnimatePresence>
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
                                                    <SwiperSlide key={index} style={{ width: 'fit-content' }}>
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
                            <div className={styles.deliveryWrapper}>
                                <div className={styles.titleWrapper}>
                                    Способ получения
                                </div>
                                <form className={styles.optionWrapper}>
                                    <div className={styles.option}>
                                        <input id="delivery1" name="delivery" type="radio" onChange={() => setDelivery('Доставка')} />
                                        <label htmlFor="delivery1">Доставка</label>
                                    </div>
                                    <div className={styles.option}>
                                        <input id="delivery2" name="delivery" type="radio" onChange={() => setDelivery('Самовывоз')} />
                                        <label htmlFor="delivery2">Самовывоз</label>
                                    </div>
                                </form>
                            </div>
                            <div className={styles.contactsWrapper}>
                                <div className={styles.titleWrapper}>
                                    Получатель
                                </div>
                                <div className={styles.inputsWrapper}>
                                    <Input type="text" value={name} onChange={setName} placeholder="Имя" />
                                    <Input type="text" value={lastName} onChange={setLastName} placeholder="Фамилия" />
                                    <Input type="text" value={address} onChange={setAddress} placeholder="Адрес" />
                                    <Input type="phone" onChange={setPhone}/>
                                </div>
                            </div>
                            <div className={styles.paymentWrapper}>
                                <div className={styles.titleWrapper}>
                                    Оплата
                                </div>
                                <div className={styles.optionWrapper}>
                                    <div className={styles.option}>
                                            <input type="radio" defaultChecked />
                                            <label>При получении</label>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.resultWrapper}>
                                <div className={styles.result}>
                                    <div className={styles.titleWrapper}>
                                        Итого:
                                    </div>
                                    <div className={styles.price}>{formattedPrice}</div>
                                </div>
                                <div className={styles.infoWrapper}>
                                    Окончательная стоимость заказа будет<br />
                                    подтверждена после обработки заказа  
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
                            <LinkButton 
                                element="button"
                                disabled={
                                    name.length >= 1 &&
                                    lastName.length >= 1 &&
                                    phone.length >= 1 ?
                                    false : true
                                }
                                onClick={checkout}
                            >Оформить заказ</LinkButton>
                        </div>
                    </div> 
                :
                    <div className={styles.emptyCartWrapper}>
                        <div className={styles.titleWrapper}>Ничего нет</div>
                        <LinkButton element="link" href="/categories">Перейти в категории</LinkButton>
                    </div>
                }
            </>
        </Layout>
    )
};

export default OrderPage;