import { motion } from 'framer-motion';
import styles from './MobileMenu.module.scss';
import Link from 'next/link';

export const MobileMenu = () => {
  return (
    <motion.div
      className={styles.wrapper}
      initial={{ height: 0 }}
      animate={{ height: '100vh' }}
      exit={{ height: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className={styles.titleWrapper}>Меню</div>
      <div className={styles.navWrapper}>
        <nav>
          <ul>
            <li>
              <Link href="/categories">Категории</Link>
            </li>
            <li>
              <Link href="/cart">Корзина</Link>
            </li>
            <li>
              <Link href="/favorites">Избранное</Link>
            </li>
            <li>
              <Link href="/contacts">Контакты</Link>
            </li>
            <li>
              <Link href="/search">Поиск</Link>
            </li>
          </ul>
        </nav>
      </div>
    </motion.div>
  );
};
