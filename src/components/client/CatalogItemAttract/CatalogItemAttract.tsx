import { CatalogItemAttractProps } from './CatalogItemAttract.props';
import styles from './CatalogItemAttract.module.scss';
import Image from 'next/image';

export const CatalogItemAttract = ({ type }: CatalogItemAttractProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cardWrapper}>
        {type === 'gift' ? (
          <>
            <div className={styles.callWrapper}>
              Позвоните нам прямо сейчас и получите профессиональную консультацию!
            </div>
            <div className={styles.byNumber}>
              <span>
                По номеру <br />
                <a href="">телефона</a>!
              </span>
            </div>
            <a href="" className={styles.phoneIcon}>
              <Image src="/icons/Phone.svg" height={42} width={42} alt="Позвонить сейчас!" />
            </a>
          </>
        ) : (
          <>
            <div className={styles.takeGift}>Получите подарок при покупке нашего автомобиля</div>
            <div className={styles.takeGiftImg}>
              <Image src="/icons/Gift.svg" width={42} height={42} alt="Получите подарок" />
            </div>
            <div className={styles.takeGift}>При покупке бесплатная сборка</div>
          </>
        )}
      </div>
    </div>
  );
};
