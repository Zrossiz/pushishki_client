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
            <div className={styles.title}>Дополнительно</div>
            <ul className={styles.linksList}>
              <li className={styles.linkItem}>
                <Link href="/contacts">Контакты</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/contacts">О компании</Link>
              </li>
            </ul>
          </div>
          <div className={styles.forClients}>
            <div className={styles.title}>Клиентам</div>
            <ul className={styles.linksList}>
              <li className={styles.linkItem}>
                <Link href="/contacts">Доставка</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/contacts">Оплата</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/contacts">Возврат</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.contacts}>
          <a href="tel:+79857660713" className={styles.iconWrapper}>
            <Image src={'/icons/Phone.svg'} width={38} height={38} alt="Позвонить" />
          </a>
          <div className={styles.phoneWrapper}>
            <a href="">10:00 до 20:00</a>
            <a href="tel:+79857660713">+7 (985) 766-07-13</a>
          </div>
          <div className={styles.socialWrapper}>
            <a href="https://vk.com/club29256126" target='_blank'>
              <Image src={'/icons/Vk.svg'} height={56} width={56} alt="Вк" />
            </a>
            <a href="https://avito.ru/brands/pushishki" target='_blank'>
              <Image src={'/icons/Avito.svg'} height={34} width={34} alt="Авито" />
            </a>
            <a href="https://www.youtube.com/channel/UCJBDQZzSQ5XN-vBUJXO1DBw" target='_blank'>
              <Image src={'/icons/Youtube.svg'} height={36} width={48} alt="Youtube" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
