import { CategoryNavigation, Navigation } from '@/components';
import styles from './Header.module.scss';
import Image from 'next/image';

export const Header = () => {
    return (
        <header>
            <div className={styles.headerWrapper}>
                <div className={styles.logoWrapper}>
                    <Image src="/Logo.svg" width={188} height={42} alt="Логотип" />
                </div>
                <div className={styles.categoryNavWrapper}>
                    <CategoryNavigation />
                </div>
                <div className={styles.navWrapper}>
                    <Navigation />
                </div>
            </div>
        </header>
    )
}