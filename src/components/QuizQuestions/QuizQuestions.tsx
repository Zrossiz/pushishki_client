import { useState } from 'react';
import styles from './QuizQuestions.module.scss';
import Image from 'next/image';
import { QuizQuestionsProps } from './QuizQuestions.props';

export const QuizQuestions = ({ setOpen }: QuizQuestionsProps) => {

    const questions: string[] = [
        'Какая модель вас интересует?',
        'Нагрузка',
        'Стоимость'
    ];

    const [question, setQuesiton] = useState<number>(0);

    return (
        <div className={styles.wrapper}>
            <div className={styles.questionWrapper}>
                <div className={styles.close} onClick={() => setOpen(false)}>
                    <Image src="/icons/Close.svg" width={30} height={30} alt='Закрыть' />
                </div>
                <div className={styles.counter}>
                    {question + 1}/{questions.length}
                </div>
                <div className={styles.titleWrapper}>{questions[question]}</div>
            </div>
        </div>
    )
}