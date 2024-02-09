import { IBrandWithLength } from '@/types';
import styles from './BrandFilter.module.scss';
import { IBrandFilterProps } from './BrandFilter.props';
import { useState } from 'react';

export const BrandFilter = ({ brands }: IBrandFilterProps) => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <span className={styles.span}>Бренд</span>
            <div className={styles.filter}>
                <ul className={styles.list}>
                    {
                        open ?
                        brands?.data?.map((item, index) => {
                            return (
                                <li key={item.id} className={styles.brandWrapper}>
                                    <label className={styles.label}>
                                        <input className={styles.input} type="checkbox" name="" id="" />
                                        <span>
                                            {item.name}
                                        </span>
                                    </label>
                                </li>
                            )
                        }) :
                        brands?.data?.slice(0, 4).map((item, index) => {
                            return (
                                <li key={item.id} className={styles.brandWrapper}>
                                    <label className={styles.label}>
                                        <input className={styles.input} type="checkbox" name="" id="" />
                                        <span>
                                            {item.name}
                                        </span>
                                    </label>
                                </li>
                            )
                        }) 
                    }
                </ul>
                <div onClick={() => setOpen(!open)}>
                    { open ? 'Скрыть' : 'Показать'}
                </div>
            </div>
        </> 
    )
}