import styles from './Checkbox.module.scss';
import { ICheckboxProps } from './Checkbox.props';

export const Checkbox = ({
  name,
  itemId,
  selectedItems,
  onChange,
}: ICheckboxProps) => {

  return (
    <>
      <div className={styles.checkboxWrapper}>
        <label className={styles.label}>
          <input
            checked={selectedItems && itemId in selectedItems ? true : false}
            onChange={(e) => onChange([...selectedItems, itemId])}
            className={styles.input}
            type="checkbox"
          />
          <span>{name}</span>
        </label>
      </div>
    </>
  );
};
