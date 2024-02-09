import { Checkbox } from '@/elements';
import styles from './CountryFilter.module.scss';
import { ICountryFilterProps } from './CountryFilter.props';
import { useState } from 'react';


export const CountryFilter = ({ countries }: ICountryFilterProps) => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <span className={styles.span}>Страны</span>
            <div className={styles.filter}>
                <div className={styles.list}>
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
                </div>
                {
                    countries?.length && countries?.length >= 4 
                    ?
                    <div className={styles.openAll} onClick={() => setOpen(!open)}>
                        { open ? 'Скрыть' : 'Показать'}
                    </div>
                    : 
                    null
                }
            </div>
        </> 
    )
}