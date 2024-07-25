import { useState } from 'react';
import styles from './Checkbox.module.scss';
import { ICheckboxProps } from './Checkbox.props';

export const Checkbox = ({ name, itemId, selectedItems, onChange }: ICheckboxProps) => {
  const checked = selectedItems && selectedItems.includes(itemId) ? true : false;

  const switchState = (id: number) => {
    if (checked) {
      onChange(selectedItems.filter((item) => item !== id));
    } else {
      onChange([...selectedItems, itemId]);
    }
  };

  return (
    <>
      <div className={styles.checkboxWrapper}>
        <label className={styles.label}>
          <input
            checked={checked}
            onChange={(e) => switchState(itemId)}
            className={styles.input}
            type="checkbox"
          />
          <span>{name}</span>
        </label>
      </div>
    </>
  );
};
