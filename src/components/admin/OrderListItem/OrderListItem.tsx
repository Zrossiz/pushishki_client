import { OrderListItemProps } from "./OrderListItem.props";
import styles from './OrderListItem.module.scss';
import { useState } from "react";
import { OrderInfo } from "..";

export const OrderListItem = ({ order }: OrderListItemProps) => {
    const dateArr: string[] = new Date(order.createdAt).toISOString().split('T');
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className={styles.itemWrapper}>
            {open && <OrderInfo setOpen={setOpen} order={order} date={dateArr}/>}
            <div className={styles.nameWrapper}>
                <span>{order.name} {order.lastname}</span>
            </div>
            <div className={styles.dateWrapper}>
                {dateArr[1].split('.')[0]} {dateArr[0]}
            </div>
            <div className={styles.aboutWrapper} onClick={() => setOpen(true)}>
                Подробнее
            </div>
        </div>
    )
};