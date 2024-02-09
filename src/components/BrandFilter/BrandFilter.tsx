import { IBrandWithLength } from '@/types';
import styles from './BrandFilter.module.scss';
import { IBrandFilterProps } from './BrandFilter.props';
import { useState } from 'react';
import { Checkbox } from '@/elements';

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
                                <Checkbox name={item.name} />
                            )
                        }) :
                        brands?.data?.slice(0, 4).map((item, index) => {
                            return (
                                <Checkbox name={item.name} />
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