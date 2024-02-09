import styles from './MaxWeightFilter.module.scss';

export const MaxWeightFilter = () => {
    return (
        <>
            <span className={styles.span}>Максимальный вес</span>
            <div className={styles.filter}>
                <span>До</span>
                <input type="number" />
            </div>
        </>
    )
}