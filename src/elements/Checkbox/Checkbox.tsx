import styles from './Checkbox.module.scss';
import { ICheckboxProps } from './Checkbox.props';

export const Checkbox = ({ name }: ICheckboxProps) => {
    return (
        <li className={styles.brandWrapper}>
            <label className={styles.label}>
                <input className={styles.input} type="checkbox" name="" id="" />
                <span>
                    {name}
                </span>
            </label>
        </li>
    )
}