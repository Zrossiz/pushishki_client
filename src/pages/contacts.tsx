import { PageTitle, WhyChoose } from '@/pageComponents';
import styles from '../styles/client/Contacts.module.scss';
import { HTag } from '@/elements';
import Image from 'next/image';
import { Layout } from '@/layout/clientLayout/Layout';

const ContactsPage = () => {
  return (
    <Layout title="Контакты | Пушишки">
      <>
        <PageTitle
          title="Контакты"
          breadcrumbs={[
            {
              name: 'Главная',
              path: '/'
            }
          ]}
        />
        <section className={styles.contactsSection}>
          <div className={styles.contactsWrapper}>
            <div className={styles.titleWrapper}>
              <HTag tag="h2">Шоурум в Москве</HTag>
            </div>
            <div className={styles.addressWrapper}>
              г. Москва, улица Вилиса Лациса, 30 с2Москва
              <br />
              Ежедневно с 10:00 до 20:00
            </div>
            <div className={styles.phoneWrapper}>
              <a href="">8 495-766-07-13</a>
            </div>
            <div className={styles.mailWrapper}>
              <a href="">info@pushishki.ru</a>
            </div>
            <div className={styles.callUs}>
              Перед посещением шоурума, свяжитесь с нами для 
              <br />
              уточнения наличия интересующего вас товара.
            </div>
            <div className={styles.happyWrapper}>
              <div>
                <Image
                  src={'/icons/Happy.svg'}
                  width={42}
                  height={42}
                  alt="Более 120 довольных клиентов"
                />
              </div>
              <div className={styles.descWrapper}>
                <div className={styles.counter}>Более 120 довольных клиентов</div>
                <div className={styles.conusltWrapper}>Проконсультируем и поможем с выбором</div>
              </div>
            </div>
          </div>
          <div className={styles.mapWrapper}>
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A9851e814dd4a7db8fa6c766b41f911822c247c52a643e0e2db22f970cdf2ffa8&amp;source=constructor"
              width="100%"
              height="720"
              frameBorder="0"
            ></iframe>
          </div>
        </section>
        <section className={styles.requisitesSection}>
          <div className={styles.titleWrapper}>
            <div className={styles.title}>
              <HTag tag="h2">Реквизиты</HTag>
            </div>
            <div className={styles.desc}>Общество с ограниченной ответственностью «Пушишки»</div>
          </div>
          <ul className={styles.list}>
            <li>
              <div className={styles.title}>Юридический адрес</div>
              <div className={styles.desc}>
                125480, г. Москва, улица
                <br />
                Вилиса Лациса,
                <br />
                30 с2Москва
              </div>
            </li>
            <li>
              <div className={styles.title}>Юридический адрес</div>
              <div className={styles.desc}>
                125480, г. Москва, улица
                <br />
                Вилиса Лациса,
                <br />
                30 с2Москва
              </div>
            </li>
          </ul>
        </section>
        <WhyChoose />
      </>
    </Layout>
  );
};

export default ContactsPage;
