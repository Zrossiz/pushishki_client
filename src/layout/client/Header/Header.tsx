import { CategoryNavigation, Navigation } from '@/components/client';
import styles from './Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import cn from 'classnames';
import { MobileMenu } from '@/pageComponents';
import { AnimatePresence } from 'framer-motion';

export const Header = () => {
  const [open, setOpen] = useState<boolean>(false);

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
        <div className={cn(styles.burgerWrapper, {
          [styles.open]: open
        })} onClick={() => setOpen(!open)}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
      </div>
      <AnimatePresence>
        {open && <MobileMenu />}
      </AnimatePresence>
    </header>
  );
};
