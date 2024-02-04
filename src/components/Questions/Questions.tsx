import cn from 'classnames';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './Questions.module.scss';
import { useState } from "react";
import { HTag } from '@/elements';
import { motion, AnimatePresence } from "framer-motion";
import { themes } from './Data';


export const Questions = () => {
    const [menu, setMenu] = useState<number>(0);
    return (
        <>
            <div className={styles.paginationWrapper}>
                <ul>
                    {themes.map((item, index:number) => {
                        return (
                            <li 
                                className={cn({
                                    [styles.green]: menu === index
                                })}
                                onClick={() => setMenu(index)}
                                key={index}
                            >
                                {item.title}
                                {index === menu ? (
                                    <motion.div className={styles.active} layoutId="underline" />
                            ) : null}
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className={styles.questionsWrapper}>
                <div className={styles.questions}>
                    <ul>
                        {
                            themes[menu].questions.map((item, index) => {
                                const [activeQuestion, setActiveQuestion] = useState<boolean>(false);
                                return (
                                    <li className={styles.question} key={index}>
                                    <AnimatePresence>
                                        <motion.div
                                            className={styles.titleWrapper} 
                                            onClick={() => setActiveQuestion(!activeQuestion)}
                                        >
                                            <HTag tag='h3'>{item.question}</HTag>
                                            <div className={styles.iconWrapper}>
                                                <Image src={'/icons/plus.svg'} height={26} width={26} alt='Открыть'/>
                                            </div>
                                        </motion.div>
                                        {
                                            activeQuestion && (
                                            <motion.div 
                                                className={cn(styles.answerWrapper, {
                                                    [styles.active]: activeQuestion
                                                })}
                                                initial={{ y: 10, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                exit={{ y: -10, opacity: 0 }}
                                                transition={{ duration: 0.4 }}
                                            >
                                                <span>
                                                {item.answer}
                                                </span>
                                            </motion.div>
                                            )
                                        }
                                    </AnimatePresence>
                                </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className={styles.popularQuestionWrapper}>
                    <div className={styles.popularQuestion}>
                        <div className={styles.questionWrapper}>
                            <HTag tag="h3">
                                {themes[menu].popular?.title}
                            </HTag>
                        </div>
                        <div className={styles.answerWrapper}>
                            <span>
                                {themes[menu].popular?.answer}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}