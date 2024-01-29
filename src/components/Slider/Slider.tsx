import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import styles from './Slider.module.scss';
import Link from 'next/link';
import { HTag } from '@/elements';
import React from 'react';
import { SliderNavProps } from '@/types';

const SwiperButtonNext = ({ children }: SliderNavProps) => {
    const swiper = useSwiper();
    return <button onClick={() => swiper.slideNext()}>{children}</button>;
};

const SwiperButtonPrev = ({ children }: SliderNavProps) => {
    const swiper = useSwiper();
    return <button onClick={() => swiper.slidePrev()}>{children}</button>;
};

export const Slider = () => {
    const swiper = useSwiper();

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.titleWrapper}>
                    <HTag tag='h2'>Новинки</HTag>
                </div>
            </div>
            <Swiper className='mySwiper'
                slidesPerView={1}
                spaceBetween={10}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                }}
            >
                <div className={styles.navigationWrapper}>
                    <SwiperButtonPrev>prev</SwiperButtonPrev>
                    <SwiperButtonNext>next</SwiperButtonNext>
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
                                <span>Китай</span>
                            </div>
                            <div className={styles.priceWrapper}>
                                от<span> 20000&#8381; </span>
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
                                <span>Китай</span>
                            </div>
                            <div className={styles.priceWrapper}>
                                от<span> 20000&#8381; </span>
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
                                <span>Китай</span>
                            </div>
                            <div className={styles.priceWrapper}>
                                от<span> 20000&#8381; </span>
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
                                <span>Китай</span>
                            </div>
                            <div className={styles.priceWrapper}>
                                от<span> 20000&#8381; </span>
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
                                <span>Китай</span>
                            </div>
                            <div className={styles.priceWrapper}>
                                от<span> 20000&#8381; </span>
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
                                <span>Китай</span>
                            </div>
                            <div className={styles.priceWrapper}>
                                от<span> 20000&#8381; </span>
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
                                <span>Китай</span>
                            </div>
                            <div className={styles.priceWrapper}>
                                от<span> 20000&#8381; </span>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
            </Swiper>
        </>
    )
}