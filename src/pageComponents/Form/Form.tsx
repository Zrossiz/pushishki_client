import { HTag } from '@/elements';
import styles from './Form.module.scss';
import Image from 'next/image';
import { useState } from 'react';
import cn from 'classnames';
import { motion } from 'framer-motion';

export const Form = () => {
    const [send, setSend] = useState<boolean>(false);
    return (
        <section className={styles.form}>
            <div className={styles.wrapper}>
                <div className={styles.titleWrapper}>
                    <HTag tag='h2'>Связаться с нами</HTag>
                </div>
                <form className={styles.formWrapper} method='POST'>
                    <input type="text" required placeholder='Имя' />
                    <input type="text" required placeholder='Телефон' />
                    <input className={styles.big} type="text" placeholder='Ваш вопрос' />
                </form>
                <div className={styles.buttonWrapper}>
                    <button onClick={() => setSend(true)}>
                        Отправить
                        <div className={cn(styles.iconWrapper, {
                            [styles.activeIcon]: send
                        })}>
                            <Image src={'/icons/Plane.svg'} height={26} width={26} alt='Отправить' />
                        </div>
                        {
                            send && (
                                <motion.div
                                  initial={{ y: 10, opacity: 0 }}
                                  animate={{ y: 0, opacity: 1 }}
                                  exit={{ y: -10, opacity: 0 }}
                                  transition={{ duration: 0.4, delay: 0.6 }}
                                  className={styles.sended}
                                >
                                    <Image src={'/icons/check.svg'} height={40} width={40} alt='Отправлено' />
                                </motion.div>
                            )
                        }
                    </button>
                </div>
            </div>
            <div className={styles.reviewsWrapper}>отзывы</div>
        </section>
    )
}