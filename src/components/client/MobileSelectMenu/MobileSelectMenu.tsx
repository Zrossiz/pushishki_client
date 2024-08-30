import { MobileSelectMenuProps } from './MobileSelectMenu.props';
import styles from './MobileSelectMenu.module.scss';
import { useState } from 'react';
import { MobileSelectMenuListItem } from '..';

export const MobileSelectMenu = ({
  items,
  selectedItems,
  onChange,
  selectMenuName,
}: MobileSelectMenuProps) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      {open && (
        <div className={styles.listWrapper}>
          {Array.isArray(items) && items.map((item) => {
            return (
              <MobileSelectMenuListItem
                item={item}
                onChange={onChange}
                selectedItems={selectedItems}
              />
            )
          })}
        </div>
      )}
      <div onClick={() => setOpen(true)} className={styles.menuWrapper}>
        {selectMenuName}
      </div>
    </>
  );
};
