import { HTag, Input, LinkButton } from '@/elements';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './FormReview.module.scss';
import { FormReviewProps } from './FormReview.props';
import Image from 'next/image';
import { useState } from 'react';
import { RatingComponent } from '../Rating/Rating';

export const FormReview = ({ setOpen }: FormReviewProps) => {
    const [name, setName] = useState<string>('');
    const [rating, setRating] = useState<number>(0);

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
                        <HTag tag='h2'>Оставить отзыв</HTag>
                    </div>
                    <div className={styles.inputsWrapper}>
                        <div className={styles.nameRatingWrapper}>
                            <Input placeholder='Ваше имя и фамилия' value={name} onChange={setName} type='text' />
                        </div>
                        <RatingComponent rating={rating} setRating={setRating} />
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}