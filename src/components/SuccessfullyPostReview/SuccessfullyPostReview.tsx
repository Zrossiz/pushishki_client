import { HTag } from '@/elements';
import styles from './SuccessfullyPostReview.module.scss';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

export const SuccessfullyPostReview = () => {
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
                        <HTag tag='h2'>Спасибо за отзыв!</HTag>
                        <span>Он будет доступен после модерации</span>
                    </div>
            </motion.div>
        </AnimatePresence>
    )
}