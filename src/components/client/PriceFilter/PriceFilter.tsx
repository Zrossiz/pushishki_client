import styles from './PriceFilter.module.scss';
import { IPriceFilterProps } from './PriceFilter.props';

export const PriceFilter = ({
  priceRangeFrom,
  setPriceRangeFrom,
  priceRangeTo,
  setPriceRangeTo,
}: IPriceFilterProps) => {
  return (
    <>
      <span className={styles.span}>Цена</span>
      <div className={styles.filter}>
        <div className={styles.inputWrapper}>
          <div className={styles.placeholder}>от</div>
          <input
            min={0}
            max={99999}
            type="number"
            value={priceRangeFrom}
            onChange={(e) => setPriceRangeFrom(e)}
          />
        </div>
        <div className={styles.inputWrapper}>
          <div className={styles.placeholder}>до</div>
          <input
            min={0}
            max={99999}
            type="number"
            value={priceRangeTo && priceRangeTo <= 0 ? 0 : priceRangeTo}
            onChange={(e) => setPriceRangeTo(e)}
          />
        </div>
      </div>
    </>
  );
};
