import { withLayout } from "@/layout/Layout";
import styles from '../styles/Home.module.scss';
import Link from "next/link";
import Image from "next/image";
import { HTag } from "@/elements";
import cn from 'classnames';
import { inView, motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Questions, Quiz, Slider } from "@/pageComponents";

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
                <Image src="/icons/Settings.svg" width={50} height={50} alt="Категории" />
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
                <HTag tag="h3" color="white">
                  Гибкое время <br /> доставки
                </HTag>
                <span className={styles.span}>
                  Поможем сделать сюрприз вашему 
                  <br />
                  ребенку с доставкой в удобное для вас время
                </span>
              </li>
              <li className={cn(styles.itemWrapper, styles.white)}>
                <HTag tag="h3" color="white">
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
      <Quiz />
      <Questions />
      <section className={styles.map}>
        <div className={styles.infoWrapper}>
          <div className={styles.titleDescWrapper}>
            <div className={styles.titleWrapper}>
              <HTag tag="h2">Протестируйте <br /> перед заказом</HTag>
            </div>
            <div className={styles.descWrapper}>
              <span>
                Приходите в наш шоу-рум, мы поможем <br />
                подобрать электрокар и расскажем про все <br />
                нюансы использования
              </span>
            </div>
          </div>
          <div className={styles.contactsWrapper}>
            <div className={styles.addressWrapper}>
              <div className={styles.titleWrapper}>
                <HTag tag="h3">Москва</HTag>
              </div>
              <div className={styles.address}>
                <a target="_blank" href="https://yandex.ru/maps/-/CDBmu-9y">
                  ул. Вилиса Лациса, 30 с2 <br />
                </a>
              </div>
              <div className={styles.workingHoursWrapper}>
                <span>ПН - ВС: 10:00 - 20:00</span>
              </div>
            </div>
            <div className={styles.socialWrapper}>
              <div className={styles.titleWrapper}>
                <HTag tag="h3">Связаться с нами</HTag>
              </div>
              <div className={styles.linksWrapper}>
                <a href="" target="_blank">Youtube</a>
                <a href="" target="_blank">Вконтакте</a>
                <a href="" target="_blank">Авито</a>
                <a href="" target="_blank">E-mail</a>
              </div>
              <div className={styles.phoneWrapper}>
                <a href="" target="_blank">+7 495-766-07-13</a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mapWrapper}>
          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A9851e814dd4a7db8fa6c766b41f911822c247c52a643e0e2db22f970cdf2ffa8&amp;source=constructor" width="100%" height="720" frameBorder="0"></iframe>
        </div>
      </section>
    </>
  );
}

export default withLayout(Home)
