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
    const [openedQuestions, setOpenedQuestions] = useState<number[]>([]);

    const changeTheme = (index: number) => {
        setOpenedQuestions([]);
        setMenu(index);
    }

    const switchStateOfQuestion = (candidateIndex: number) => {

        if (openedQuestions.length === 0) {
            return setOpenedQuestions([candidateIndex]);
        }

        if (openedQuestions.includes(candidateIndex)) {
            return setOpenedQuestions(openedQuestions.filter(index => index !== candidateIndex));
        }

        return setOpenedQuestions(prevQuestions => [...prevQuestions, candidateIndex]);
        
    };

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
                                onClick={() => changeTheme(index)}
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
                                return (
                                    <li className={styles.question} key={Math.random()}>
                                    <AnimatePresence>
                                        <motion.div
                                            className={styles.titleWrapper} 
                                            onClick={() => switchStateOfQuestion(index)}
                                        >
                                            <HTag tag='h3'>{item.question}</HTag>
                                            <div className={styles.iconWrapper}>
                                                <Image 
                                                    src={'/icons/plus.svg'} 
                                                    height={26} 
                                                    width={26} 
                                                    alt='Открыть'/>
                                            </div>
                                        </motion.div>
                                        {
                                            openedQuestions.includes(index) ? (
                                            <motion.div 
                                                key={Math.random()}
                                                className={cn(styles.answerWrapper, {
                                                    [styles.active]: openedQuestions.includes(index)
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
                                            ) : null
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
                    <div className={styles.contactsWrapper}>
                        <div className={styles.buttonWrapper}>
                            <button>Задать вопрос</button>
                        </div>
                        <a href="#" className={styles.link}>
                            <Image 
                                src={"/icons/WhatsApp.svg"} 
                                width={40} 
                                height={40} 
                                alt='Написать в WhatsApp'
                            />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}