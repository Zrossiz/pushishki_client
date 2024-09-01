import Link from 'next/link';
import styles from './MobileNavigation.module.scss';
import Image from 'next/image';

export const MobileNavigation = () => {
  return (
    <div className={styles.wrapper}>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <div className={styles.icon}>
                <Image width={30} height={20} src="/MobileNavLogo.svg" alt="Главная" />
              </div>
              <div className={styles.desc}>Главная</div>
            </Link>
          </li>
          <li>
            <Link href="/categories">
              <div className={styles.icon}>
                <Image
                  width={20}
                  height={20}
                  src="/icons/MobileNavCategories.svg"
                  alt="Категории"
                />
              </div>
              <div className={styles.desc}>Категории</div>
            </Link>
          </li>
          <li>
            <Link href="/cart">
              <div className={styles.icon}>
                <Image width={20} height={20} src="/icons/MobileCart.svg" alt="Корзина" />
              </div>
              <div className={styles.desc}>Корзина</div>
            </Link>
          </li>
          <li>
            <Link href="/favorites">
              <div className={styles.icon}>
                <Image width={20} height={20} src="/icons/MobileFavorites.svg" alt="Избранное" />
              </div>
              <div className={styles.desc}>Избранное</div>
            </Link>
          </li>
          <li>
            <Link href="/contacts">
              <div className={styles.icon}>
                <Image width={20} height={20} src="/icons/MobileNavContacts.svg" alt="Контакты" />
              </div>
              <div className={styles.desc}>Контакты</div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
