import { PriceFilter } from '@/components/client';
import styles from './MobileFilter.module.scss';
import { MobileFilterProps } from './MobileFilter.props';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const MobileFilter = ({ setOpen, priceFilterProps }: MobileFilterProps) => {
  return (
    <motion.div
      initial={{ y: '100vh' }}
      animate={{ y: 0 }}
      exit={{ y: '100vh' }}
      transition={{ duration: 0.4 }}
      className={styles.wrapper}
    >
      <div className={styles.header}>
        <div className={styles.title}>Фильтры</div>
        <div className={styles.close} onClick={() => setOpen(false)}>
          <Image src={'/icons/Close.svg'} fill alt="Закрыть" />
        </div>
      </div>
      <div className={styles.body}>
        <PriceFilter
          priceRangeFrom={priceFilterProps.priceRangeFrom}
          setPriceRangeFrom={priceFilterProps.setPriceRangeFrom}
          priceRangeTo={priceFilterProps.priceRangeTo}
          setPriceRangeTo={priceFilterProps.setPriceRangeTo}
        />
      </div>
    </motion.div>
  );
};
