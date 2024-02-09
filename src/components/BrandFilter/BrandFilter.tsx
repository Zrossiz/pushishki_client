import { IBrandWithLength } from '@/types';
import styles from './BrandFilter.module.scss';
import { IBrandFilterProps } from './BrandFilter.props';

export const BrandFilter = ({ brands }: IBrandFilterProps) => {
    return (
        <>
            <span className={styles.span}>Бренд</span>
            <div className={styles.filter}>
                <ul>
                    {
                        brands?.data?.map((item, index) => {
                            return (
                                <li key={item.id} className={styles.brandWrapper}>
                                    <label>
                                        <input type="checkbox" name="" id="" />
                                        {item.name}
                                    </label>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </> 
    )
}