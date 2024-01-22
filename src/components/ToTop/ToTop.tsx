import Image from 'next/image';
import styles from './ToTop.module.scss'

export const ToTop = () => {
      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };
    return (
        <div className={styles.wrapper}>
            <Image src="/icons/TopArrow.svg" width={42} height={42} alt="Наверх" />
        </div>
    )
}