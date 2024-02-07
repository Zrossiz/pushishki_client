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
    const [openedQuestion, setOpenedQuestion] = useState<number>(10);

    const changeTheme = (index: number) => {
        setOpenedQuestion(10);
        setMenu(index);
    }

    // const switchStateOfQuestion = (candidateIndex: number) => {

    //     if (openedQuestions.length === 0) {
    //         return setOpenedQuestions([candidateIndex]);
    //     }

    //     if (openedQuestions.includes(candidateIndex)) {
    //         return setOpenedQuestions(openedQuestions.filter(index => index !== candidateIndex));
    //     }

    //     return setOpenedQuestions(prevQuestions => [...prevQuestions, candidateIndex]);
        
    // };

    return (
        <>
        <section className={styles.question}>
        <div className={styles.titleWrapper}>
          <HTag tag="h2">
            Вопросы и ответы
          </HTag>
        </div>
        <div className={styles.questionsElemsWrapper}>
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
                                    <li className={styles.questionItem} key={Math.random()}>
                                    <AnimatePresence>
                                        <motion.div
                                            className={styles.titleWrapper} 
                                            onClick={() => setOpenedQuestion(index)}
                                        >
                                            <HTag tag='h3'>{item.question}</HTag>
                                            <div 
                                                className={cn(styles.iconWrapper, {
                                                    [styles.activeIcon]: openedQuestion === index,
                                                })}
                                            >
                                                <Image 
                                                    src={'/icons/plus.svg'} 
                                                    height={26} 
                                                    width={26} 
                                                    alt='Открыть'/>
                                            </div>
                                        </motion.div>
                                        <div 
                                            key={Math.random()}
                                            className={cn(styles.answerWrapper, {
                                                [styles.active]: openedQuestion === index
                                            })}
                                        >
                                            <span style={{minHeight: 0}} className={styles.span}>
                                                {item.answer}
                                            </span>
                                        </div>
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
            </div>
            </section>
        </>
    )
}