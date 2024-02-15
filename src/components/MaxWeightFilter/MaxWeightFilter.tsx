import styles from './MaxWeightFilter.module.scss';
import { MaxWeightFilterProps } from './MaxWeightFilter.props';

export const MaxWeightFilter = ({ maxLoad, setMaxLoad }: MaxWeightFilterProps) => {
    return (
        <>
            <span className={styles.span}>Максимальный вес</span>
            <div className={styles.filter}>
                <span>До</span>
                <input value={maxLoad} onChange={(e) => setMaxLoad(+e.target.value)} type="number" />
            </div>
        </>
    )
}