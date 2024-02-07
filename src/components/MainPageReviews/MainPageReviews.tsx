import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './MainPageReviews.module.scss';
import { HTag } from "@/elements";
import 'swiper/css';

export const MainPageReviews = () => {
    return (
        <>
            <HTag tag="h2">Отзывы</HTag>
            <div className={styles.sliderWrapper}>
                <Swiper
                    slidesPerView={1}
                    className="mySwiper"
                 >
                    <SwiperSlide>1</SwiperSlide>
                    <SwiperSlide>2</SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}