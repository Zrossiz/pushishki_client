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
                <Image src={'/icons/Delivery.svg'} width={50} height={50} alt="Быстрая доставка" />
              </div>
              <HTag tag="h3">Быстрая доставка</HTag>
              <span>Доставим вам товар в <br /> ближайшее время после заказа</span>
            </li>
            <li className={styles.advantage}>
              <div className={styles.imgWrapper}>
                <Image src={'/icons/Help.svg'} width={50} height={50} alt="Помощь в выборе" />
              </div>
              <HTag tag="h3">Помощь в выборе</HTag>
              <span>
                Не знаете какая модель вам подойдет?<br />
                Мы всегда поможем выбрать то, 
                что нужно вам и вашему ребенку
              </span>
            </li>
            <li className={styles.advantage}>
              <div className={styles.imgWrapper}>
                <Image src={'/icons/Delivery.svg'} width={50} height={50} alt="Лучшие предложения" />
              </div>
              <HTag tag="h3">Лучшие предложения</HTag>
              <span>В нашем каталоге вы точно найти что-то уникальное и неповторимое для своего ребенка</span>
            </li>
          </ul>
        </div>
      </section>
    )
}