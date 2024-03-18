import { HTag } from '@/elements';
import styles from './Footer.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.titleBlock}>
        <div className={styles.titleWrapper}>
          Подарите счастье <br /> своему ребенку
        </div>
        <div className={styles.descWrapper}>
          <span>
            Оформите заявку на любой товар в каталоге.
            <br />
            Остальное мы сделаем за вас!
          </span>
        </div>
      </div>
      <div className={styles.contactsWrapper}>
        <div className={styles.linksWrapper}>
          <div className={styles.additionally}>
            <HTag tag="h3">Дополнительно</HTag>
            <ul className={styles.linksList}>
              <li className={styles.linkItem}>
                <Link href="#">Контакты</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="#">О компании</Link>
              </li>
            </ul>
          </div>
          <div className={styles.forClients}>
            <HTag tag="h3">Клиентам</HTag>
            <ul className={styles.linksList}>
              <li className={styles.linkItem}>
                <Link href="#">Доставка</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="#">Оплата</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="#">Возврат</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.contacts}>
          <div className={styles.iconWrapper}>
            <Image src={'/icons/Phone.svg'} width={38} height={38} alt="Позвонить" />
          </div>
          <div className={styles.phoneWrapper}>
            <a href="">10:00 до 20:00</a>
            <a href="">8 (495) 766-07-13</a>
          </div>
          <div className={styles.socialWrapper}>
            <a href="">
              <Image src={'/icons/Vk.svg'} height={56} width={56} alt="Вк" />
            </a>
            <a href="">
              <Image src={'/icons/Avito.svg'} height={34} width={34} alt="Авито" />
            </a>
            <a href="">
              <Image src={'/icons/Youtube.svg'} height={36} width={48} alt="Youtube" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
