import Link from 'next/link';
import styles from './Menu.module.scss';

export const Menu = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.navWrapper}>
        <Link href={'/authorization/admin/product'}>Товары</Link>
        <Link href={'/authorization/admin/basket'}>Заказы</Link>
        <Link href={'/authorization/admin/generate-file'}>Документы</Link>
      </div>
    </div>
  );
};
