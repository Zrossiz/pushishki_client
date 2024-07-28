import { HTag } from '@/elements';
import Image from 'next/image';
import styles from './WhyChoose.module.scss';

export const WhyChoose = () => {
  return (
    <section className={styles.whyChoose}>
      <div className={styles.titleWrapper}>
        <HTag tag="h2">
          Почему стоить выбирать <br /> Пушишки?
        </HTag>
      </div>
      <div className={styles.advantagesWrapper}>
        <ul>
          <li className={styles.advantage}>
            <div className={styles.imgWrapper}>
              <div className={styles.img}>
                <Image
                  src={'/icons/Delivery.svg'}
                  fill
                  style={{ objectFit: 'cover' }}
                  alt="Быстрая доставка"
                />
              </div>
            </div>
            <HTag tag="h3">Быстрая доставка</HTag>
            <span>
              Доставим вам товар в <br /> ближайшее время после заказа
            </span>
          </li>
          <li className={styles.advantage}>
            <div className={styles.imgWrapper}>
              <div className={styles.img}>
                <Image
                  src={'/icons/Help.svg'}
                  fill
                  style={{ objectFit: 'cover' }}
                  alt="Помощь в выборе"
                />
              </div>
            </div>
            <HTag tag="h3">Помощь в выборе</HTag>
            <span>
              Мы всегда поможем выбрать то, что нужно вам и вашему ребенку. <br />
              Наши менеджеры всегда на связи с 9:00 до 23:00
            </span>
          </li>
          <li className={styles.advantage}>
            <div className={styles.imgWrapper}>
              <div className={styles.img}>
                <Image
                  src={'/icons/BestChoice.svg'}
                  fill
                  style={{ objectFit: 'cover' }}
                  alt="Лучшие предложения"
                />
              </div>
            </div>
            <HTag tag="h3">Лучшие предложения</HTag>
            <span>
              В нашем каталоге и в нашем шоуруме вы точно сможете найти что-то уникальное для своего
              ребенка
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};
