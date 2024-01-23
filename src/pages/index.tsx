import { withLayout } from "@/layout/Layout";
import styles from '../styles/Home.module.scss';
import Image from "next/image";


const Home = () => {
  return (
    <>
      <section className={styles.firstDisplay}>
        <div className={styles.backgroundImgWrapper}>
          <div className={styles.backgroundImg}></div>
        </div>
        <div>title</div>
      </section>
    </>
  );
}

export default withLayout(Home)
