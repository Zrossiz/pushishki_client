import Image from 'next/image';
import styles from './WhatsApp.module.scss';

export const WhatsApp = () => {
  return (
    <div className={styles.wrapper}>
      <a href="https://wa.me/+79857660713" target="_blank">
        <Image src="/icons/WhatsApp.svg" height={30} width={30} alt="WhatsApp" />
      </a>
    </div>
  );
};
