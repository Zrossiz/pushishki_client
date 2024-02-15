import styles from './Checkbox.module.scss';
import { ICheckboxProps } from './Checkbox.props';

export const Checkbox = ({ name, inStock, setInStock }: ICheckboxProps) => {
    return (
        <div className={styles.brandWrapper}>
            <label className={styles.label}>
                <input 
                    checked={inStock} 
                    onChange={(e) => setInStock(e.target.checked)}
                    className={styles.input} 
                    type="checkbox" 
                    name="" 
                    id="" 
                />
                <span>
                    {name}
                </span>
            </label>
        </div>
    )
}