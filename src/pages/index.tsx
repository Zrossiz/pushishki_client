import { withLayout } from "@/layout/Layout";
import styles from '../styles/Home.module.scss';
import Link from "next/link";
import { Slider } from "@/components";
import Image from "next/image";

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
      <section className={styles.newProducts}>
        <Slider />
      </section>
    </>
  );
}

export default withLayout(Home)
