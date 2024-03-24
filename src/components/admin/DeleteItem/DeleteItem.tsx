import { DeleteItemProps } from './DeleteItem.props';
import styles from './Delete.module.scss';
import { HTag } from '@/elements';

export const DeleteItem = ({ id }: DeleteItemProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.bg}></div>
      <div className={styles.deleteForm}>
        <HTag tag='h3'>Вы действительно хотите удалить элемент?</HTag>
        <div className={styles.buttonsWrapper}>
          <div className={styles.close}>Отменить</div>
          <div className={styles.confirm}>Удалить</div>
        </div>
      </div>
    </div>
  );
};
