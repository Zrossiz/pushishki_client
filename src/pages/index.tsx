import { withLayout } from "@/layout/Layout";
import styles from '../styles/Home.module.scss';


const Home = () => {
  return (
    <>
      <section className={styles.firstDisplay}>
        <div className={styles.backgroundImgWrapper}>
          <div className={styles.backgroundImg}></div>
        </div>
        <div className={styles.titleWrapper}>
          <h1>
            Доставка электромоб
            <span>и</span>
            лей
            <br />
            <span>и</span> радост
            <span>и</span> ребенку
          </h1>
        </div>
      </section>
    </>
  );
}

export default withLayout(Home)
