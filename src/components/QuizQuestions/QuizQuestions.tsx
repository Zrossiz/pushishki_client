import { useEffect, useState } from 'react';
import styles from './QuizQuestions.module.scss';
import Image from 'next/image';
import { QuizQuestionsProps } from './QuizQuestions.props';
import { IProduct, IProductWithLength } from '@/types';
import { getCategoryProducts } from '@/api';
import cn from 'classnames';
import { Input, LinkButton } from '@/elements';

export const QuizQuestions = ({ setOpen, categories }: QuizQuestionsProps) => {

    const questions: string[] = [
        'Какая модель вас интересует?',
        'Нагрузка',
        'Стоимость'
    ];

    const [question, setQuesiton] = useState<number>(0);
    const [category, setCategory] = useState<string>('');
    const [maximumLoad, setMaximLoad] = useState<number>(0);
    const [priceTo, setPriceTo] = useState<number>(0);

    let result: IProduct[];

    const switchQuestion = async (index: number) => {

        if (question === questions.length) {
            return setOpen(false);
        }

        const products: IProductWithLength | { message: string } = await getCategoryProducts(category, 1, 1, 0, priceTo, [], [], true, maximumLoad);
        console.log(products)
        setQuesiton(index + 1);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.questionWrapper}>
                <div className={styles.close} onClick={() => setOpen(false)}>
                    <Image src="/icons/Close.svg" width={30} height={30} alt='Закрыть' />
                </div>
                {
                    question <= questions.length - 1 ?
                        <>
                            <div className={styles.counter}>
                    {question + 1}/{questions.length}
                </div>
                <div className={styles.titleWrapper}>{questions[question]}</div>
                <div className={styles.question}>
                    {question === 0 &&
                        <div className={styles.categoriesWrapper}>
                            {categories?.map((item, index) => {
                                return (
                                    <div 
                                        key={item.id}
                                        onClick={() => setCategory(item.slug)} 
                                        className={cn(styles.category, {
                                            [styles.active]: item.slug === category
                                        })}
                                    >{item.name}</div>
                                )
                            })}
                        </div> 
                    }
                    {question === 1 &&
                        <div className={styles.maximumLoadWrapper}>
                            <div className={styles.inputWrapper}>
                                От <Input type='text' defaultValue={0} />
                            </div>
                            <div className={styles.inputWrapper}>
                                До <Input type='text' value={maximumLoad} onChange={setMaximLoad} />
                            </div>
                        </div>
                    }
                    {
                        question === 2 && 
                        <div className={styles.inputWrapper}>
                            До <Input type='text' value={maximumLoad} onChange={setPriceTo} />
                        </div>
                    }
                </div>
                        </> : 'Конец'
                }
                <div className={styles.nextQuestionBtnWrapper}>
                    <LinkButton 
                        element='button' 
                        disabled={category ? false : true}
                        onClick={() => switchQuestion(question)}
                    >
                        {question <= questions.length - 1 ? "Дальше" : "Закрыть"}
                    </LinkButton>
                </div>
            </div>
        </div>
    )
}