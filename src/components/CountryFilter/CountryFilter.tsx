import { Checkbox } from '@/elements';
import styles from './CountryFilter.module.scss';
import { ICountryFilterProps } from './CountryFilter.props';
import { useState } from 'react';


export const CountryFilter = ({ countries }: ICountryFilterProps) => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <span className={styles.span}>Страна</span>
            <div className={styles.filter}>
                <ul className={styles.list}>
                    {
                        open ?
                        countries?.data?.map((item, index) => {
                            return (
                                <Checkbox key={item.id} name={item.name} />
                            )
                        }) :
                        countries?.data?.slice(0, 4).map((item, index) => {
                            return (
                                <Checkbox key={item.id} name={item.name} />
                            )
                        }) 
                    }
                </ul>
                <div className={styles.openAll} onClick={() => setOpen(!open)}>
                    { open ? 'Скрыть' : 'Показать'}
                </div>
            </div>
        </> 
    )
}