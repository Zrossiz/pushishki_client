import { ICheckboxFilterProps } from './CheckboxFilter.props';
import styles from './CheckboxFilter.module.scss';
import { Checkbox } from '@/elements';
import { useState } from 'react';

export const CheckboxFilter = ({
  items,
  selectedItems,
  checkBoxFilterName,
  onChange,
}: ICheckboxFilterProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const selectAll = () => {
    if (items) {
      const itemsIds = items.map((item) => item.id);
      onChange(itemsIds);
    }
  };
  return (
    <>
      <span className={styles.span}>{checkBoxFilterName}</span>
      <div className={styles.filter}>
        <div className={styles.list}>
          {open && items && items.length > 0
            ? items.map((item: any) => {
                return (
                  <Checkbox
                    key={item.id}
                    name={item.name}
                    itemId={item.id}
                    selectedItems={selectedItems}
                    onChange={onChange}
                  />
                );
              })
            : items &&
              items.slice(0, 4).map((item: any) => {
                return (
                  <Checkbox
                    key={item.id}
                    name={item.name}
                    itemId={item.id}
                    selectedItems={selectedItems}
                    onChange={onChange}
                  />
                );
              })}
        </div>
        <div className={styles.selectAll}>
          <div onClick={selectAll} className={styles.btn}>
            Выбрать все
          </div>
        </div>
        {items && items?.length && items?.length >= 4 ? (
          <div className={styles.openAll} onClick={() => setOpen(!open)}>
            {open ? 'Скрыть' : 'Показать'}
          </div>
        ) : null}
      </div>
    </>
  );
};
