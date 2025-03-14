import styles from '../styles/client/Home.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { HTag } from '@/elements';
import cn from 'classnames';
import { Form, Questions, Quiz, Slider, WhyChoose } from '@/pageComponents';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { getBestsellers, getCategories, getNewProducts } from '@/api';
import { MainPageProps } from '@/types';
import { Layout } from '@/layout/client/Layout';
import Snowfall from 'react-snowfall';

const Home = ({ bestSellers, newProducts, categories }: MainPageProps) => {
  const mainTitleRef = useRef(null);
  const mainTitleRefIsInView = useInView(mainTitleRef, { once: true });

  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });
  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true });
  const ref3 = useRef(null);
  const isInView3 = useInView(ref3, { once: true });
  const ref4 = useRef(null);
  const isInView4 = useInView(ref4, { once: true });

  const infoTitleRef = useRef(null);
  const infoTitleRefIsInView = useInView(infoTitleRef, { once: true });

  return (
    <Layout
      title="Главная | Пушишки"
      description="В магазине Pushishki вы сможете купить новые и качественные детские электромобили, а так же другой  детский транспорт с гарантией и по лучшей цене."
      keyWords="электромобиль детский, купить детский электромобиль, электромобиль детский с пультом, аккумулятор для детского электромобиля, магазин детских электромобилей, электромобиль детский двухместный, детские электромобили в москве,детский мотоцикл, купить детский мотоцикл, детский мотоцикл на аккумуляторе, детский квадроцикл, купить детский квадроцикл, квадроцикл детский электрический, квадроцикл детский бензиновый, толокар детский, веломобиль детскийсамокат детский, самокат трехколесный детский, самокат детский двухколесный, беговел, беговелы, беговел купить, беговел для детей"
    >
      <>
        {/* <Snowfall
            snowflakeCount={100}
            color="white"
            style={{
              position: 'fixed',
              width: '100vw',
              height: '100vh',
              zIndex: 1000
            }}
          /> */}
        <section className={styles.firstDisplay}>
          <div className={styles.backgroundImgWrapper}>
            <div className={styles.backgroundImg}>
              <Image src="/main.webp" layout="fill" objectFit="cover" alt="Главный фон" priority />
            </div>
          </div>
          <div className={styles.titleWrapper}>
            <motion.h1
              ref={mainTitleRef}
              transition={{ delay: 0.4, duration: 1 }}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: mainTitleRefIsInView ? 0 : 30, opacity: mainTitleRefIsInView ? 1 : 0 }}
            >
              Доставка электромоб
              <span>и</span>
              лей
              <br />
              <span>и</span>&nbsp;радости ребенку
            </motion.h1>
          </div>
          <div className={styles.chooseWrapper}>
            <div className={styles.categoriesWrapper}>
              <Link href="/categories/elektromobili" className={styles.category}>
                Электромобили
              </Link>
              <Link href="/categories/mototehnika" className={styles.category}>
                Мототехника
              </Link>
              <Link href="/categories/spectehnika" className={styles.category}>
                Спецтехника
              </Link>
              <Link href="/categories" className={styles.category}>
                И многое другое
              </Link>
            </div>
            <div className={styles.chooseCategoryWrapper}>
              <Link href="/categories" className={styles.viewCategories}>
                Подобрать
                <br />
                электромобиль
                <div className={styles.iconWrapper}>
                  <Image
                    src="/icons/Settings.svg"
                    width={50}
                    height={50}
                    alt="Категории"
                    loading="lazy"
                  />
                </div>
              </Link>
            </div>
          </div>
        </section>
        <Slider title="Новинки" products={newProducts} />
        <section className={styles.advantages}>
          <div className={styles.imgWrapper}>
            <Image
              fill
              style={{ objectFit: 'cover' }}
              src={'/mgu.webp'}
              alt="Индивидуальный подход"
              loading="lazy"
            />
          </div>
          <div className={styles.advantagesWrapper}>
            <motion.div
              ref={ref4}
              transition={{ delay: 0.4, duration: 1 }}
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: isInView4 ? 0 : -30, opacity: isInView4 ? 1 : 0 }}
              className={styles.titleWrapper}
            >
              <HTag tag="h2">
                Доставка в удобное
                <br />
                для вас время!
              </HTag>
            </motion.div>
            <div className={styles.descWrapper}>
              <ul>
                <motion.li
                  ref={ref1}
                  transition={{ delay: 0.6, duration: 1 }}
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: isInView1 ? 0 : 30, opacity: isInView1 ? 1 : 0 }}
                  className={styles.itemWrapper}
                >
                  <HTag tag="h3">
                    Гибкое время <br /> доставки
                  </HTag>
                  <span className={styles.span}>
                    Поможем сделать сюрприз вашему
                    <br />
                    ребенку с доставкой в удобное для вас время
                  </span>
                </motion.li>
                <motion.li
                  className={styles.itemWrapper}
                  ref={ref2}
                  transition={{ delay: 0.8, duration: 1 }}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: isInView2 ? 0 : -30, opacity: isInView2 ? 1 : 0 }}
                >
                  <HTag tag="h3">Покупайте только лучшее</HTag>
                  <span className={styles.span}>
                    Только у нас вы сможете увидеть уникальные марки автомобилей и другой детской
                    техники на любой вкус
                  </span>
                </motion.li>
                <motion.li
                  className={styles.itemWrapper}
                  ref={ref3}
                  transition={{ delay: 1, duration: 1 }}
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: isInView3 ? 0 : 30, opacity: isInView3 ? 1 : 0 }}
                >
                  <HTag tag="h3">Изучите наш большой ассортимент</HTag>
                  <span className={styles.span}>
                    Посетите наш шоурум находящийся по адресу ул. Вилиса Лациса 30, стр. 2 - и
                    выберите для своего ребенка лучший подарок. В наличии всегда более 150 собранных
                    моделей
                  </span>
                </motion.li>
              </ul>
            </div>
            <a href="#map" className={styles.iconWrapper}>
              <Image
                src={'/icons/TopArrow.svg'}
                width={42}
                height={42}
                alt="Контакты"
                loading="lazy"
              />
            </a>
          </div>
        </section>
        <Slider title="Лучшие предложения" products={bestSellers} />
        <WhyChoose />
        <Quiz categories={categories?.data} />
        <Questions />
        <section className={styles.map} id="map">
          <div className={styles.infoWrapper}>
            <div className={styles.titleDescWrapper}>
              <motion.div
                ref={infoTitleRef}
                transition={{ delay: 0.6, duration: 1 }}
                initial={{ x: 30, opacity: 0 }}
                animate={{
                  x: infoTitleRefIsInView ? 0 : 30,
                  opacity: infoTitleRefIsInView ? 1 : 0,
                }}
                className={styles.titleWrapper}
              >
                <HTag tag="h2">
                  Протестируйте <br /> перед заказом
                </HTag>
              </motion.div>
              <div className={styles.descWrapper}>
                <span>
                  Приходите в наш шоурум, мы поможем <br />
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
                  <a target="_blank" href="https://yandex.ru/maps/-/CDbFZ-y0">
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
                  <a
                    href="https://www.youtube.com/channel/UCJBDQZzSQ5XN-vBUJXO1DBw"
                    target="_blank"
                  >
                    Youtube
                  </a>
                  <a href="https://vk.com/club29256126" target="_blank">
                    Вконтакте
                  </a>
                  <a href="https://www.avito.ru/brands/pushishki" target="_blank">
                    Авито
                  </a>
                  <a href="mailto:pushishki@mail.ru" target="_blank">
                    E-mail
                  </a>
                </div>
                <div className={styles.phoneWrapper}>
                  <a href="tel:+79857660713" target="_blank">
                    +7 495-766-07-13
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.mapWrapper}>
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A9851e814dd4a7db8fa6c766b41f911822c247c52a643e0e2db22f970cdf2ffa8&amp;source=constructor"
              width="100%"
              height="720"
              frameBorder="0"
              loading="lazy"
            ></iframe>
          </div>
        </section>
        <Form />
      </>
    </Layout>
  );
};

export default Home;

export const getStaticProps = async () => {
  const [bestSellers, newProducts, categories] = await Promise.all([
    getBestsellers(),
    getNewProducts(),
    getCategories(),
  ]);

  return {
    props: {
      bestSellers,
      newProducts,
      categories,
    },
    revalidate: 30,
  };
};
