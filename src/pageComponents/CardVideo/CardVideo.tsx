import { LinkButton } from '@/elements';
import styles from './CardVideo.module.scss';
import { CardVideoProps } from './CardVideo.props';

export const CardVideo = ({ video }: CardVideoProps) => {
  const isVideo: boolean = video && video?.startsWith('http') ? true : false;
  return (
    <>
      {isVideo && (
        <section className={styles.videoReviewWrapper}>
          <div className={styles.videoWrapper}>
            <iframe 
              className={styles.iframe}
              src={video}
              frameBorder="0" 
              allow="clipboard-write; autoplay" 
              allowFullScreen 
            ></iframe>
          </div>
          <div className={styles.youtubeAttract}>
            <span>
              Все актуальные обзоры
              <br />
              вы сможете найти
              <br />
              на нашем
              <br />
              Rutube канале!
            </span>
            <LinkButton element="link" href='https://rutube.ru/channel/46744242/'>Перейти</LinkButton>
          </div>
        </section>
      )}
    </>
  );
};
