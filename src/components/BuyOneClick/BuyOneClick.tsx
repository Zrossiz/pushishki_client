import { HTag, Input } from '@/elements';
import styles from './BuyOneClick.module.scss';
import { BuyOneClickProps } from './BuyOneClick.props';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';


export const BuyOneClick = ({ setOpen }: BuyOneClickProps) => {
    return (
        <div className={styles.wrapper}>
            <AnimatePresence>
                <motion.div
                    className={styles.formWrapper}
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, }}
                >
                    <div className={styles.close} onClick={() => setOpen(false)}>
                        <Image src="/icons/Close.svg" width={30} height={30} alt="Закрыть" />
                    </div>
                    <div>
                        <HTag tag='h2'>Купить в один клик</HTag>
                    </div>
                    <div className={styles.inputsWrapper}>
                        <Input placeholder="Имя" type="text" />
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}