import { Checkbox } from "@/elements";
import styles from './AvailabilityFilter.module.scss';

export const AvailabilityFilter = () => {
    return (
        <>
            <span className={styles.span}>Бренд</span>
            <div className={styles.filter}>
                <div className={styles.list}>
                    <Checkbox name="В наличии" />
                </div>
            </div>
        </> 
    )
}