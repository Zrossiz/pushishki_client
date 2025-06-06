import { useEffect, useState } from 'react';
import styles from './QuizQuestions.module.scss';
import Image from 'next/image';
import { QuizQuestionsProps } from './QuizQuestions.props';
import { IProduct, IProductWithLength } from '@/types';
import { getCategoryProducts, getQuizResults } from '@/api';
import cn from 'classnames';
import { HTag, Input, LinkButton } from '@/elements';
import { SliderItem } from '..';
import { useRouter } from 'next/router';

export const QuizQuestions = ({ setOpen, categories }: QuizQuestionsProps) => {
  const questions: string[] = ['Какая модель вас интересует?', 'Возраст', 'Стоимость'];

  const router = useRouter();

  const [question, setQuesiton] = useState<number>(0);
  const [category, setCategory] = useState<number>(0);
  const [age, setAge] = useState<number>(0);
  const [priceFrom, setPriceFrom] = useState<number>(0);
  const [priceTo, setPriceTo] = useState<number>(0);

  const [result, setResult] = useState<IProduct[]>([]);

  const switchQuestion = async (index: number) => {
    if (question === questions.length) {
      return setOpen(false);
    }

    if (question === questions.length - 1) {
      const products: IProduct[] | { message: string } = await getQuizResults(
        category,
        age,
        priceTo,
      );
      // if ("message" in products) {
      //   router.push(`/categories/`);
      // }
      if (Array.isArray(products)) {
        setResult(products);
      }
    }

    setQuesiton(index + 1);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.questionWrapper}>
        <div className={styles.close} onClick={() => setOpen(false)}>
          <Image src="/icons/Close.svg" width={30} height={30} alt="Закрыть" />
        </div>
        {question <= questions.length - 1 ? (
          <>
            <div className={styles.counter}>
              {question + 1}/{questions.length}
            </div>
            <div className={styles.titleWrapper}>{questions[question]}</div>
            <div className={styles.question}>
              {question === 0 && (
                <div className={styles.categoriesWrapper}>
                  {categories?.map((item, index) => {
                    return (
                      <div
                        key={item.id}
                        onClick={() => setCategory(item.id)}
                        className={cn(styles.category, {
                          [styles.active]: item.id === category,
                        })}
                      >
                        {item.name}
                      </div>
                    );
                  })}
                </div>
              )}
              {question === 1 && (
                <div className={styles.maxAgeWrapper}>
                  <div className={styles.inputWrapper}>
                    До <Input type="text" value={age} onChange={setAge} />
                  </div>
                </div>
              )}
              {question === 2 && (
                <div className={styles.maxAgeWrapper}>
                  <div className={styles.inputWrapper}>
                    От <Input type="text" value={priceFrom} onChange={setPriceFrom} />
                  </div>
                  <div className={styles.inputWrapper}>
                    До <Input type="text" value={priceTo} onChange={setPriceTo} />
                  </div>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className={styles.resultsWrapper}>
            <HTag tag="h2">Вам понравится</HTag>
            <div className={styles.productsWrapper}>
              {result &&
                result.slice(0, 3).map((item, index) => {
                  return <SliderItem key={index} product={item} />;
                })}
            </div>
          </div>
        )}
        <div className={styles.nextQuestionBtnWrapper}>
          <LinkButton
            element="button"
            disabled={category ? false : true}
            onClick={() => switchQuestion(question)}
          >
            {question <= questions.length - 1 ? 'Дальше' : 'Закрыть'}
          </LinkButton>
        </div>
      </div>
    </div>
  );
};
