import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import styles from './Slider.module.scss';
import { HTag } from '@/elements';
import React from 'react';
import cn from 'classnames';
import { SliderProps } from './Slider.props';
import { SliderItem } from '@/components/client';

const SwiperButtonNext = () => {
  const swiper = useSwiper();
  return (
    <button className={cn(styles.navButton)} onClick={() => swiper.slideNext()}>
      <Image src={'/icons/SliderNavArrow.svg'} width={24} height={24} alt="Дальше" />
    </button>
  );
};

const SwiperButtonPrev = () => {
  const swiper = useSwiper();
  return (
    <button className={cn(styles.navButton, styles.reverse)} onClick={() => swiper.slidePrev()}>
      <Image src={'/icons/SliderNavArrow.svg'} width={24} height={24} alt="Назад" />
    </button>
  );
};

export const Slider = ({ title, products, style }: SliderProps) => {
  return (
    <>
      <section className={styles.slider} style={style}>
        <div className={styles.wrapper}>
          <div className={styles.titleWrapper}>
            <HTag tag="h2">{title}</HTag>
          </div>
        </div>
        <Swiper
          className={cn('mySwipper', styles.swiper)}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop
          slidesPerView={3}
          spaceBetween={60}
          breakpoints={{
            640: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            900: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1000: {
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
          {products?.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <SliderItem product={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
};
