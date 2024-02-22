import { useState } from 'react';
import styles from './QuizQuestions.module.scss';
import Image from 'next/image';
import { QuizQuestionsProps } from './QuizQuestions.props';
import { IProduct, IProductWithLength } from '@/types';
import { getCategoryProducts } from '@/api';
import cn from 'classnames';
import { LinkButton } from '@/elements';

export const QuizQuestions = ({ setOpen, categories }: QuizQuestionsProps) => {

    const questions: string[] = [
        'Какая модель вас интересует?',
        'Нагрузка',
        'Стоимость'
    ];

    const [question, setQuesiton] = useState<number>(0);
    const [category, setCategory] = useState<string>('');
    const [maximumLoad, setMaximLoad] = useState<number>(0);
    const [priceFrom, setPriceFrom] = useState<number>(0);
    const [priceTo, setPriceTo] = useState<number>(0);

    let result: IProduct[];

    const switchQuestion = async (index: number) => {

        // if (index + 1 === questions.length) {
        //     const products: IProductWithLength | { message: string } = await getCategoryProducts(category, 1, 1, priceFrom, priceTo, [], [], true, maximumLoad);
        // }

        setQuesiton(index + 1);
    };

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
                <div className={styles.question}>
                    {question === 0 ? 
                        <div className={styles.categoriesWrapper}>
                            {categories?.map((item, index) => {
                                return (
                                    <div 
                                        onClick={() => setCategory(item.slug)} 
                                        className={cn(styles.category, {
                                            [styles.active]: item.slug === category
                                        })}
                                    >{item.name}</div>
                                )
                            })}
                        </div> 
                        : <div>2</div>
                    }
                </div>
                <div className={styles.nextQuestionBtnWrapper}>
                    <LinkButton 
                        element='button' 
                        disabled={category ? false : true}
                        onClick={() => switchQuestion(question)}
                    >
                        Дальше
                    </LinkButton>
                </div>
            </div>
        </div>
    )
}