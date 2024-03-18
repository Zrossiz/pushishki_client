import Image from 'next/image';
import styles from './ToTop.module.scss';
import cn from 'classnames';
import { useScrollY } from '@/hooks';

export const ToTop = () => {
  const y = useScrollY();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div
      className={cn(styles.wrapper, {
        [styles.hidden]: y < 200,
      })}
      onClick={() => scrollToTop()}
    >
      <Image src="/icons/TopArrow.svg" width={30} height={30} alt="Наверх" />
    </div>
  );
};
