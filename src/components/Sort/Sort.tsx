import { useState } from "react";
import styles from './Sort.module.scss';

export const Sort = () => {

    const settings: string[] = ['Популярные', 'Сначала дешевые', 'Сначала дорогие'];

    const [setting, setSetting] = useState<number>(0);
    const [open, setOpen] = useState<boolean>(false);

    const chooseSetting = (index: number) => {
        setSetting(index);
        setOpen(false);
    }

    return (
        <div className={styles.sortWrapper}>
            <div 
                className={styles.titleWrapper}
                onClick={() => setOpen(true)}
            >
                {settings[setting]}
            </div>
            {
                open &&
                <div className={styles.sortList}>
                    {
                        settings.map((item, index) => {
                            return (
                                <div 
                                    className={styles.sortOption} 
                                    key={index}
                                    onClick={() => chooseSetting(index)}
                                >
                                    {item}
                                </div>
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}