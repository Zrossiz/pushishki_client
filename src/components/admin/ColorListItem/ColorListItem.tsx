import { ColorListItemProps } from './ColorListItem.props';
import styles from './ColorListItem.module.scss';
import Image from 'next/image';
import { useState } from 'react';
import { DeleteItem } from '..';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { FILESERVER_URL } = publicRuntimeConfig;

export const ColorListItem = ({ color }: ColorListItemProps) => {
  const [deleteItem, setDeleteItem] = useState<boolean>(false);

  return (
    <div className={styles.itemWrapper}>
      {deleteItem && (
        <DeleteItem
          idOrSlug={color.id}
          entity={'color'}
          name={color.title}
          setOpen={setDeleteItem}
        />
      )}
      {color.color ? (
        <div className={styles.colorWrapper} style={{ backgroundColor: color.color }}></div>
      ) : (
        <div className={styles.colorWrapper}>
          <Image src={`${FILESERVER_URL}/upload/${color.image}`} fill alt={color.title} />
        </div>
      )}
      <div className={styles.titleWrapper}>{color.title}</div>
      <div className={styles.deleteWrapper} onClick={() => setDeleteItem(true)}>
        <Image src={'/icons/Trash.svg'} width={24} height={28} alt="Удалить" />
      </div>
    </div>
  );
};
