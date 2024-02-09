import styles from './PriceFilter.module.scss';

export const PriceFilter = () => {
    return (
        <>
            <span className={styles.span}>Цена</span>
            <div className={styles.filter}>
                <div className={styles.inputWrapper}>
                    <div className={styles.placeholder}>
                        от
                    </div>
                    <input min={0} max={99999} type="number" />
                </div>
                <div className={styles.inputWrapper}>
                    <div className={styles.placeholder}>
                        до
                    </div>
                    <input min={0} max={99999} type="number" />
                </div>
            </div>
        </>
    )
}