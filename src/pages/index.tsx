import { withLayout } from "@/layout/Layout";
import styles from '../styles/Home.module.scss';
import Link from "next/link";
import { Slider } from "@/components";
import Image from "next/image";
import { HTag } from "@/elements";
import cn from 'classnames';

const Home = () => {
  return (
    <>
      <section className={styles.firstDisplay}>
        <div className={styles.backgroundImgWrapper}>
          <div className={styles.backgroundImg}>
            <Image src="/mainBg.png" fill alt="Главный фон"/>
          </div>
        </div>
        <div className={styles.titleWrapper}>
          <h1>
            Доставка&nbsp;электромоб
            <span>и</span>
            лей
            <br />
            <span>и</span>&nbsp;радости ребенку
          </h1>
        </div>
        <div className={styles.chooseWrapper}>
          <div className={styles.categoriesWrapper}>
            <Link href="/categories/spectehnika" className={styles.category}>
              Спецтехника
            </Link>
            <Link href="/categories/velotehnika" className={styles.category}>
              Велотехника
            </Link>
            <Link href="/categories/electocary" className={styles.category}>
              Электрокары
            </Link>
            <Link href="/categories" className={styles.category}>
              И многое другое
            </Link>
          </div >
          <div className={styles.chooseCategoryWrapper}>
            <Link href="/categories" className={styles.viewCategories}>
              Подобрать
              <br />
              электромобиль
              <div className={styles.iconWrapper}>
                <Image src="/icons/Settings.svg" width={30} height={30} alt="Категории" />
              </div>
            </Link>
          </div>
        </div >
      </section >
      <section className={styles.slider}>
        <Slider title="Новинки" />
      </section>
      <section className={styles.advantages}>
        <div className={styles.imgWrapper}>
          <Image fill src={'/mgu.png'} alt="Индивидуальный подход" />
        </div>
        <div className={styles.advantagesWrapper}>
          <div className={styles.titleWrapper}>
            <HTag tag="h2">
              Доставка в удобное
              <br />
              для вас время!
             </HTag>
          </div>
          <div className={styles.descWrapper}>
            <ul>
              <li className={styles.itemWrapper}>
                <HTag tag="h3">
                  Гибкое время <br /> доставки
                </HTag>
                <span className={styles.span}>
                  Поможем сделать сюрприз вашему 
                  <br />
                  ребенку с доставкой в удобное для вас время
                </span>
              </li>
              <li className={cn(styles.itemWrapper, styles.white)}>
                <HTag tag="h3">
                  Гибкое время <br /> доставки
                </HTag>
                <span className={styles.span}>
                  Поможем сделать сюрприз вашему 
                  <br />
                  ребенку с доставкой в удобное для вас время
                </span>
              </li>
              <li className={cn(styles.itemWrapper, styles.white)}>
                <HTag tag="h3">
                  Гибкое время <br /> доставки
                </HTag>
                <span className={styles.span}>
                  Поможем сделать сюрприз вашему 
                  <br />
                  ребенку с доставкой в удобное для вас время
                </span>
              </li>
            </ul>
          </div>
          <a href="#" className={styles.iconWrapper}>
            <Image src={'/icons/TopArrow.svg'} width={42} height={42} alt="Контакты" />
          </a>
        </div>
      </section>
      <section className={styles.slider}>
        <Slider title="Лучшие предложения" />
      </section>
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
                <Image src={'/icons/Delivery.svg'} width={50} height={50} alt="Быстрая доставка" />
              </div>
              <HTag tag="h3">Быстрая доставка</HTag>
              <span>Доставим вам товар в <br /> ближайшее время после заказа</span>
            </li>
            <li className={styles.advantage}>
              <div className={styles.imgWrapper}>
                <Image src={'/icons/Delivery.svg'} width={50} height={50} alt="Быстрая доставка" />
              </div>
              <HTag tag="h3">Быстрая доставка</HTag>
              <span>Доставим вам товар в <br /> ближайшее время после заказа</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default withLayout(Home)
