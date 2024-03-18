import Image from 'next/image';
import Link from 'next/link';
import styles from './WhatsApp.module.scss';

export const WhatsApp = () => {
  return (
    <div className={styles.wrapper}>
      <Link href="#">
        <Image src="/icons/WhatsApp.svg" height={30} width={30} alt="WhatsApp" />
      </Link>
    </div>
  );
};
