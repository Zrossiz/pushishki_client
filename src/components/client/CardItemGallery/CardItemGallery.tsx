import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import styles from './CardItemGallery.module.scss';
import { CardItemGalleryProps } from './CardItemGallery.props';
import getConfig from 'next/config';
import cn from 'classnames';
import Image from 'next/image';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

const { publicRuntimeConfig } = getConfig();
const { FILESERVER_URL } = publicRuntimeConfig;

Fancybox.bind('[data-fancybox="gallery"]');

const SwiperButtonNext = () => {
  const swiper = useSwiper();
  return (
    <button className={cn(styles.navButton)} onClick={() => swiper.slideNext()}>
      <Image src={'/icons/SliderArrow.svg'} width={24} height={30} alt="Дальше" />
    </button>
  );
};

const SwiperButtonPrev = () => {
  const swiper = useSwiper();
  return (
    <button className={cn(styles.navButton, styles.reverse)} onClick={() => swiper.slidePrev()}>
      <Image src={'/icons/SliderArrow.svg'} width={24} height={30} alt="Назад" />
    </button>
  );
};

export const CardItemGallery = ({ images }: CardItemGalleryProps) => {
  return (
    <div className={styles.sliderWrapper}>
      {images && images[0] !== '' ? (
        <Swiper className={cn('mySwiper', styles.centered)}>
          {images.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className={styles.itemWrapper}>
                  <a href={`${FILESERVER_URL}/upload/${item}`} data-fancybox="gallery">
                    <Image
                      src={`${FILESERVER_URL}/upload/${item}`}
                      alt="Фото товара"
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </a>
                </div>
              </SwiperSlide>
            );
          })}
          <SwiperButtonPrev />
          <SwiperButtonNext />
        </Swiper>
      ) : (
        <div className={styles.noPhoto}>
          <Image src={'/icons/NoPhoto.svg'} alt="Фото не найдено" width={40} height={40} />
        </div>
      )}
    </div>
  );
};
