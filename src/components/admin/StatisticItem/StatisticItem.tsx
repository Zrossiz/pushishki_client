import { DurationSelect } from '@/elements';
import styles from './StatisticItem.module.scss';
import { IStatisticItemProps } from './StatisticItem.props';
import { useState } from 'react';

export const StatisticItem = ({
    name, 
    value,
    curValueDate,
    setDuration
}: IStatisticItemProps) => {
    const [openSelect, setOpenSelect] = useState<boolean>(false);

    return (
        <div className={styles.wrapper}>
            <div className={styles.nameSelectWrapper}>
                <div className={styles.nameWrapper}>{name}</div>
                <div className={styles.selectWrapper}>
                    <DurationSelect
                        isOpen={openSelect}                        
                        setOpen={setOpenSelect}
                        setDuration={setDuration}
                        curValue={curValueDate} 
                    />
                </div>
            </div>
            <div className={styles.valueWrapper}>
                <span>{value}</span>
            </div>
        </div>
    )
}