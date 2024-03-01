import { HTag } from '@/elements';
import styles from './InfoPopup.module.scss';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { InfoPopupProps } from './InfoPopup.props';

export const InfoPopup = ({ title, description }: InfoPopupProps) => {
    return (
        <AnimatePresence>
            <motion.div 
                className={styles.wrapper}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
            >
                    <div 
                        className={styles.popupWrapper}
                    >
                        <HTag tag='h2'>{title}</HTag>
                        <span>{description}</span>
                    </div>
            </motion.div>
        </AnimatePresence>
    )
}