import { HTag, LinkButton } from '@/elements';
import Image from 'next/image';
import styles from './CardReviews.module.scss';
import { CardreviewsProps } from './CardReviews.props';
import 'swiper/css';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import cn from 'classnames';
import { CardReview } from '@/components/client';
import { Autoplay } from 'swiper/modules';

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

export const CardReviews = ({ reviews, setOpen }: CardreviewsProps) => {
  console.log(reviews);
  return (
    <section className={styles.cardReviewsWrapper}>
      {reviews && reviews?.length > 0 ? (
        <>
          <div className={styles.titleWrapper}>
            <HTag tag="h2">Отзывы</HTag>
          </div>
          <div className={styles.sliderWrapper}>
            <Swiper 
              className="mySwiper" 
              slidesPerView={2}
              loop
              freeMode
              breakpoints={{
                240: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                900: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
            >
              {reviews?.map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <CardReview review={item} />
                  </SwiperSlide>
                );
              })}
              <div className={styles.navWrapper}>
                <SwiperButtonPrev />
                <SwiperButtonNext />
              </div>
            </Swiper>
          </div>
          <div className={styles.reviewButton}>
            <LinkButton element="button" onClick={() => setOpen(true)}>
              Оставить отзыв
            </LinkButton>
          </div>
        </>
      ) : (
        <div className={styles.nothingFoundWrapper}>
          <div className={styles.titleWrapper}>На этот товар пока отзывов нет...</div>
          <LinkButton element="button" onClick={() => setOpen(true)}>
            Оставить отзыв
          </LinkButton>
        </div>
      )}
    </section>
  );
};
