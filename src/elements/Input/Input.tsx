import styles from './Input.module.scss';
import { InputProps } from './Input.props';

export const Input = ({ placeholder, value, onChange }: InputProps) => {
    return (
        <input 
            className={styles.input} 
            value={value} 
            type="text" 
            placeholder={placeholder} 
            onChange={(e) => onChange(e.target.value)}
        />
    )
}