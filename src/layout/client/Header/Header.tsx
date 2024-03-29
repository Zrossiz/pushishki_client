import { CategoryNavigation, Navigation } from '@/components/client';
import styles from './Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <div className={styles.logoCategoryWrapper}>
          <div className={styles.logoWrapper}>
            <Link href="/">
              <Image src="/Logo.png" width={148} height={80} alt="Логотип" />
            </Link>
          </div>
          <div className={styles.categoryNavWrapper}>
            <CategoryNavigation />
          </div>
        </div>
        <div className={styles.navWrapper}>
          <Navigation />
        </div>
      </div>
      <div className={styles.mobileHeaderWrapper}>
        <Link href='#' className={styles.phoneWrapper}>
          <Image src={'/icons/Phone.svg'} fill alt='Позвонить'/>
        </Link>
        <Link href="/" className={styles.logoWrapper}>
          <Image src="/Logo.png" fill alt='Пушишки' style={{ objectFit: 'contain' }} />
        </Link>
        <div className={styles.burgerWrapper}>
          <Image src="/icons/Burger.svg" fill alt='Открыть меню' />
        </div>
      </div>
    </header>
  );
};
