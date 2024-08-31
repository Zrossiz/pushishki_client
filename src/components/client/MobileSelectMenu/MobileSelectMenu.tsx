import { MobileSelectMenuProps } from './MobileSelectMenu.props';
import styles from './MobileSelectMenu.module.scss';
import { useState } from 'react';
import { MobileSelectMenuListItem } from '..';
import Image from 'next/image';

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
          <div className={styles.close} onClick={() => setOpen(false)}>
            <Image src={'/icons/Close.svg'} fill alt="Закрыть" />
          </div>
          <div className={styles.title}>{selectMenuName}</div>
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
