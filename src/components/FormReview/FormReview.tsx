import { HTag, Input, LinkButton } from '@/elements';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './FormReview.module.scss';
import { FormReviewProps } from './FormReview.props';
import Image from 'next/image';
import { useState } from 'react';
import { RatingComponent } from '../Rating/Rating';
import { postReview } from '@/api';

export const FormReview = ({ setOpen, productId = 1 }: FormReviewProps) => {
    const [name, setName] = useState<string>('');
    const [rating, setRating] = useState<number>(0);
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const sendReview = async () => {
        await postReview(productId, name, rating, title, description);
        // setOpen(false);
        console.log(true);
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.background} onClick={() => setOpen(false)}></div>
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
                            <RatingComponent rating={rating} setRating={setRating} />
                        </div>
                        <div className={styles.titleWrapper}>
                            <Input placeholder='Заголовок' value={title} onChange={setTitle} type='text' />
                        </div>
                        <div className={styles.descWrapper}>
                            <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={4} placeholder='Комментарий'></textarea>
                        </div>
                    </div>
                    <div className={styles.sendWrapper}>
                        <span>Ваш отзыв будет виден после модерации</span>
                        <LinkButton 
                            disabled={name && rating > 0 && title && description ? false : true} 
                            element='button'
                            onClick={() => sendReview()}
                        >Отправить</LinkButton>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}