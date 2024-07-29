import { AvailabilityFilter, PriceFilter } from '@/components/client';
import styles from './MobileFilter.module.scss';
import { MobileFilterProps } from './MobileFilter.props';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { LinkButton } from '@/elements';

export const MobileFilter = ({
  setOpen,
  priceFilterProps,
  brandFilter,
  setCatalogFilter,
}: MobileFilterProps) => {
  return (
    <motion.div
      initial={{ y: '100vh' }}
      animate={{ y: 0 }}
      exit={{ y: '100vh' }}
      transition={{ duration: 0.4 }}
      className={styles.wrapper}>
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
        <div className={styles.filterWrapper}>
          <PriceFilter
            priceRangeFrom={priceRangeFrom}
            setPriceRangeFrom={setPriceRangeFrom}
            priceRangeTo={priceRangeTo}
            setPriceRangeTo={setPriceRangeTo}
          />
        </div>
        <div className={styles.filterWrapper}>
          {age?.length && age?.length > 0 && (
            <CheckboxFilter
              checkBoxFilterName="Возраст"
              selectedItems={selectedAges}
              items={age}
              onChange={setSelectedAges}
            />
          )}
        </div>
        <div className={styles.filterWrapper}>
          {drives?.length && drives?.length > 0 && (
            <CheckboxFilter
              checkBoxFilterName="Привод"
              selectedItems={selectedDrives}
              items={drives}
              onChange={setSelectedDrives}
            />
          )}
        </div>
        <div className={styles.filterWrapper}>
          {voltage?.length && voltage?.length > 0 && (
            <CheckboxFilter
              checkBoxFilterName="Вольтаж"
              selectedItems={selectedVoltages}
              items={voltage}
              onChange={setSelectedVoltages}
            />
          )}
        </div>
        <div className={styles.filterWrapper}>
          {brands?.length && brands?.data.length > 0 && (
            <CheckboxFilter
              checkBoxFilterName="Бренды"
              selectedItems={selectedBrands}
              items={Array.isArray(brands?.data) && brands?.data}
              onChange={setSelectedBrands}
            />
          )}
        </div>
        <div className={styles.send}>
          <LinkButton element="button" onClick={() => setCatalogFilter()}>
            Показать
          </LinkButton>
        </div>
      </div>
    </motion.div>
  );
};
