import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import styles from './CardItemGallery.module.scss';
import { CardItemGalleryProps } from './CardItemGallery.props';
import getConfig from 'next/config';
import cn from 'classnames';
import Image from 'next/image';

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

export const CardItemGallery = ({ images }: CardItemGalleryProps) => {
    return (
        <div className={styles.sliderWrapper}>
            <Swiper className='mySwiper'>
                <div className={styles.navWrapper}>
                    <SwiperButtonPrev />
                    <SwiperButtonNext />
                </div>
                {images.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className={styles.itemWrapper}>
                                <img src={`${FILESERVER_URL}/upload/${item}`} alt="Фото товара" height={340} />
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}