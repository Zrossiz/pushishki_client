import { OrderListItemProps } from "./OrderListItem.props";
import styles from './OrderListItem.module.scss';

export const OrderListItem = ({ order }: OrderListItemProps) => {
    const dateArr: string[] = new Date(order.createdAt).toISOString().split('T');
    return (
        <div className={styles.itemWrapper}>
            <div className={styles.nameWrapper}>
                <span>{order.name} {order.lastname}</span>
            </div>
            <div className={styles.dateWrapper}>
                {dateArr[0]} {dateArr[1].split('.')[0]}
            </div>
        </div>
    )
};