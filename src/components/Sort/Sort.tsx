import { useState } from "react";
import Image from "next/image";
import styles from './Sort.module.scss';
import { AnimatePresence, motion } from "framer-motion";

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
                onClick={() => setOpen(!open)}
            >
                <Image src={'/icons/Sort.svg'} width={48} height={48} alt="Сортировать" />
                {settings[setting]}
            </div>
            <AnimatePresence>
            {
                    open &&
                    <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: 150 }}
                        exit={{ height: 0 }} 
                        transition={{ duration: 0.4 }}
                        className={styles.sortList}
                    >
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
                    </motion.div>
            }
            </AnimatePresence>
        </div>
    )
}