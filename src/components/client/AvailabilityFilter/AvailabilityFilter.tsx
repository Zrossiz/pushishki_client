import { Checkbox } from '@/elements';
import styles from './AvailabilityFilter.module.scss';
import { AvailabilityFilterProps } from './AvailabilityFilter.props';

export const AvailabilityFilter = ({ inStock, setInStock }: AvailabilityFilterProps) => {
  return (
    <>
      {/* <span className={styles.span}>Наличие</span>
      <div className={styles.filter}>
        <div className={styles.list}>
          <Checkbox inStock={inStock} setInStock={setInStock} name="В наличии" />
        </div>
      </div> */}
    </>
  );
};
