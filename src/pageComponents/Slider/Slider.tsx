import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import styles from './Slider.module.scss';
import Link from 'next/link';
import { HTag } from '@/elements';
import React from 'react';
import cn from 'classnames';
import { SliderProps } from './Slider.props';

const SwiperButtonNext = () => {
    const swiper = useSwiper();
    return (
        <button className={cn(styles.navButton)} onClick={() => swiper.slideNext()}>
            <Image src={'/icons/SliderNavArrow.svg'} width={24} height={24} alt='Дальше' />
        </button>
    );
};

const SwiperButtonPrev = () => {
    const swiper = useSwiper();
    return (
        <button className={cn(styles.navButton, styles.reverse)} onClick={() => swiper.slidePrev()}>
            <Image src={'/icons/SliderNavArrow.svg'} width={24} height={24} alt='Назад' />
        </button>
    );
};

export const Slider = ({ title }: SliderProps) => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.titleWrapper}>
                    <HTag tag='h2'>{title}</HTag>
                </div>
            </div>
            <Swiper className={cn('mySwipper', styles.swiper)}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                loop
                slidesPerView={1}
                spaceBetween={10}
                breakpoints={{
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    968: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                    1200: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                }}
                modules={[Autoplay]}
            >
                <div className={styles.navigationWrapper}>
                    <SwiperButtonPrev />
                    <SwiperButtonNext />
                </div>
                <SwiperSlide>
                    <Link href="#" className={styles.itemWrapper}>
                        <div className={styles.imgWrapper}>
                            <Image src={'/sliderImg.png'} width={200} height={150} alt="1" />
                        </div>
                        <div className={styles.descWrapper}>
                            <div className={styles.titleWrapper}>
                                <HTag tag='h3' color='black'>
                                    Mercedes Benz
                                </HTag>
                            </div>
                            <div className={styles.countryWrapper}>
                                <span>Производитель: Китай</span>
                            </div>
                            <div className={styles.priceWrapper}>
                                от<span> 20000 &#8381;</span>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="#" className={styles.itemWrapper}>
                        <div className={styles.imgWrapper}>
                            <Image src={'/sliderImg.png'} width={200} height={150} alt="1" />
                        </div>
                        <div className={styles.descWrapper}>
                            <div className={styles.titleWrapper}>
                                <HTag tag='h3' color='black'>
                                    Mercedes Benz
                                </HTag>
                            </div>
                            <div className={styles.countryWrapper}>
                                <span>Производитель: Китай</span>
                            </div>
                            <div className={styles.priceWrapper}>
                                от<span> 20000 &#8381;</span>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="#" className={styles.itemWrapper}>
                        <div className={styles.imgWrapper}>
                            <Image src={'/sliderImg.png'} width={200} height={150} alt="1" />
                        </div>
                        <div className={styles.descWrapper}>
                            <div className={styles.titleWrapper}>
                                <HTag tag='h3'>
                                    Mercedes Benz
                                </HTag>
                            </div>
                            <div className={styles.countryWrapper}>
                                <span>Производитель: Китай</span>
                            </div>
                            <div className={styles.priceWrapper}>
                                от<span> 20000 &#8381;</span>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="#" className={styles.itemWrapper}>
                        <div className={styles.imgWrapper}>
                            <Image src={'/sliderImg.png'} width={200} height={150} alt="1" />
                        </div>
                        <div className={styles.descWrapper}>
                            <div className={styles.titleWrapper}>
                                <HTag tag='h3' color='black'>
                                    Mercedes Benz
                                </HTag>
                            </div>
                            <div className={styles.countryWrapper}>
                                <span>Производитель: Китай</span>
                            </div>
                            <div className={styles.priceWrapper}>
                                от<span> 20000 &#8381;</span>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="#" className={styles.itemWrapper}>
                        <div className={styles.imgWrapper}>
                            <Image src={'/sliderImg.png'} width={200} height={150} alt="1" />
                        </div>
                        <div className={styles.descWrapper}>
                            <div className={styles.titleWrapper}>
                                <HTag tag='h3' color='black'>
                                    Mercedes Benz
                                </HTag>
                            </div>
                            <div className={styles.countryWrapper}>
                                <span>Производитель: Китай</span>
                            </div>
                            <div className={styles.priceWrapper}>
                                от<span> 20000 &#8381;</span>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="#" className={styles.itemWrapper}>
                        <div className={styles.imgWrapper}>
                            <Image src={'/sliderImg.png'} width={200} height={150} alt="1" />
                        </div>
                        <div className={styles.descWrapper}>
                            <div className={styles.titleWrapper}>
                                <HTag tag='h3' color='black'>
                                    Mercedes Benz
                                </HTag>
                            </div>
                            <div className={styles.countryWrapper}>
                                <span>Производитель: Китай</span>
                            </div>
                            <div className={styles.priceWrapper}>
                                от<span> 20000 &#8381;</span>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="#" className={styles.itemWrapper}>
                        <div className={styles.imgWrapper}>
                            <Image src={'/sliderImg.png'} width={200} height={150} alt="1" />
                        </div>
                        <div className={styles.descWrapper}>
                            <div className={styles.titleWrapper}>
                                <HTag tag='h3' color='black'>
                                    Mercedes Benz
                                </HTag>
                            </div>
                            <div className={styles.countryWrapper}>
                                <span>Производитель: Китай</span>
                            </div>
                            <div className={styles.priceWrapper}>
                                от<span> 20000 &#8381;</span>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
            </Swiper>
        </>
    )
}