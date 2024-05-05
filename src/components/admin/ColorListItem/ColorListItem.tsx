import { ColorListItemProps } from './ColorListItem.props';
import styles from './ColorListItem.module.scss';
import Image from 'next/image';
import { useState } from 'react';
import { DeleteItem } from '..';

export const ColorListItem = ({ color }: ColorListItemProps) => {
  const [deleteItem, setDeleteItem] = useState<boolean>(false);

  return (
    <div className={styles.itemWrapper}>
      {deleteItem && (
        <DeleteItem idOrSlug={color.id} entity={'color'} name={color.color} setOpen={setDeleteItem} />
      )}
      <div className={styles.colorWrapper} style={{ backgroundColor: color.color }}></div>
      <div className={styles.titleWrapper}>{color.color}</div>
      <div className={styles.deleteWrapper} onClick={() => setDeleteItem(true)}>
        <Image src={'/icons/Trash.svg'} width={24} height={28} alt="Удалить" />
      </div>
    </div>
  );
};
