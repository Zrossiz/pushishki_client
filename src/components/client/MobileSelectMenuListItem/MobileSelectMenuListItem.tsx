import { useState } from 'react';
import styles from './MobileSelectMenuListItem.module.scss';
import { MobileSelectMenuListItemProps } from './MobileSelectMenuListItem.props';
import cn from 'classnames';


export const MobileSelectMenuListItem = ({
    onChange, 
    selectedItems, 
    item
}: MobileSelectMenuListItemProps) => {
    const checked = selectedItems && selectedItems.includes(item.id) ? true : false;

    const switchState = (id: number) => {
      if (checked) {
        onChange(selectedItems.filter((item) => item !== id));
      } else {
        onChange([...selectedItems, item.id]);
      }
    };

    return (
        <div
            onClick={() => switchState(item.id)} 
            className={styles.itemWrapper}
        >   
            <div className={cn(styles.checkbox, {
                [styles.active]: checked 
            })}>Добавлено</div>
            {item.name}
        </div>
    )
}