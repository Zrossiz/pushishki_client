import Image from 'next/image';
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
          {item.name}
          <div className={cn(styles.checkbox, {
              [styles.active]: checked 
          })}>
            <Image src={"/icons/check.svg"} width={20} height={16} alt={"Выбрано"} />
          </div>
        </div>
    )
}