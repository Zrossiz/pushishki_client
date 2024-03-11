import { HTag } from '@/elements';
import styles from './InfoPopup.module.scss';
import { motion } from 'framer-motion';
import { InfoPopupProps } from './InfoPopup.props';
import cn from 'classnames';

export const InfoPopup = ({ title, description, order }: InfoPopupProps) => {
    return (
        <motion.div 
            className={styles.wrapper}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
                <div 
                    className={cn(styles.popupWrapper, {
                        [styles.order]: order
                    })}
                >
                    <HTag tag='h2' color={order ? 'white' : 'black'}>{title}</HTag>
                    <span className={cn({
                        [styles.white]: order
                    })}>{description}</span>
                </div>
        </motion.div>
    )
}