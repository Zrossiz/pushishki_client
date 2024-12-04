import styles from './DurationSelect.module.scss';
import { IDurationSelectProps } from './DurationSelect.props';

export const DurationSelect = ({
    curValue, 
    isOpen,
    setDuration,
    setOpen,
}: IDurationSelectProps) => {
    const values = ["день", "неделя", "месяц", "год"]

    const selectValue = (value: string) => {
        setDuration(value)
        setOpen(false)
    }

    return (
        <>
            <div className={styles.wrapper} onClick={() => setOpen(true)}>
                <div className={styles.value}>
                    {curValue}
                </div>
            </div>
            {isOpen && (
                <div className={styles.selectWrapper}>
                    <ul>
                        {values.map((item) => {
                            return (
                                <li onClick={() => selectValue(item)}>{item}</li>
                            )
                        })}
                    </ul>
                </div>
            )}
        </>
    )
}