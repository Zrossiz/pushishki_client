import { MobileSelectMenu, PriceFilter } from '@/components/client';
import styles from './MobileFilter.module.scss';
import { MobileFilterProps } from './MobileFilter.props';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { LinkButton } from '@/elements';
import { CheckboxFilter } from '@/components/client';

export const MobileFilter = ({
  setOpen,
  priceFilterProps,
  brandFilter,
  setCatalogFilter,
  ageFilter,
  voltageFilter,
  driveFilter,
}: MobileFilterProps) => {
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
        <div className={styles.filterWrapper}>
          <MobileSelectMenu
            selectMenuName={'Возраст'}
            selectedItems={ageFilter.selectedAges}
            items={ageFilter.ages}
            onChange={ageFilter.setAges}
          />
          <MobileSelectMenu
            selectMenuName={'Привод'}
            selectedItems={driveFilter.selectedDrives}
            items={driveFilter.drives}
            onChange={driveFilter.setDrives}
          />
          <MobileSelectMenu
            selectMenuName={'Вольтаж'}
            selectedItems={voltageFilter.selectedVoltages}
            items={voltageFilter.voltages}
            onChange={voltageFilter.setVoltages}
          />
          <MobileSelectMenu
            selectMenuName={'Бренд'}
            selectedItems={brandFilter.selectedBrands}
            items={brandFilter.brands}
            onChange={brandFilter.setBrands}
          />
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
