import { CategoryNavigation, Navigation } from '@/components/clientComponents';
import styles from './Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <header>
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
    </header>
  );
};
