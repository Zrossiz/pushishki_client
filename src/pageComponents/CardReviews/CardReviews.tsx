import { HTag } from '@/elements';
import Image from 'next/image';
import styles from './CardReviews.module.scss';
import { CardreviewsProps } from './CardReviews.props';
import 'swiper/css';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import cn from 'classnames';

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

export const CardReviews = ({}: CardreviewsProps) => {
    return (
        <section className={styles.cardReviewsWrapper}>
            <div className={styles.titleWrapper}>
                <HTag tag="h2">Отзывы</HTag>
            </div>
            <div className={styles.sliderWrapper}>
                <Swiper className="mySwiper">
                    <SwiperSlide>
                        Отзыв
                    </SwiperSlide>
                    <div className={styles.navWrapper}>
                        <SwiperButtonPrev />
                        <SwiperButtonNext />
                    </div>
                </Swiper>
            </div>
        </section>
    )
}